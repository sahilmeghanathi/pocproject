import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

import LoginComponent from "../pages/login/Login";
import MenuManageUI from "../pages/menu/MenuList";
import AddEditMenuPage from "../pages/addEditMenu/AddEditMenu";
import ProductDetailPage from "../pages/productDetail/productDetailPage";
import DashboardComponent from "../pages/dashboard/DashboardComponent";
import { useAppSelector } from "../store/hooks";

const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  // Layout that protects all child routes
  const ProtectedLayout = () => {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    return <Outlet />;
  };

  return (
    <Routes>
      {/* Default */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Public Route */}
      <Route
        path="/login"
        element={
          isAuthenticated ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <LoginComponent />
          )
        }
      />

      {/* Protected Routes Group */}
      <Route element={<ProtectedLayout />}>
        <Route path="/dashboard" element={<DashboardComponent />} />

        <Route path="/menu" element={<MenuManageUI />} />
        <Route path="/menu/add" element={<AddEditMenuPage />} />
        <Route path="/menu/edit/:id" element={<AddEditMenuPage />} />
        <Route path="/menu/:id" element={<ProductDetailPage />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
