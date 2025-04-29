// import { useEffect, useState } from "react";
// import "react-widgets/styles.css";
// import CustomInput from "../components/CustomInput";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import { useFormik } from "formik";
// import * as yup from "yup";
// import { useDispatch, useSelector } from "react-redux";
// import { getBrands } from "../features/brand/BrandSlice";
// // import { getAProductCategory } from "../features/pcategory/pcategorySlice";
// import { getCategories } from "../features/pcategory/PcategorySlice";
// import { getColors } from "../features/color/ColoSlice";
// import { Select } from "antd";
// import { createProducts, resetState } from "../features/product/ProductSlice";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { delImg, uploadImg } from "../features/upload/UploadSlice";
// import { useDropzone } from "react-dropzone";

// let userSchema = yup.object().shape({
//   title: yup.string().required("Title is required"),
//   description: yup.string().required("Description is required"),
//   price: yup.number().required("Price is required"),
//   brand: yup.string().required("Brand is required"),
//   category: yup.string().required("Category is required"),
//   tags: yup.string().required("Tag is required"),
//   color: yup
//     .array()
//     .min(1, "Pick at least one color")
//     .required("Color is required"),
//   quantity: yup.number().required("Quantity is required"),
// });

// const AddProduct = () => {
//   // const { getRootProps, getInputProps } = useDropzone({
//   //   onDrop: (acceptedFiles) => dispatch(uploadImg(acceptedFiles)), // Handle file drop
//   // });
//   const { getRootProps, getInputProps } = useDropzone({
//     onDrop: (acceptedFiles) => {
//       dispatch(uploadImg(acceptedFiles));
//     },
//   });

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [color, setColor] = useState([]);
//   // const [images, setImages] = useState([]);

//   useEffect(() => {
//     dispatch(getBrands());
//     // dispatch(getAProductCategory());
//     dispatch(getCategories());
//     dispatch(getColors());
//   }, [dispatch]);

//   // const brandState = useSelector((state) => state.brand.brands);
//   const brandState = useSelector((state) => state.brand.brands);
//   console.log("Brand State from add products", brandState);
//   // const categoryState = useSelector((state) => state.pCategory.pCategories);
//   const categoryState = useSelector(
//     (state) => state.pCategory.pCategories.category
//   ); // Adjust if necessary
//   console.log("Category State from add products", categoryState);
//   const colorState = useSelector((state) => state.color.colors);
//   console.log("Color State from add Product", colorState);
//   const imgState = useSelector((state) => state.upload.images[0]);
//   const newProduct = useSelector((state) => state.product);
//   const { isSuccess, isError, isLoading } = newProduct;
//   const createdProduct = newProduct.createProduct;

//   useEffect(() => {
//     if (isSuccess && createdProduct) {
//       toast.success("Product successfully added");
//     }
//     if (isError) {
//       toast.error("Something went wrong");
//     }
//   }, [isSuccess, isError, isLoading, createdProduct]);

//   const handleColors = (e) => {
//     setColor(e);
//     console.log(color);
//   };

//   const colorOptions = Array.isArray(colorState.color)
//     ? colorState.color.map((item) => ({
//         label: item.title,
//         value: item._id,
//       }))
//     : [];

//   useEffect(() => {
//     formik.values.color = color || [];
//   }, [color, imgState]);

//   const formik = useFormik({
//     initialValues: {
//       title: "",
//       description: "",
//       price: "",
//       brand: "",
//       category: "",
//       tags: "",
//       color: [],
//       quantity: "",
//       images: [],
//     },
//     validationSchema: userSchema,
//     // onSubmit: (values) => {
//     //   dispatch(createProducts({ ...values, images: imgState }));
//     //   formik.resetForm();
//     //   setColor([]);
//     //   setTimeout(() => {
//     //     dispatch(resetState());
//     //     navigate("/admin/list-product");
//     //   }, 3000);
//     // },
//     onSubmit: (values) => {
//       dispatch(createProducts({ ...values, images: imgState }));
//       setTimeout(() => {
//         dispatch(resetState());
//         navigate("/admin/list-product");
//         formik.resetForm();
//         setColor([]);
//       }, 3000);
//     },
//   });

