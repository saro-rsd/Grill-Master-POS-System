import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/auth/Login";
import AdminDashboard from "../pages/admin/AdminDashboard";
import POS from "../pages/cashier/POS";
import Unauthorized from "../pages/Unauthorized";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/cashier"
        element={
          <ProtectedRoute allowedRoles={["cashier"]}>
            <POS />
          </ProtectedRoute>
        }
      />

      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
