import { NavLink, useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  ClipboardList,
  ChartColumn,
  Settings,
  LogOut,
  LayoutDashboard,
  UtensilsCrossed,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";
import type { Role } from "../../types/User";

interface MenuItem {
  label: string;
  path: string;
  icon: LucideIcon;
}

const menus: Record<Role, MenuItem[]> = {
  cashier: [
    { label: "POS", path: "/pos", icon: ShoppingCart },
    { label: "Orders", path: "/pos/orders", icon: ClipboardList },
    { label: "Reports", path: "/pos/reports", icon: ChartColumn },
    { label: "Setting", path: "/pos/setting", icon: Settings },
  ],
  admin: [
    { label: "Dashboard", path: "/admin", icon: LayoutDashboard },
    { label: "Menu Management", path: "/admin/menu", icon: UtensilsCrossed },
    { label: "Orders", path: "/admin/orders", icon: ClipboardList },
    { label: "Sales Reports", path: "/admin/reports", icon: ChartColumn },
    { label: "Users", path: "/admin/users", icon: Users },
    { label: "Settings", path: "/admin/settings", icon: Settings },
  ],
};

export default function Sidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className="flex w-56 flex-col border-r border-line bg-panel p-4">
      <img
        src="/images/logo.png"
        alt="Grill Master"
        className="mx-auto mb-6 h-24"
      />

      <nav className="flex flex-1 flex-col gap-1">
        {menus[user.role].map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2.5 font-medium ${
                isActive
                  ? "bg-gold text-black"
                  : "text-gray-300 hover:bg-raised"
              }`
            }
          >
            <item.icon size={20} />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <button
        onClick={handleLogout}
        className="flex items-center justify-center gap-2 rounded-lg border border-red-500 py-2 text-red-500 hover:bg-red-500/10"
      >
        <LogOut size={18} />
        Logout
      </button>
    </aside>
  );
}
