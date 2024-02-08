import * as Yup from "yup";
const passwordRegExp = /^(?=.*[A-Z])(?=.*\d).+/;

export const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Required")
    .matches(
      passwordRegExp,
      "Password must contain at least 1 big letter and 1 number"
    )
    .min(8, "Password is too short"),
});
