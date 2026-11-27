import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import type { Role } from "../types/User";

interface ProtectedRouteProps{
    children : ReactNode
    allowedRoles : Role[]
}

export default function ProtectedRoute({children, allowedRoles} : ProtectedRouteProps){
    const {user} = useAuth();

    if(!user){
        return <Navigate to="/login" replace />
    }

    if(!allowedRoles.includes(user.role)){
        return <Navigate to="/unauthorized" replace />
    }

    return <>{children}</>
}
