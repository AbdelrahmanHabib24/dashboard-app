import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "@/utils/type";



//AuthState
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
  } as AuthState,
  reducers: {
    login: (state, action: PayloadAction<{ id: string; name: string; email: string }>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;