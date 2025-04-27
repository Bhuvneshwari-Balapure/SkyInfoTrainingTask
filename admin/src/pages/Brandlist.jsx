import { useEffect, useState } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteABrand,
  getBrands,
  resetState,
} from "../features/brand/BrandSlice";
import CustomModal from "../components/CutomModal";

// Define columns for the table
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
    title: "Action",
    dataIndex: "action",
  },
];

const Brandlist = () => {
  // Use useState for modal state and selected brand ID
  const [open, setOpen] = useState(false);
  const [brandId, setBrandId] = useState("");

  // Modal show and hide handlers
  const showModal = (e) => {
    setOpen(true);
    setBrandId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };

  // Get dispatch function
  const dispatch = useDispatch();

  // Get brand state from Redux store
  const brandState = useSelector((state) => state.brand.brands);

  // Fetch brands when component mounts (on load)
  useEffect(() => {
    dispatch(resetState());
    dispatch(getBrands());
  }, [dispatch]); // Adding `dispatch` to dependency array to be safe

  // Prepare data for table
  const data1 = brandState.map((brand, index) => ({
    key: index + 1,
    name: brand.title,
    action: (
      <>
        <Link to={`/admin/brand/${brand._id}`} className="fs-3 text-danger">
          <BiEdit />
        </Link>
        <button
          className="ms-3 fs-3 text-danger bg-transparent border-0"
          onClick={() => showModal(brand._id)}
        >
          <AiFillDelete />
        </button>
      </>
    ),
  }));

  // Delete brand handler
  const deleteBrand = (e) => {
    dispatch(deleteABrand(e));
    setOpen(false);
    setTimeout(() => {
      dispatch(getBrands());
    }, 100);
  };

  return (
    <div>
      <h3 className="mb-4 title">Brands</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteBrand(brandId);
        }}
        title="Are you sure you want to delete this brand?"
      />
    </div>
  );
};

export default Brandlist;
