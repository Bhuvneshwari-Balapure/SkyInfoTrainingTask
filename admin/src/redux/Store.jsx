import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/AuthSlice";
import customerReducer from "../features/customers/CustomerSlice";
import productReducer from "../features/product/ProductSlice";
import brandReducer from "../features/brand/BrandSlice";
import pCategoryReducer from "../features/pcategory/PcategorySlice";
import bCategoryReducer from "../features/bcategory/BcategorySlice";
import blogReducer from "../features/blogs/BlogSlice";
import colorReducer from "../features/color/ColoSlice";
import enquiryReducer from "../features/enquiry/EnquirySlice";
import uploadReducer from "../features/upload/UploadSlice";
import couponReducer from "../features/coupon/CouponSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    customer: customerReducer,
    product: productReducer,
    brand: brandReducer,
    pCategory: pCategoryReducer,
    bCategory: bCategoryReducer,
    blogs: blogReducer,
    color: colorReducer,
    enquiry: enquiryReducer,
    upload: uploadReducer,
    coupon: couponReducer,
  },
});
