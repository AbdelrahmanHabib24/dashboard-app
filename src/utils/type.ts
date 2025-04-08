


export interface LineChartData {
  name: string;
  value: number;
}

export interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export interface SidebarLinkProps {
    href: string;
    icon: React.ReactElement;
    label: string;
    isSidebarOpen: boolean;
  }

  export interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    activity: number;
    score : number
  }
  
  export interface TableState {
    data: User[];
    filteredData: User[];
    currentPage: number;
    pageItems: number;
    sort: { field: string; order: string };
    filter: string;
    loading: boolean;
    error: string | null;
  }

  export interface AuthState {
    user: { id: string; name: string; email: string } | null;
    isAuthenticated: boolean;
  }