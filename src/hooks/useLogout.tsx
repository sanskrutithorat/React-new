import { useAuthStore } from "@/store/authStore";

export const useLogout = () => {
  const logout =
    useAuthStore(
      (state) => state.logout
    );

  return () => {
    logout();

    localStorage.removeItem(
      "auth-storage"
    );

    window.location.href =
      "/auth/login";
  };
};