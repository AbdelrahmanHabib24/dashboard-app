import { FaTachometerAlt, FaUsers, FaCog } from "react-icons/fa";
import { SidebarLinkProps} from '@/utils/type';
import { TableState } from "@/utils/type";


export const navLinks: SidebarLinkProps[]= [
    {
      href: "/dashboard",
      icon: <FaTachometerAlt size={20} />,
      label: "Dashboard",
      isSidebarOpen: true,
    },
    {
      href: "/dashboard/users",
      icon: <FaUsers size={20} />,
      label: "Users",
      isSidebarOpen: true,
    },
    {
      href: "/dashboard/settings",
      icon: <FaCog size={20} />,
      label: "Settings",
      isSidebarOpen: true,
    },
  ];

 export const initialState: TableState = {
    data: [],
    filteredData: [],
    currentPage: 1,
    pageItems: 5,
    sort: { field: "", order: "" },
    filter: '',
    loading: false,
    error: null,
  };