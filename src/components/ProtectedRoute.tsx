import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredUserType?: 'customer' | 'admin';
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredUserType }) => {
  const token = localStorage.getItem('userToken') || sessionStorage.getItem('userToken');
  const userType = localStorage.getItem('userType') || sessionStorage.getItem('userType');

  // Check if user is authenticated
  if (!token) {
    return <Navigate to="/signin" replace />;
  }

  // Check if user type matches requirement
  if (requiredUserType && userType !== requiredUserType) {
    return <Navigate to="/signin" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
