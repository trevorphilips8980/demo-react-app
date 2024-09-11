import AXIOS from "@/middleware/axios";

export interface LoginData {
  email: string;
  password: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role_name: string;
  token: string;
}

export interface LoginResponse {
  data: User;
  status: boolean;
  message: string;
}
export interface successResponse {
  message: string;
  status: boolean;
  data: [];
}

export type IRegisterUser = {
  name: string;
  email: string;
  role: "seller" | "customer";
  password: string;
  password_confirmation: string;
};

export const AUTH_SERVICE = {
  async login(userData: LoginData): Promise<LoginResponse> {
    return await AXIOS.post(`login`, userData);
  },
  async register(userData: IRegisterUser): Promise<successResponse> {
    return await AXIOS.post(`register`, userData);
  },

  async updateProfile(userData: any): Promise<successResponse> {
    return await AXIOS.post(`profile-update`, userData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};

// Login Response
// {
//   "status": true,
//   "message": "User logged in successfully",
//   "data": {
//     "id": "2VolejRejNmG",
//     "name": "John",
//     "email": "john.doe@gmail.com",
//     "role_name": "customer",
//     "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNzI1OTg2MzQ5LCJleHAiOjE3MjU5ODk5NDksIm5iZiI6MTcyNTk4NjM0OSwianRpIjoibndob1h2R0NEUnJQNExRRSIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.nfTooYyXHM09GkwN04GHn1UV8jaVgvgk6SgIAwRlOhA"
//   }
// }

// Register Response
// {
//   "status": true,
//   "message": "User registered successfully.",
//   "data": []
// }

// Update profile Response
// {
//   "status": true,
//   "message": "Profile has been updated successfully.",
//   "data": []
// }
