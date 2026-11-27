import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();
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
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
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
