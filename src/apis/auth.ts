import { publicApi } from "./publicApi";

export interface LoginPayload {
  username: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;

  id: number;
  username: string;
  email: string;
  role: string;
}

export const loginApi = async (
  payload: LoginPayload
): Promise<LoginResponse> => {
  const response = await publicApi.post(
    "/auth/login",
    {
      username: payload.username,
      password: payload.password,
      expiresInMins: 30,
    }
  );

  return response.data;
};

export const getCurrentUser = async () => {
  const response = await publicApi.get(
    "/auth/me"
  );

  return response.data;
};

export const refreshTokenApi = async (
  refreshToken: string
) => {
  const response = await publicApi.post(
    "/auth/refresh",
    {
      refreshToken,
      expiresInMins: 30,
    }
  );

  return response.data;
};