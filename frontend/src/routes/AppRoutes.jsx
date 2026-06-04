import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

import Home from "../pages/public/Home";
import Products from "../pages/public/Products";
import ProductDetails from "../pages/public/ProductDetails";
import Shops from "../pages/public/Shops";
import ShopDetails from "../pages/public/ShopDetails";

import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/shop/:id" element={<ShopDetails />} />
        </Route>

        {/* Auth Routes */}

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;