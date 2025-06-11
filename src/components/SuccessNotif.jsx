import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { clearSuccess } from "../JS/actions/authActions";
import "react-toastify/dist/ReactToastify.css";
import { clearSuccessCar } from "../JS/actions/carActions";

const SuccessNotif = ({ success }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (success?.msg) {
      toast.success(success.msg, { toastId: "success-toast" });

      const timeout = setTimeout(() => {
        dispatch(clearSuccess());
        dispatch(clearSuccessCar())
      }, 3000);

      return () => clearTimeout(timeout); // cleanup
    }
  }, [success, dispatch]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        draggable
        className="toast-text"
        theme="dark"
        limit={1}
      />
    </>
  );
};

export default SuccessNotif;