//   return (
//     <div>
//       <h3 className="mb-4 text-2xl font-semibold">Add Product</h3>
//       <form onSubmit={formik.handleSubmit}>
//         {/* <CustomInput
//           type="text"
//           placeholder="Enter Product title"
//           name="title"
//           onChng={formik.handleChange("title")}
//           onBlr={formik.handleBlur("title")}
//           val={formik.values.title}
//         />
//         <div className="text-red-500 mt-2">
//           {formik.touched.title && formik.errors.title}
//         </div> */}
//         <p>Title of Product</p>
//         <CustomInput
//           type="text"
//           placeholder="Enter Product Title"
//           name="title"
//           onChng={formik.handleChange}
//           onBlr={formik.handleBlur}
//           val={formik.values.title}
//         />
//         <div className="text-red-500">
//           {formik.touched.title && formik.errors.title}
//         </div>

//         {/* <ReactQuill
//           theme="snow"
//           className="mt-3"
//           name="description"
//           onChange={formik.handleChange("description")}
//           onBlur={formik.handleBlur("description")}
//           value={formik.values.description}
//         />
//         <div className="text-red-500 mt-2">
//           {formik.touched.description && formik.errors.description}
//         </div>

//         <CustomInput
//           type="number"
//           placeholder="Enter Product Price"
//           name="price"
//           onCh={formik.handleChange("price")}
//           val={formik.values.price}
//         />
//         <div className="text-red-500 mt-2">
//           {formik.touched.price && formik.errors.price}
//         </div> */}
//         <p>Description of Product</p>
//         <ReactQuill
//           theme="snow"
//           className="mt-3"
//           value={formik.values.description}
//           onChange={(value) => formik.setFieldValue("description", value)}
//           onBlur={formik.handleBlur("description")}
//         />
//         <div className="text-red-500">
//           {formik.touched.description && formik.errors.description}
//         </div>

//         <p>Price of Product</p>
//         <CustomInput
//           type="number"
//           placeholder="Enter Product Price"
//           name="price"
//           onChng={formik.handleChange}
//           onBlr={formik.handleBlur}
//           val={formik.values.price}
//         />
//         <div className="text-red-500">
//           {formik.touched.price && formik.errors.price}
//         </div>

//         {/* <select
//           className="w-full py-3 text-xl outline-none border rounded-xl px-5 mt-5 pe-5"
//           name="brand"
//           onChange={formik.handleChange("brand")}
//           value={formik.values.brand}
//         >
//           <option>Select a brand</option>
//           {Array.isArray(brandState) &&
//             brandState.map((item, j) => (
//               <option key={j} value={item.title}>
//                 {item.title}
//               </option>
//             ))}
//         </select> */}
//         <select
//           className="w-full py-3 text-xl outline-none border rounded-xl px-5 mt-5 pe-5"
//           name="brand"
//           onChange={formik.handleChange("brand")}
//           value={formik.values.brand}
//         >
//           <option value="">Select a brand</option>
//           {Array.isArray(brandState.brand) && brandState.brand.length > 0 ? (
//             brandState.brand.map((item, j) => (
//               <option key={j} value={item.title}>
//                 {item.title}
//               </option>
//             ))
//           ) : (
//             <option disabled>Loading Brands...</option>
//           )}
//         </select>

//         <div className="text-red-500 mt-2">
//           {formik.touched.brand && formik.errors.brand}
//         </div>

//         <select
//           className="w-full py-3 text-xl outline-none border rounded-xl px-5 mt-5 pe-5"
//           name="category"
//           onChange={formik.handleChange("category")}
//           value={formik.values.category}
//         >
//           <option value="">Select a Category</option>
//           {/* Check if categoryState is an array and has data */}
//           {Array.isArray(categoryState) && categoryState.length > 0 ? (
//             categoryState.map((item, j) => (
//               <option key={j} value={item._id}>
//                 {" "}
//                 {/* Ensure you're using unique IDs */}
//                 {item.title}
//               </option>
//             ))
//           ) : (
//             <option disabled>Loading Categories...</option> // Loading message if data is not yet available
//           )}
//         </select>
//         <div className="text-red-500 mt-2">
//           {formik.touched.category && formik.errors.category}
//         </div>

