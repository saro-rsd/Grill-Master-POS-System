import { useEffect, useState } from "react";
import { Clock, User } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

export default function Header() {
  const { user } = useAuth();
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(timer);
  },[]);

  if(!user) return null;

  const data = now.toLocaleDateString("en-GB", {
    day: "2-digit", month: "short", year: "numeric",
  });

  const time = now.toLocaleDateString("en-US", {
    hour: "2-digit", minute: "2-digit",
  });

  const title = user.role === "admin" ? "Admin Panel" : `Cashier : ${user.name}`;


}
