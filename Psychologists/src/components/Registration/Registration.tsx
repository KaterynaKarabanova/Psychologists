import { Formik, Form, Field, FormikHelpers } from "formik";
import {
  createUserWithEmailAndPassword,
  getAuth,
  AuthError,
  updateProfile,
} from "firebase/auth";
import {
  StyledBtn,
  StyledInput,
  StyledLabel,
  StyledText,
  StyledTitle,
} from "../LogIn/Login.styled";
import PassVisibility from "../PasswordVisibility/PassVisibility";
import { usePassVisibility } from "../PasswordVisibility/usePassVisibility";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/actions";
import { InitialValues, RegistrationProps } from "../../types/types";
import GoogleAuth from "./GoogleSignUp";
import { ErrorText } from "../Appointment/Appointment.styled";
import { RegisterSchema } from "../../schemas/RegisterSchema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registration = (props: RegistrationProps) => {
  const { toggleModal } = props;
  const dispatch = useDispatch();

  const initialValues: InitialValues = {
    name: "",
    email: "",
    password: "",
  };

  const { visibility, toggleVisibility } = usePassVisibility();

  const auth = getAuth();

  const handleSubmit = async (
    values: InitialValues,
    { setSubmitting }: FormikHelpers<InitialValues>
  ) => {
    try {
      setSubmitting(true);
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: values.name,
        });
        const idToken = await auth.currentUser.getIdToken();
        dispatch(
          setUser({ name: values.name, email: values.email, token: idToken })
        );
      }
      toast(`Welcome, ${values.name} !`, { type: "success" });
      setTimeout(toggleModal, 1500);

      setSubmitting(false);
    } catch (err: unknown) {
      setSubmitting(false);
      const typedError = err as AuthError;
      const errorMessage = typedError.message;
      const errorCode = typedError.code;

      switch (errorCode) {
        case "auth/weak-password":
          toast.error("The password is too weak.");
          break;
        case "auth/email-already-in-use":
          toast.error(
            "This email address is already in use by another account."
          );
          break;
        case "auth/invalid-email":
          toast.error("This email address is invalid.");
          break;
        case "auth/operation-not-allowed":
          toast.error("Email/password accounts are not enabled.");
          break;
        default:
          toast.error("Something went wrong! Check data and try again!");
          console.log(errorMessage);
          break;
      }
    }
  };

  return (
    <div className="signupContainer">
      <ToastContainer />
      <div className="signupContainer__box">
        <div className="signupContainer__box__inner">
          <StyledTitle>Registration</StyledTitle>
          <StyledText>
            Thank you for your interest in our platform! In order to register,
            we need some information. Please provide us with the following
            information.
          </StyledText>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={RegisterSchema}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form>
                <StyledLabel>
                  <Field
                    as={StyledInput}
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
                  {errors.name && touched.name ? (
                    <ErrorText>{errors.name}</ErrorText>
                  ) : null}
                </StyledLabel>
                <StyledLabel>
                  <Field
                    as={StyledInput}
                    type="text"
                    name="email"
                    placeholder="Email"
                  />
                  {errors.email && touched.email ? (
                    <ErrorText>{errors.email}</ErrorText>
                  ) : null}
                </StyledLabel>
                <StyledLabel>
                  <Field
                    as={StyledInput}
                    type={visibility ? "password" : "text"}
                    name="password"
                    placeholder="Password"
                  />
                  {errors.password && touched.password ? (
                    <ErrorText>{errors.password}</ErrorText>
                  ) : null}
                  <PassVisibility
                    visibility={visibility}
                    toggleVisibility={toggleVisibility}
                  />
                </StyledLabel>
                <StyledBtn type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Registration..." : "Sign Up"}
                </StyledBtn>
              </Form>
            )}
          </Formik>
          <GoogleAuth />
        </div>
      </div>
    </div>
  );
};

export default Registration;
