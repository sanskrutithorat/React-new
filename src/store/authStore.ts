// import { create } from "zustand";

// interface AuthState {
//   token: string | null;
//   role: string | null;

//   setToken: (token: string) => void;
// }

// export const useAuthStore = create<AuthState>((set) => ({
//   token: null,
//   role: null,

//   setToken: (token) => set({ token }),
// }));

import { create } from "zustand";

interface AuthState {
  token: string | null;
  role: string | null;
}

export const useAuthStore = create<AuthState>(() => ({
  token: "dev-token",
  role: "admin",
}));
