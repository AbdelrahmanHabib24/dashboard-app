import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/utils/firebase";
import { User } from "@/utils/type";
import { initialState } from "@/utils/data";


//FetchUsers
export const fetchUsers = createAsyncThunk("table/fetchUsers", async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  const users: User[] = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    users.push({
      id: data.id,
      name: data.name,
      email: data.email,
      role: data.role,
      activity: data.activity,
      score:data.score
    });
  });
  return users;
});


//  setSort &&  setCurrentPage && setFilter
const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setCurrentPage: (state, action: { payload: number }) => {
      state.currentPage = action.payload;
    },
    setSort: (
      state,
      action: { payload: { field: string; order: string } }
    ) => {
      const { field, order } = action.payload;
      state.sort = { field, order };
      state.filteredData = [...state.filteredData].sort((a, b) => {
        if (order === "asc") {
          return a[field as keyof User] > b[field as keyof User] ? 1 : -1;
        }
        return a[field as keyof User] < b[field as keyof User] ? 1 : -1;
      });
    },
    setFilter: (state, action: { payload: string }) => {
      state.filter = action.payload;
      state.filteredData = state.data.filter((item) =>
        item.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      state.currentPage = 1;
    },
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.filteredData = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch users";
      });
  },
});

export const { setCurrentPage, setSort, setFilter } = tableSlice.actions;
export default tableSlice.reducer;