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

export default function Slidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if(!user) return null;

  const handleLogout = () =>{
    logout();
    navigate("/login");
  };

  return(
    
  )

}
