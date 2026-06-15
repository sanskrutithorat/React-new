import { useMutation } from "@tanstack/react-query";

import { loginApi } from "@/apis/auth";
import { useAuthStore } from "@/store/authStore";

export const useLogin = () => {
  const setAuth = useAuthStore(
    (s) => s.setAuth
  );

  return useMutation({
    mutationFn: loginApi,

    onSuccess: (data) => {
      setAuth(
        data.accessToken,
        data.refreshToken,
        {
          id: data.id,
          username: data.username,
          email: data.email,
          role: data.role,
        }
      );
    },
  });
};