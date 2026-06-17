import { API_ENDPOINTS } from "./apiEndpoints";
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
    API_ENDPOINTS.AUTH.LOGIN,
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
    API_ENDPOINTS.AUTH.ME
  );

  return response.data;
};

export const refreshTokenApi = async (
  refreshToken: string
) => {
  const response = await publicApi.post(
    API_ENDPOINTS.AUTH.REFRESH,
    {
      refreshToken,
      expiresInMins: 30,
    }
  );

  return response.data;
};