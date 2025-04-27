import { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { getOrders } from "../features/auth/AuthSlice";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Product",
    dataIndex: "product",
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

const Orders = () => {
  const dispatch = useDispatch();

  // The useEffect hook should only run once (on mount), so it's safe to dispatch here.
  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]); // Adding dispatch as a dependency

  const orderState = useSelector((state) => state.auth.orders);

  // Generate data from orderState only after it's loaded
  const data1 = orderState.map((order, index) => ({
    key: index + 1,
    name: order.orderby.firstname,
    product: <Link to={`/admin/order/${order.orderby._id}`}>View Orders</Link>,
    amount: order.paymentIntent.amount,
    date: new Date(order.createdAt).toLocaleString(),
    action: (
      <>
        <Link to="/" className=" fs-3 text-danger">
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
      <h3 className="mb-4 title">Orders</h3>
      <Table columns={columns} dataSource={data1} />
    </div>
  );
};

export default Orders;
