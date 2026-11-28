import { createContext } from "react";
import { useState } from "react";
import type { ReactNode } from "react";
import type { User } from "../types/User";
import { users } from "../data/users";  

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => User | null;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(()=>{
    const saved = localStorage.getItem("user");
    return saved ? (JSON.parse(saved) as User) : null;
  });

  const login = (username: string, password: string) : User | null => {
    const foundUser = users.find((u) => u.username === username);

    if (foundUser && password === "1234") {
      setUser(foundUser);
      return foundUser;
    }
    return null;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{user, login, logout}}>
        {children}
    </AuthContext.Provider>
  );
}
