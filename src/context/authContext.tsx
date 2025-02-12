import {
  createContext,
  useEffect,
  useState,
  useContext,
  ReactNode,
} from "react";

export interface User {
  id: string;
  email: string;
  given_name: string;
  family_name: string;
  email_verified: boolean;
}

export interface Account {
  user_id: string;
  provider: string;
  provider_account_id: string;
  access_token: string;
  expires_at: string;
  token_type: string;
  refresh_token: string;
  image: string;
}

export interface Token {
  access_token: string;
  token_type: string;
  expires_in: number;
  provider: string;
}

export interface AuthState {
  user: User | null;
  account: Account | null;
  token: Token | null;
}

const initialState: AuthState = {
  user: null,
  account: null,
  token: null,
};

export const AuthContext = createContext(initialState);

// Custom Hook to access AuthState
export const useAuth = (): AuthState => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [account, setAccount] = useState<Account | null>(null);
  const [token, setToken] = useState<Token | null>(null);

  return (
    <AuthContext.Provider
      value={{
        user: [user, setUser],
        account: [account, setAccount],
        token: [token, setToken],
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
