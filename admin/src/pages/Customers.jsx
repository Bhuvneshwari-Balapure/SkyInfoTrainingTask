import { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../features/customers/CustomerSlice";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
  },
];

const Customers = () => {
  const dispatch = useDispatch();

  // Ensure useEffect runs only once when the component mounts
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]); // Adding dispatch as a dependency to avoid warning

  // Selector hook to get customers from the state
  const customerState = useSelector((state) => state.customer.customers);

  // Data transformation (avoid using a loop directly in JSX)
  const data1 = customerState
    .filter((customer) => customer.role !== "admin") // Filter customers to exclude admins
    .map((customer, index) => ({
      key: index + 1,
      name: `${customer.firstname} ${customer.lastname}`,
      email: customer.email,
      mobile: customer.mobile,
    }));

  return (
    <div>
      <h3 className="mb-4 title">Customers</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Customers;
