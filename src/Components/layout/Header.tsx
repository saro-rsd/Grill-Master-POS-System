import { useEffect, useState } from "react";
import { Clock, User } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

export default function Header() {
  const { user } = useAuth();
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(timer);
  }, []);

  if (!user) return null;

  const date = now.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const title =
    user.role === "admin" ? "Admin Panel" : `Cashier : ${user.name}`;

  return (
    <header className="flex items-center justify-between border-b border-line bg-panel px-6 py-3">
      <div className="flex items-center gap-2 text-lg font-semibold">
        <User size={20} />
        {title}
      </div>

      <div className="flex items-center gap-6 text-sm text-gray-300">
        <span className="flex items-center gap-2">
          <Clock size={16} />
          {date} | {time}
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          Online
        </span>
      </div>
    </header>
  );
}
