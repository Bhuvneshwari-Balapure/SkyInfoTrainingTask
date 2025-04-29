// import { useEffect, useState, useCallback } from "react";
// import { Table } from "antd";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   deleteAEnquiry,
//   getEnquiries,
//   resetState,
//   updateAEnquiry,
// } from "../features/enquiry/EnquirySlice";
// import { AiFillDelete, AiOutlineEye } from "react-icons/ai";
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
//     title: "Email",
//     dataIndex: "email",
//   },
//   {
//     title: "Mobile",
//     dataIndex: "mobile",
//   },
//   {
//     title: "Status",
//     dataIndex: "status",
//   },
//   {
//     title: "Action",
//     dataIndex: "action",
//   },
// ];

// const Enquiries = () => {
//   const dispatch = useDispatch();
//   const [open, setOpen] = useState(false);
//   const [enqId, setEnqId] = useState("");
//   const [data1, setData1] = useState([]);

//   const showModal = (e) => {
//     setOpen(true);
//     setEnqId(e);
//   };

//   const hideModal = () => {
//     setOpen(false);
//   };

//   // Fetching enquiries when component mounts
//   useEffect(() => {
//     dispatch(resetState());
//     dispatch(getEnquiries());
//   }, [dispatch]);

//   // Enquiry data from Redux state
//   const enqState = useSelector((state) => state.enquiry.enquiries);
//   console.log("Enquiry State from Redux", enqState);

//   // Using useCallback to memoize setEnquiryStatus function
//   const setEnquiryStatus = useCallback(
//     (status, id) => {
//       const data = { id, enqData: status };
//       dispatch(updateAEnquiry(data));
//     },
//     [dispatch]
//   );

//   // Setting data1 based on fetched enqState
//   // useEffect(() => {
//   //   const updatedData = enqState.map((enq, index) => ({
//   //     key: index + 1,
//   //     name: enq.name,
//   //     email: enq.email,
//   //     mobile: enq.mobile,
//   //     status: (
//   //       <select
//   //         defaultValue={enq.status ? enq.status : "Submitted"}
//   //         className="form-control form-select"
//   //         onChange={(e) => setEnquiryStatus(e.target.value, enq._id)}
//   //       >
//   //         <option value="Submitted">Submitted</option>
//   //         <option value="Contacted">Contacted</option>
//   //         <option value="In Progress">In Progress</option>
//   //         <option value="Resolved">Resolved</option>
//   //       </select>
//   //     ),
//   //     action: (
//   //       <>
//   //         <Link
//   //           className="ms-3 fs-3 text-danger"
//   //           to={`/admin/enquiries/${enq._id}`}
//   //         >
//   //           <AiOutlineEye />
//   //         </Link>
//   //         <button
//   //           className="ms-3 fs-3 text-danger bg-transparent border-0"
//   //           onClick={() => showModal(enq._id)}
//   //         >
//   //           <AiFillDelete />
//   //         </button>
//   //       </>
//   //     ),
//   //   }));
//   //   setData1(updatedData);
//   // }, [enqState, setEnquiryStatus]); // setEnquiryStatus is now memoized and will not change on every render

//   useEffect(() => {
//     const updatedData = Array.isArray(enqState)
//       ? enqState.map((enq, index) => ({
//           key: index + 1,
//           name: enq.name,
//           email: enq.email,
//           mobile: enq.mobile,
//           status: (
//             <select
//               defaultValue={enq.status ? enq.status : "Submitted"}
//               className="form-control form-select"
//               onChange={(e) => setEnquiryStatus(e.target.value, enq._id)}
//             >
//               <option value="Submitted">Submitted</option>
//               <option value="Contacted">Contacted</option>
//               <option value="In Progress">In Progress</option>
//               <option value="Resolved">Resolved</option>
//             </select>
//           ),
//           action: (
//             <>
//               <Link
//                 className="ms-3 fs-3 text-danger"
//                 to={`/admin/enquiries/${enq._id}`}
//               >
//                 <AiOutlineEye />
//               </Link>
//               <button
//                 className="ms-3 fs-3 text-danger bg-transparent border-0"
//                 onClick={() => showModal(enq._id)}
//               >
//                 <AiFillDelete />
//               </button>
//             </>
//           ),
//         }))
//       : [];

