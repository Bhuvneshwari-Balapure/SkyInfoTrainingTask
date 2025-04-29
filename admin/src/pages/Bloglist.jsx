import { useEffect, useState } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteABlog, getBlogs, resetState } from "../features/blogs/BlogSlice";
import CustomModal from "../components/CutomModal";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "name",
  },
  {
    title: "Category",
    dataIndex: "category",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Bloglist = () => {
  const [open, setOpen] = useState(false);
  const [blogId, setBlogId] = useState("");
  const [data1, setData1] = useState([]); // State to store table data

  const dispatch = useDispatch();

  const showModal = (e) => {
    setOpen(true);
    setBlogId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(resetState());
    dispatch(getBlogs());
  }, [dispatch]);

  // const getBlogState = useSelector((state) => state.blogs.blogs);
  const getBlogState = useSelector((state) => state.blogs.blogs.getAllBlog);

  console.log("Blog State from blog list", getBlogState);

  // Update data1 when getBlogState changes
  // useEffect(() => {
  //   const updatedData = getBlogState.map((blog, index) => ({
  //     key: index + 1,
  //     name: blog.title,
  //     category: blog.category,
  //     action: (
  //       <>
  //         <Link to={`/admin/blog/${blog.id}`} className="fs-3 text-danger">
  //           <BiEdit />
  //         </Link>
  //         <button
  //           className="ms-3 fs-3 text-danger bg-transparent border-0"
  //           onClick={() => showModal(blog._id)}
  //         >
  //           <AiFillDelete />
  //         </button>
  //       </>
  //     ),
  //   }));
  //   setData1(updatedData); // Set the data for the table
  // }, [getBlogState]); // Runs every time getBlogState changes

  useEffect(() => {
    // Check if getBlogState is not empty and is an array
    if (Array.isArray(getBlogState) && getBlogState.length > 0) {
      const updatedData = getBlogState.map((blog, index) => ({
        key: index + 1,
        name: blog.title,
        category: blog.category,
        action: (
          <>
            <Link to={`/admin/blog/${blog.id}`} className="fs-3 text-danger">
              <BiEdit />
            </Link>
            <button
              className="ms-3 fs-3 text-danger bg-transparent border-0"
              onClick={() => showModal(blog._id)}
            >
              <AiFillDelete />
            </button>
          </>
        ),
      }));
      setData1(updatedData); // Set the data for the table
    } else {
      setData1([]); // If no data available, set the table data to empty array
    }
  }, [getBlogState]); // Runs every time getBlogState changes

  const deleteBlog = (e) => {
    dispatch(deleteABlog(e));
    setOpen(false);
    setTimeout(() => {
      dispatch(getBlogs());
    }, 100);
  };

  return (
    <div>
      <h3 className="mb-4 title">Blogs List</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => deleteBlog(blogId)}
        title="Are you sure you want to delete this blog?"
      />
    </div>
  );
};

export default Bloglist;
