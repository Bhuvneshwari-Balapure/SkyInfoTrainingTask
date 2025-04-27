import { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { getOrderByUser } from "../features/auth/AuthSlice";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Product Name",
    dataIndex: "name",
  },
  {
    title: "Brand",
    dataIndex: "brand",
  },
  {
    title: "Count",
    dataIndex: "count",
  },
  {
    title: "Color",
    dataIndex: "color",
  },
  {
    title: "Amount",
    dataIndex: "amount",
  },
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const ViewOrder = () => {
  const location = useLocation();
  const userId = location.pathname.split("/")[3];

  // Dispatch hook should be used here directly in the component body
  const dispatch = useDispatch();

  // Effect hook for fetching the order by user ID
  useEffect(() => {
    dispatch(getOrderByUser(userId));
  }, [dispatch, userId]); // Added 'userId' as a dependency to avoid potential issues

  // Selector hook to fetch the orders from the state
  const orderState = useSelector(
    (state) => state.auth.orderbyuser[0]?.products || []
  );

  const data1 = orderState.map((order, index) => ({
    key: index + 1,
    name: order.product.title,
    brand: order.product.brand,
    count: order.count,
    amount: order.product.price,
    color: order.product.color,
    date: new Date(order.product.createdAt).toLocaleString(), // format the date
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
  }));

  return (
    <div>
      <h3 className="mb-4 title">View Order</h3>
      <Table columns={columns} dataSource={data1} />
    </div>
  );
};

export default ViewOrder;
