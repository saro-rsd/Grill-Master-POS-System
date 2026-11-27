import { NavLink, useNavigate } from "react-router-dom";
import {
  ShoppingCart, ClipboardList, ChartColumn, Settings,
  LogOut, LayoutDashboard, UtensilsCrossed, Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";
import type { Role } from "../../types/User";

