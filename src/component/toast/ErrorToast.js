import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ErrorToast = (text) => {
  toast.error(text);
};
