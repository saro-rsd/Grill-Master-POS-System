import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/auth/Login";
import AdminDashboard from "../pages/admin/AdminDashboard";
import POS from "../pages/cashier/POS";
import Unauthorized from "../pages/Unauthorized";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "../pages/NotFound";
import MainLayout from "../components/layout/MainLayout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/admin" element={<AdminDashboard />} />
      </Route>

      <Route
        element={
          <ProtectedRoute allowedRoles={["cashier"]}>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/pos" element={<POS />} />
      </Route>
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
