import FullPageLoader from "@/components/ui/FullPageLoader";
import NotFound from "@/pages/404/NotFound";
import AboutUs from "@/pages/about-us/AboutUs";
import ContactUs from "@/pages/contact-us/ContactUs";
import Customer from "@/pages/customer/Customer";
import Navbar from "@/pages/home/Navbar";
import Login from "@/pages/login/Login";
import UserProfile from "@/pages/profile/UserProfile";
import Register from "@/pages/register/Register";
import Seller from "@/pages/seller/Seller";
import { useAuthStore } from "@/store/useAuthStore";
import { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ProtectedRoutes from "./helper/ProtectedRoutes";

const Index = () => {
  const { loggedInUserDetails } = useAuthStore();
  const { pathname } = useLocation();
  return (
    <Suspense fallback={<FullPageLoader />}>
      {pathname !== "/login" && pathname !== "/register" && <Navbar />}
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        {/* Protected Routes */}
        <Route element={<ProtectedRoutes />}>
          <Route
            path="/"
            element={
              loggedInUserDetails?.role === "customer" ? (
                <Customer />
              ) : (
                <Seller />
              )
            }
          />
          <Route path="/profile" element={<UserProfile />} />
        </Route>
        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default Index;
