import { useMutation } from "@tanstack/react-query";

import {
  loginApi,
  type LoginPayload,
  type LoginResponse,
} from "@/apis/auth";

import { useAuthStore } from "@/store/authStore";

export const useLogin = () => {
  const setAuth = useAuthStore(
    (state) => state.setAuth
  );

  return useMutation<
    LoginResponse,
    Error,
    LoginPayload
  >({
    mutationFn: loginApi,

    onSuccess: (data) => {
      setAuth({
        accessToken:
          data.accessToken,

        refreshToken:
          data.refreshToken,

        user: data.user,
      });
    },
  });
};