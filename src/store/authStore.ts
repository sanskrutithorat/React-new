
// import { create } from "zustand";

// interface AuthState {
//   token: string | null;
//   role: string | null;
// }

// export const useAuthStore = create<AuthState>(() => ({
//   token: "dev-token",
//   role: "admin",
// }));
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  id: string;
  email: string;
  role: string;
}

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;

  user: User | null;

  setAuth: (data: {
    accessToken: string;
    refreshToken: string;
    user: User;
  }) => void;

  logout: () => void;
}

export const useAuthStore =
  create<AuthState>()(
    persist(
      (set) => ({
        accessToken: null,
        refreshToken: null,

        user: null,

        setAuth: ({
          accessToken,
          refreshToken,
          user,
        }) =>
          set({
            accessToken,
            refreshToken,
            user,
          }),

        logout: () =>
          set({
            accessToken: null,
            refreshToken: null,
            user: null,
          }),
      }),
      {
        name: "auth-storage",
      }
    )
  );