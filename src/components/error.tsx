import Swal from "sweetalert2";

export const error = (err: Boolean, message: string, success: Boolean) => {
  Swal.fire({
    title: success ? "Success" : "Failed",
    icon: err ? "error" : "success",
    text: message,
    confirmButtonColor: err ? "#f52d16d9" : "#26bf6cd9",
  });
};
