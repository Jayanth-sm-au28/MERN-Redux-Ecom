import { Route, Routes } from "react-router-dom";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AuthLayout from "./components/auth/layout";
import AdminLayout from "./components/admin/layout";
import AdminDashboard from "./pages/admin/dashboard";
import AdminProducts from "./pages/admin/products";
import AdminOrders from "./pages/admin/orders";
import AdminFeatures from "./pages/admin/features";
import ShopingLayout from "./pages/shoping/layout";
import NotFound from "./pages/not-found";
import ShoppingHome from "./pages/shoping/home";
import ShoppingAccount from "./pages/shoping/account";
import ShoppingCheckout from "./pages/shoping/checkout";
import ShoppingListing from "./pages/shoping/shop-listing";
import UnauthPage from "./pages/unauth-page";
import CheckAuth from "./components/common/check-auth";

function App() {
  // const isAuthenticated = true;
  // const user = {
  //   name: "test",
  //   role: "user",
  // };

  const isAuthenticated = true;
  const user = null;
  return (
    <>
      <div className="flex flex-col overflow-hidden bg-white">
        <Routes>
          {/* <Route path="/" element={<h1>test</h1>} /> */}
          <Route
            path="/auth"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <AuthLayout />
              </CheckAuth>
            }
          >
            <Route path="login" element={<AuthLogin />} />
            <Route path="register" element={<AuthRegister />} />
          </Route>
          <Route
            path="/admin"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <AdminLayout />
              </CheckAuth>
            }
          >
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="features" element={<AdminFeatures />} />
          </Route>
          <Route
            path="/shop"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <ShopingLayout />
              </CheckAuth>
            }
          >
            <Route path="home" element={<ShoppingHome />} />
            <Route path="account" element={<ShoppingAccount />} />
            <Route path="checkout" element={<ShoppingCheckout />} />
            <Route path="login" element={<AuthLogin />} />
            <Route path="register" element={<AuthRegister />} />
            <Route path="shop-listing" element={<ShoppingListing />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
          <Route path="unauth-page*" element={<UnauthPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
