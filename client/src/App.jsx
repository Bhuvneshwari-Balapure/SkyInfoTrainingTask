import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";

import FeatureSection from "./pages/FeatureSection";
import CategoryCard from "./pages/CategoryCard";
import BrandMarquee from "./pages/BrandMarquee";
import LatestNews from "./pages/LatestNews";
import FeaturedCollection from "./pages/FeaturedCollection";
import OurSpecialProducts from "./pages/OurSpecialProducts";
import OurPopularProducts from "./pages/OurPopularProducts";
import OurStore from "./pages/OurStore/OurStore";
import Blog from "./pages/Blogs/Blog";
import Contact from "./pages/Contact/Contact";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import ReadMoreAboutBlog from "./pages/ReadMoreAboutBlog";
import PrivacyPolicy from "./pages/Footer/PrivacyPolicy";
import RefundPolicy from "./pages/Footer/RefundPolicy";
import ShippingPolicy from "./pages/Footer/ShippingPolicy";
import TermsAndConditions from "./pages/Footer/TermsAndConditions";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/CheckOut";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Website Routes */}
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <>
                <Home />

                <FeatureSection />
                <CategoryCard />

                {/* Some More Component in between */}
                <BrandMarquee />
                <LatestNews />

                <FeaturedCollection />
                <OurSpecialProducts />
                <OurPopularProducts />
              </>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<OurStore />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route
            path="/readMoreAboutBlog/:id"
            element={<ReadMoreAboutBlog />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/Shipping-policy" element={<ShippingPolicy />} />
          <Route path="/terms-condition" element={<TermsAndConditions />} />
          <Route path="/singleProduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
