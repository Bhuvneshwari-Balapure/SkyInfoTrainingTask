import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Resetpassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgetPassword";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import Enquiries from "./pages/Enquiries";
import Bloglist from "./pages/Bloglist";
import Blogcatlist from "./pages/Blogcatlist";
import Orders from "./pages/Orders";
import ViewOrder from "./pages/ViewOrder";
import Customers from "./pages/Customers";
import Colorlist from "./pages/ColorList";
import Addcolor from "./pages/AddColor";
import Categorylist from "./pages/Categorylist";
import Addcat from "./pages/Addcat";
import Brandlist from "./pages/Brandlist";
import Addbrand from "./pages/Adbrand";
import Productlist from "./pages/Productlist";
import Addproduct from "./pages/Addproduct";
import ViewEnq from "./pages/ViewEnq";
import Addblog from "./pages/Addblog";
import Couponlist from "./pages/Couponlist";
import AddCoupon from "./pages/Addcoupon";
import Addblogcat from "./pages/Addblogcat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Website Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="/forget-password" element={<ForgotPassword />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="enquiries" element={<Enquiries />} />
          <Route path="enquiries/:id" element={<ViewEnq />} />
          <Route path="blog-list" element={<Bloglist />} />
          <Route path="blog" element={<Addblog />} />

          <Route path="coupon-list" element={<Couponlist />} />
          <Route path="coupon" element={<AddCoupon />} />
          <Route path="coupon/:id" element={<AddCoupon />} />

          <Route path="blog-category-list" element={<Blogcatlist />} />

          <Route path="blog-category" element={<Addblogcat />} />
          <Route path="blog-category/:id" element={<Addblogcat />} />

          <Route path="orders" element={<Orders />} />

          <Route path="order/:id" element={<ViewOrder />} />
          <Route path="customers" element={<Customers />} />
          <Route path="list-color" element={<Colorlist />} />
          <Route path="color" element={<Addcolor />} />
          <Route path="color/:id" element={<Addcolor />} />
          <Route path="list-category" element={<Categorylist />} />
          <Route path="category" element={<Addcat />} />
          <Route path="category/:id" element={<Addcat />} />
          <Route path="list-brand" element={<Brandlist />} />
          <Route path="brand" element={<Addbrand />} />
          <Route path="brand/:id" element={<Addbrand />} />
          <Route path="list-product" element={<Productlist />} />
          <Route path="product" element={<Addproduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
