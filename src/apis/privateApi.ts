import axios from "axios";

import { useAuthStore } from "@/store/authStore";

export const privateApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

privateApi.interceptors.request.use(
  (config) => {
    const accessToken =
      useAuthStore.getState()
        .accessToken;

    if (accessToken) {
      config.headers.Authorization =
        `Bearer ${accessToken}`;
    }

    return config;
  }
);