
import { Route, Routes } from "react-router-dom";

import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminLayout from "./components/admin-view/layout";
import AdminDashboard from "./pages/admin-view/dashboard";
import AdminProducts from "./pages/admin-view/products";
import AdminOrders from "./pages/admin-view/orders";
import AdminFeatures from "./pages/admin-view/features";
import NotFound from "./pages/notFound";
import ShoppingHome from "./pages/shopping-view/home";
import ShoppingListing from "./pages/shopping-view/listing";
import ShoppingCheckout from "./pages/shopping-view/checkout";
import ShoppingAccount from "./pages/shopping-view/account";


function App() {


  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* <h1>Header Components</h1> */}

      <Routes>
        <Route path="/auth" element={<AuthLayout />}></Route>
        <Route path="login" element={<AuthLogin />}></Route>
        <Route path="register" element={<AuthRegister />}></Route>
        <Route path="/admin" element={<AdminLayout />}>

        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>

        <Route path="/shop" element={<ShoppingLayout />}></Route>
        <Route path="*" elememt={<NotFound />} />

        <Route path="home" element={<ShoppingHome />} />
        <Route path="listing" element={<ShoppingListing />} />
        <Route path="checkout" element={<ShoppingCheckout />} />
        <Route path="account" element={<ShoppingAccount />} />

      </Routes>

    </div>
  )
}

export default App
