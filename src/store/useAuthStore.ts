import {
  AXIOS_REMOVE_AUTH_TOKEN,
  AXIOS_SET_AUTH_TOKEN,
} from "@/middleware/axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const authToken = (token: string | null) => {
  if (token) {
    AXIOS_SET_AUTH_TOKEN(token);
  } else {
    AXIOS_REMOVE_AUTH_TOKEN();
  }
};

interface UserDetails {
  token: string;
  role: string;
  email: string;
  name: string;
}

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  loggedInUserDetails: UserDetails | null;
  setLoggedInUserDetails: (userDetails: UserDetails) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      isAuthenticated: false,
      loggedInUserDetails: null,
      setLoggedInUserDetails: (userDetails: UserDetails) => {
        set({
          loggedInUserDetails: userDetails,
          token: userDetails.token,
          isAuthenticated: !!userDetails.token,
        });
        const { token } = userDetails;
        authToken(token);
      },
      logout: () =>
        set({
          isAuthenticated: false,
          loggedInUserDetails: null,
          token: null,
        }),
    }),
    {
      name: "auth-storage",
      getStorage: () => localStorage,
    }
  )
);