//     console.log("Updated Data:", updatedData); // Log here to check the structure
//     setData1(updatedData);
//   }, [enqState, setEnquiryStatus]);

//   // Delete enquiry
//   const deleteEnq = (id) => {
//     dispatch(deleteAEnquiry(id));
//     setOpen(false);
//     setTimeout(() => {
//       dispatch(getEnquiries());
//     }, 100);
//   };

//   return (
//     <div>
//       <h3 className="mb-4 title">Enquiries</h3>
//       <div>
//         <Table columns={columns} dataSource={data1} />
//       </div>
//       <CustomModal
//         hideModal={hideModal}
//         open={open}
//         performAction={() => deleteEnq(enqId)}
//         title="Are you sure you want to delete this enquiry?"
//       />
//     </div>
//   );
// };

// export default Enquiries;
import { useEffect, useState, useCallback } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAEnquiry,
  getEnquiries,
  resetState,
  updateAEnquiry,
} from "../features/enquiry/EnquirySlice";
import { AiFillDelete } from "react-icons/ai";
import CustomModal from "../components/CutomModal";

const columns = [
  { title: "SNo", dataIndex: "key" },
  { title: "Name", dataIndex: "name" },
  { title: "Email", dataIndex: "email" },
  { title: "Mobile", dataIndex: "mobile" },
  { title: "Comment", dataIndex: "comment" },
  { title: "Status", dataIndex: "status" },
  { title: "Action", dataIndex: "action" },
];

const Enquiries = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [enqId, setEnqId] = useState("");
  const [data1, setData1] = useState([]);

  const showModal = (e) => {
    setOpen(true);
    setEnqId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };

  // Fetching enquiries when component mounts
  useEffect(() => {
    dispatch(resetState());
    dispatch(getEnquiries());
  }, [dispatch]);

  // Enquiry data from Redux state
  const enqState = useSelector((state) => state.enquiry.enquiries);
  console.log("Enquiry State from Redux", enqState);

  const setEnquiryStatus = useCallback(
    (status, id) => {
      const data = { id, enqData: status };
      dispatch(updateAEnquiry(data));
    },
    [dispatch]
  );

  // Setting data1 based on fetched enqState
  useEffect(() => {
    // Check if enqState contains the expected data
    const enquiries = enqState?.enq || [];

    const updatedData = enquiries.map((enq, index) => ({
      key: index + 1,
      name: enq.name,
      email: enq.email,
      mobile: enq.mobile,
      comment: enq.comment,
      status: (
        <select
          defaultValue={enq.status ? enq.status : "Submitted"}
          className="form-control form-select"
          onChange={(e) => setEnquiryStatus(e.target.value, enq._id)}
        >
          <option value="Submitted">Submitted</option>
          <option value="Contacted">Contacted</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>
      ),
      action: (
        <>
          <button
            className="ms-3 fs-3 text-danger bg-transparent border-0"
            onClick={() => showModal(enq._id)}
          >
            <AiFillDelete />
          </button>
        </>
      ),
    }));

    setData1(updatedData);
  }, [enqState, setEnquiryStatus]);

  // Delete enquiry
  const deleteEnq = (id) => {
    dispatch(deleteAEnquiry(id));
    setOpen(false);
    setTimeout(() => {
      dispatch(getEnquiries());
    }, 100);
  };

  return (
    <div>
      <h3 className="mb-4 title">Enquiries</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => deleteEnq(enqId)}
        title="Are you sure you want to delete this enquiry?"
      />
    </div>
  );
};

export default Enquiries;
