import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";
import { Eye, EyeOff, Lock, User } from "lucide-react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const inputClass =
    "w-full rounded-lg border border-line bg-card py-3 pl-11 pr-3 text-white outline-none transition placeholder:text-gray-500 focus:border-gold focus:ring-2 focus:ring-gold/30";

  const { login, logout } = useAuth();

  useEffect(() => {
    logout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loggedUser = login(username, password);

    if (!loggedUser) {
      setError("Username or Password is incorrect");
      return;
    }

    navigate(loggedUser.role === "admin" ? "/admin" : "/pos");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow w-80 space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">Grill Master</h1>
        <div className="relative">
          <User
            size={18}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />
          <input
            type="text"
            placeholder="Username"
            aria-label="Username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setError("");
            }}
            className={inputClass}
          />
        </div>

        <div className="relative">
          <Lock
            size={18}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            aria-label="Password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            className={`${inputClass} pr-11`}
          />
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 transition-colors hover:text-gold"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
        >
          Login
        </button>
      </form>
    </div>
  );
}
