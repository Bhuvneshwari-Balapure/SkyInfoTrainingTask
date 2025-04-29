// import { useEffect, useState } from "react";
// import { Table } from "antd";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteAColor, getColors } from "../features/color/ColoSlice";
// import { BiEdit } from "react-icons/bi";
// import { AiFillDelete } from "react-icons/ai";
// import { Link } from "react-router-dom";
// import CustomModal from "../components/CutomModal";

// const columns = [
//   {
//     title: "SNo",
//     dataIndex: "key",
//   },
//   {
//     title: "Name",
//     dataIndex: "name",
//   },
//   {
//     title: "Action",
//     dataIndex: "action",
//   },
// ];

// const Colorlist = () => {
//   const [open, setOpen] = useState(false);
//   const [colorId, setColorId] = useState("");

//   // Modal control functions
//   const showModal = (e) => {
//     setOpen(true);
//     setColorId(e);
//   };

//   const hideModal = () => {
//     setOpen(false);
//   };

//   // Dispatch hook for dispatching actions
//   const dispatch = useDispatch();

//   // UseEffect to fetch colors on mount
//   useEffect(() => {
//     dispatch(getColors());
//   }, [dispatch]); // Include dispatch in the dependency array

//   // Selector to get the colors from the store
//   const colorState = useSelector((state) => state.color.colors);
//   console.log("Color State from color list", colorState);

//   // Data transformation for table
//   // const data1 = colorState.map((color, index) => ({
//   //   key: index + 1,
//   //   name: color.title,
//   //   action: (
//   //     <>
//   //       <Link to={`/admin/color/${color._id}`} className=" fs-3 text-danger">
//   //         <BiEdit />
//   //       </Link>
//   //       <button
//   //         className="ms-3 fs-3 text-danger bg-transparent border-0"
//   //         onClick={() => showModal(color._id)}
//   //       >
//   //         <AiFillDelete />
//   //       </button>
//   //     </>
//   //   ),
//   // }));

//   const data1 = Array.isArray(colorState)
//     ? colorState.map((color, index) => ({
//         key: index + 1,
//         name: color.title,
//         action: (
//           <>
//             <Link
//               to={`/admin/color/${color._id}`}
//               className=" fs-3 text-danger"
//             >
//               <BiEdit />
//             </Link>
//             <button
//               className="ms-3 fs-3 text-danger bg-transparent border-0"
//               onClick={() => showModal(color._id)}
//             >
//               <AiFillDelete />
//             </button>
//           </>
//         ),
//       }))
//     : []; // Fallback to empty if colorState is not an array

//   // Delete color function
//   const deleteColor = (id) => {
//     dispatch(deleteAColor(id));

//     setOpen(false);

//     // Refresh color list after deletion
//     setTimeout(() => {
//       dispatch(getColors());
//     }, 100);
//   };

//   return (
//     <div>
//       <h3 className="mb-4 title">Colors</h3>
//       <div>
//         <Table columns={columns} dataSource={data1} />
//       </div>
//       <CustomModal
//         hideModal={hideModal}
//         open={open}
//         performAction={() => {
//           deleteColor(colorId);
//         }}
//         title="Are you sure you want to delete this color?"
//       />
//     </div>
//   );
// };

// export default Colorlist;

import { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { deleteAColor, getColors } from "../features/color/ColoSlice";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import CustomModal from "../components/CutomModal";

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
    title: "Action",
    dataIndex: "action",
  },
];

const Colorlist = () => {
  const [open, setOpen] = useState(false);
  const [colorId, setColorId] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getColors());
  }, [dispatch]);

  const colorState = useSelector((state) => state.color.colors?.color || []);
  console.log("Color State from color list", colorState);

  const showModal = (id) => {
    setOpen(true);
    setColorId(id);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const deleteColor = (id) => {
    dispatch(deleteAColor(id));
    setOpen(false);
    setTimeout(() => {
      dispatch(getColors());
    }, 100);
  };

  const data1 = colorState.map((color, index) => ({
    key: index + 1,
    name: color.title,
    action: (
      <>
        <Link to={`/admin/color/${color._id}`} className="fs-3 text-danger">
          <BiEdit />
        </Link>
        <button
          className="ms-3 fs-3 text-danger bg-transparent border-0"
          onClick={() => showModal(color._id)}
        >
          <AiFillDelete />
        </button>
      </>
    ),
  }));

  return (
    <div>
      <h3 className="mb-4 title">Colors</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteColor(colorId);
        }}
        title="Are you sure you want to delete this color?"
      />
    </div>
  );
};

export default Colorlist;
