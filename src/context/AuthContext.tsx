import { createContext } from "react";
import { useState } from "react";
import type { ReactNode } from "react";
import type { User } from "../types/User";
import { users } from "../data/users";

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, steUser] = useState<User | null>(null);


}
