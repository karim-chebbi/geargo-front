import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { clearErrors } from "../JS/actions/authActions";
import "react-toastify/dist/ReactToastify.css";

const ErrorNotif = ({ error }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (error && error.msg) {
      toast.error(error.msg, { toastId: "error-toast" });

      const timeout = setTimeout(() => {
        dispatch(clearErrors());
      }, 3000);

      return () => clearTimeout(timeout); // cleanup on unmount or error change
    }
  }, [error, dispatch]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
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

export default ErrorNotif;
