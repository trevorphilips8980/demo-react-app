import {
  IconAlertCircle,
  IconCircleCheckFilled,
  IconX,
} from "@tabler/icons-react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastMessage = () => {
  const contextClass = {
    success: "bg-[#ecf4fd] !text-green-700 ",
    error: "bg-[#ecf4fd] !text-red-700 ",
  };

  type ContextType = keyof typeof contextClass;

  const getType = (type: ContextType) => {
    return contextClass[type || "default"];
  };
  return (
    <ToastContainer
      toastClassName={({ type }: any) =>
        getType(type) +
        "relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer mb-2"
      }
      icon={({ type }) =>
        type === "error" ? (
          <IconAlertCircle className="!text-danger" />
        ) : (
          <IconCircleCheckFilled className="!text-green-500" />
        )
      }
      closeButton={({ closeToast }: any) => (
        <IconX className="w-4 h-4 text-black" onClick={closeToast} />
      )}
      bodyClassName={({ type }: any) =>
        getType(type) +
        " flex item-center font-500 text-16 block p-3 max-w-[400px] min-w-[300px] leading-6"
      }
      position="top-right"
      autoClose={3000}
    />
  );
};

export default ToastMessage;
