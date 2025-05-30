import { useEffect } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/product/ProductSlice";
import { Link } from "react-router-dom";

// Define table columns for product listing
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "title",
    sorter: (a, b) => a.title.length - b.title.length,
  },
  {
    title: "Brand",
    dataIndex: "brand",
    sorter: (a, b) => a.brand.length - b.brand.length,
  },
  {
    title: "Category",
    dataIndex: "category",
    sorter: (a, b) => a.category.length - b.category.length,
  },
  {
    title: "Color",
    dataIndex: "color",
  },
  {
    title: "Price",
    dataIndex: "price",
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Productlist = () => {
  const dispatch = useDispatch();

  // useEffect to fetch products when component mounts
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]); // Added dispatch in dependency array to ensure it triggers correctly

  // Get the list of products from Redux state
  // const productState = useSelector((state) => state.product.products);
  const productState = useSelector((state) => state.product.products);
  console.log("Product State from product list", productState);

  // Prepare data for Table component (mapping product state)
  // const data1 = productState.map((product, index) => ({
  //   key: index + 1,
  //   title: product.title,
  //   brand: product.brand,
  //   category: product.category,
  //   color: product.color,
  //   price: `${product.price}`,
  //   action: (
  //     <>
  //       <Link to="/" className="fs-3 text-danger">
  //         <BiEdit />
  //       </Link>
  //       <Link className="ms-3 fs-3 text-danger" to="/">
  //         <AiFillDelete />
  //       </Link>
  //     </>
  //   ),
  // }));

  const data1 = Array.isArray(productState?.data) // Check if the data is an array
    ? productState.data.map((product, index) => ({
        key: index + 1,
        title: product.title,
        brand: product.brand,
        category: product.category,
        color: product.color,
        price: `${product.price}`,
        action: (
          <>
            <Link to="/" className="fs-3 text-danger">
              <BiEdit />
            </Link>
            <Link className="ms-3 fs-3 text-danger" to="/">
              <AiFillDelete />
            </Link>
          </>
        ),
      }))
    : []; // Fallback to an empty array if data is not available

  return (
    <div>
      <h3 className="mb-4 title">Products</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Productlist;
