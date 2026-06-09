// import { publicApi } from "./publicApi";

export interface LoginPayload {
    email: string;
    password: string;
  }
  
  export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
  
    user: {
      id: string;
      email: string;
      role: string;
    };
  }

// export const loginApi = async (
//   payload: LoginPayload
// ): Promise<LoginResponse> => {
//   const response = await publicApi.post(
//     "/auth/login",
//     payload
//   );

//   return response.data;
// };


export const loginApi = async (
    payload: LoginPayload
  ): Promise<LoginResponse> => {
  
    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );
  
    if (
      payload.email === "admin@gmail.com" &&
      payload.password === "Pass@123"
    ) {
      return {
        accessToken:
          "fake-access-token",
  
        refreshToken:
          "fake-refresh-token",
  
        user: {
          id: "1",
          email: "admin@gmail.com",
          role: "admin",
        },
      };
    }
  
    throw new Error(
      "Invalid email or password"
    );
  };