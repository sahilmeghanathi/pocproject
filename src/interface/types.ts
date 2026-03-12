export interface FormData {
  id?: string;
  email?: string;
  name?: string;
  password?: string;
  phone?: string;
}

export interface FormDataTableProps {
  dataSource: FormData[];
  handleDelete: (id: string) => void;
}

export interface FormContainerProps {
  formData: FormData[];
  updateFormData: (newFormData: FormData) => void;
}

export interface User {
  email: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  error: string | null;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  available: boolean;
}

export interface MenuState {
  menuItems: MenuItem[];
}


