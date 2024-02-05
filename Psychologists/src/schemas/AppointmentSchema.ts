import * as Yup from "yup";
const phoneRegExp = /^\d{3}\d{3}\d{2}\d{2}$/;
export const AppointmentSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phone: Yup.string()
    .matches(phoneRegExp, "Follow format XXX-XXX-XX-XX")
    .required("Phone number is required"),
  email: Yup.string().email("Invalid email").required("Required"),
  comment: Yup.string().required("Required"),
});
