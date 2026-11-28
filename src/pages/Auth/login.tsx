import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";
import { Eye, EyeOff, Lock, User, LogIn} from "lucide-react";

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
    <div className="grid min-h-screen bg-page text-white lg:grid-cols-2">
      <div className="relative hidden lg:block">
        <img
          src={encodeURI("/images/Gooey Gourmet Cheeseburger Feast.png")}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-page/40 to-page" />
      </div>
      <div className="flex items-center justify-center p-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow w-80 space-y-4"
        >
          <img
            src="/images/logo.png"
            alt="Grill Master"
            className="mx-auto h-32"
          />

          <div className="text-center">
            <h1 className="font-display text-4xl font-bold">Sign in</h1>
            <p className="mt-1 text-gray-400">
              Enter your username and password to continue.
            </p>
          </div>
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
          {error && (
            <p
              role="alert"
              className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-400"
            >
              {error}
            </p>
          )}
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-gold py-3 font-display text-lg font-semibold text-black transition hover:bg-gold-dark active:scale-[0.98]"
          >
            <LogIn size={20} />
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
