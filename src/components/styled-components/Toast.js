import Swal from "sweetalert2";

export const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  background: "#000",
  width: "20rem",
  customClass: {
    title: "font-weight-bolder text-white ",
  },
  timerProgressBar: true,
  padding: "5px 20px",
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});