//         <select
//           className="w-full py-3 text-xl outline-none border rounded-xl px-5 mt-5 pe-5"
//           name="tags"
//           onChange={formik.handleChange("tags")}
//           value={formik.values.tags}
//         >
//           <option disabled>Select a Tag</option>
//           <option value="featured">Featured</option>
//           <option value="popular">Popular</option>
//           <option value="special">Special</option>
//         </select>
//         <div className="text-red-500 mt-2">
//           {formik.touched.tags && formik.errors.tags}
//         </div>

//         {/* <Select
//           mode="multiple"
//           allowClear
//           className="w-full"
//           placeholder="Select colors"
//           defaultValue={color}
//           onChange={handleColors}
//           options={colorOptions.length > 0 ? colorOptions : []}
//         />
//         <div className="text-red-500 mt-2">
//           {formik.touched.color && formik.errors.color}
//         </div> */}
//         <Select
//           mode="multiple"
//           allowClear
//           className="w-100"
//           placeholder="Select colors"
//           value={color}
//           onChange={handleColors}
//           options={colorOptions}
//         />

//         <div className="error">
//           {formik.touched.color && formik.errors.color}
//         </div>
//         <p>Quantity of Product</p>
//         <CustomInput
//           type="number"
//           placeholder="Enter Quantity"
//           name="quantity"
//           onCh={formik.handleChange("quantity")}
//           val={formik.values.quantity}
//         />
//         <div className="text-red-500 mt-2">
//           {formik.touched.quantity && formik.errors.quantity}
//         </div>
//         <p>Upload Images</p>
//         <div className="bg-white border-1 p-5 text-center">
//           <div {...getRootProps()}>
//             <input {...getInputProps()} />
//             <p>Drag and drop some files here, or click to select files</p>
//           </div>
//         </div>

//         {/* Display uploaded images */}
//         <div className="showimages d-flex flex-wrap gap-3">
//           {imgState?.map((i, j) => {
//             return (
//               <div className="position-relative" key={j}>
//                 <button
//                   type="button"
//                   onClick={() => dispatch(delImg(i.public_id))} // Delete image by public_id
//                   className="btn-close position-absolute"
//                   style={{ top: "10px", right: "10px" }}
//                 ></button>
//                 <img src={i.url} alt="" width={200} height={200} />
//               </div>
//             );
//           })}
//         </div>

//         <button
//           className="border rounded-xl my-5 px-4 py-2 bg-green-400"
//           type="submit"
//         >
//           Add Product
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;

import { useEffect, useState } from "react";
import "react-widgets/styles.css";
import CustomInput from "../components/CustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../features/brand/BrandSlice";
// import { getAProductCategory } from "../features/pcategory/pcategorySlice";
import { getCategories } from "../features/pcategory/PcategorySlice";
import { getColors } from "../features/color/ColoSlice";
import { Select } from "antd";
import { createProducts, resetState } from "../features/product/ProductSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { delImg, uploadImg } from "../features/upload/UploadSlice";
import { useDropzone } from "react-dropzone";

let userSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  price: yup.number().required("Price is required"),
  brand: yup.string().required("Brand is required"),
  category: yup.string().required("Category is required"),
  tags: yup.string().required("Tag is required"),
  color: yup
    .array()
    .min(1, "Pick at least one color")
    .required("Color is required"),
  quantity: yup.number().required("Quantity is required"),
});

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [color, setColor] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      dispatch(uploadImg(acceptedFiles));
    },
  });

  useEffect(() => {
    dispatch(getBrands());
    // dispatch(getAProductCategory());
    dispatch(getCategories());
    dispatch(getColors());
  }, [dispatch]);

  const brandState = useSelector((state) => state.brand.brands);
  const categoryState = useSelector(
    (state) => state.pCategory.pCategories.category
  ); // Adjust if necessary
  const colorState = useSelector((state) => state.color.colors);
  const imgState = useSelector((state) => state.upload.images[0]);
  const newProduct = useSelector((state) => state.product);
  const { isSuccess, isError, isLoading } = newProduct;
  const createdProduct = newProduct.createProduct;

  useEffect(() => {
    if (isSuccess && createdProduct) {
      toast.success("Product successfully added");
    }
    if (isError) {
      toast.error("Something went wrong");
    }
  }, [isSuccess, isError, isLoading, createdProduct]);

  const handleColors = (e) => {
    setColor(e);
  };

  const colorOptions = Array.isArray(colorState.color)
    ? colorState.color.map((item) => ({
        label: item.title,
        value: item._id,
      }))
    : [];

  useEffect(() => {
    formik.values.color = color || [];
    formik.setFieldValue("images", imgState);
  }, [color, imgState]);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
      brand: "",
      category: "",
      tags: "",
      color: [],
      quantity: "",
      images: [],
    },
    validationSchema: userSchema,

    onSubmit: (values) => {
      console.log("Submitting Product:", values);
      dispatch(createProducts({ ...values, images: imgState }));
      setTimeout(() => {
        dispatch(resetState());
        navigate("/admin/list-product");
        formik.resetForm();
        setColor([]);
      }, 3000);
    },
  });

  return (
    <div>
      <h3 className="mb-4 text-2xl font-semibold">Add Product</h3>
      <form onSubmit={formik.handleSubmit}>
        <CustomInput
          type="text"
          label="Enter Product Title"
          name="title"
          onChng={formik.handleChange("title")}
          onBlr={formik.handleBlur("title")}
          val={formik.values.title}
        />
        <div className="error">
          {formik.touched.title && formik.errors.title}
        </div>

        <div className="">
          <ReactQuill
            theme="snow"
            name="description"
            onChange={formik.handleChange("description")}
            value={formik.values.description}
          />
        </div>
        <div className="error">
          {formik.touched.description && formik.errors.description}
        </div>

        <CustomInput
          type="number"
          label="Enter Product Price"
          name="price"
          onChng={formik.handleChange("price")}
          onBlr={formik.handleBlur("price")}
          val={formik.values.price.toString()}
        />
        <div className="error">
          {formik.touched.price && formik.errors.price}
        </div>

        <select
          className="w-full py-3 text-xl outline-none border rounded-xl px-5 mt-5 pe-5"
          name="brand"
          onChange={formik.handleChange("brand")}
          value={formik.values.brand}
        >
          <option value="">Select a brand</option>
          {Array.isArray(brandState.brand) && brandState.brand.length > 0 ? (
            brandState.brand.map((item, j) => (
              <option key={j} value={item.title}>
                {item.title}
              </option>
            ))
          ) : (
            <option disabled>Loading Brands...</option>
          )}
        </select>

        <div className="text-red-500 mt-2">
          {formik.touched.brand && formik.errors.brand}
        </div>

        <select
          className="w-full py-3 text-xl outline-none border rounded-xl px-5 mt-5 pe-5"
          name="category"
          onChange={formik.handleChange("category")}
          value={formik.values.category}
        >
          <option value="">Select a Category</option>
          {Array.isArray(categoryState) && categoryState.length > 0 ? (
            categoryState.map((item, j) => (
              <option key={j} value={item._id}>
                {item.title}
              </option>
            ))
          ) : (
            <option disabled>Loading Categories...</option>
          )}
        </select>

        <div className="text-red-500 mt-2">
          {formik.touched.category && formik.errors.category}
        </div>

        <Select
          mode="multiple"
          allowClear
          className="w-100"
          placeholder="Select colors"
          value={color}
          onChange={handleColors}
          options={colorOptions}
        />

        <div className="error">
          {formik.touched.color && formik.errors.color}
        </div>

        <CustomInput
          type="number"
          label="Enter Product Quantity"
          name="quantity"
          onChng={formik.handleChange("quantity")}
          onBlr={formik.handleBlur("quantity")}
          val={formik.values.quantity.toString()}
        />
        <div className="error">
          {formik.touched.quantity && formik.errors.quantity}
        </div>

        <p>Upload Images</p>
        <div className="bg-white border-1 p-5 text-center">
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag and drop some files here, or click to select files</p>
          </div>
        </div>

        {/* Display uploaded images */}
        <div className="showimages d-flex flex-wrap gap-3">
          {imgState?.map((i, j) => {
            return (
              <div className="position-relative" key={j}>
                <button
                  type="button"
                  onClick={() => dispatch(delImg(i.public_id))} // Delete image by public_id
                  className="btn-close position-absolute"
                  style={{ top: "10px", right: "10px" }}
                ></button>
                <img src={i.url} alt="" width={200} height={200} />
              </div>
            );
          })}
        </div>

        <button
          className="border rounded-xl my-5 px-4 py-2 bg-green-400"
          type="submit"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
