import { useEffect, useState } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteABlogCat,
  getCategories,
  resetState,
} from "../features/bcategory/BcategorySlice";
import CustomModal from "../components/CutomModal";

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

const Blogcatlist = () => {
  const [open, setOpen] = useState(false);
  const [blogCatId, setblogCatId] = useState("");
  const [data1, setData1] = useState([]); // Using state to store the data for the table

  const dispatch = useDispatch();

  const showModal = (e) => {
    setOpen(true);
    setblogCatId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(resetState());
    dispatch(getCategories());
  }, [dispatch]);

  const bCatState = useSelector((state) => state.bCategory.bCategories);
  console.log("Blog Category State from blog category list", bCatState);

  // useEffect(() => {
  //   if (bCatState && Array.isArray(bCatState) && bCatState.length > 0) {
  //     const updatedData = bCatState.map((cat, index) => ({
  //       key: index + 1,
  //       name: cat.title,
  //       action: (
  //         <>
  //           <Link
  //             to={`/admin/blog-category/${cat._id}`}
  //             className="fs-3 text-danger"
  //           >
  //             <BiEdit />
  //           </Link>
  //           <button
  //             className="ms-3 fs-3 text-danger bg-transparent border-0"
  //             onClick={() => showModal(cat._id)}
  //           >
  //             <AiFillDelete />
  //           </button>
  //         </>
  //       ),
  //     }));
  //     setData1(updatedData);
  //   } else {
  //     setData1([]); // Fallback if bCategories is undefined or not an array
  //   }
  // }, [bCatState]); // Only run when bCatState changes

  useEffect(() => {
    if (
      bCatState &&
      Array.isArray(bCatState.category) &&
      bCatState.category.length > 0
    ) {
      const updatedData = bCatState.category.map((cat, index) => ({
        key: index + 1,
        name: cat.title,
        action: (
          <>
            <Link
              to={`/admin/blog-category/${cat._id}`}
              className="fs-3 text-danger"
            >
              <BiEdit />
            </Link>
            <button
              className="ms-3 fs-3 text-danger bg-transparent border-0"
              onClick={() => showModal(cat._id)}
            >
              <AiFillDelete />
            </button>
          </>
        ),
      }));
      setData1(updatedData);
    } else {
      setData1([]);
    }
  }, [bCatState]);

  const deleteBlogCategory = (e) => {
    dispatch(deleteABlogCat(e));
    setOpen(false);
    setTimeout(() => {
      dispatch(getCategories());
    }, 100);
  };

  return (
    <div>
      <h3 className="mb-4 title">Blog Categories</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => deleteBlogCategory(blogCatId)}
        title="Are you sure you want to delete this blog category?"
      />
    </div>
  );
};

export default Blogcatlist;
