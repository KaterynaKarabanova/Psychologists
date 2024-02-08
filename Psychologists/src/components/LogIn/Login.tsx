import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Formik, Form, Field, FormikHelpers } from "formik";
import {
  StyledBtn,
  StyledInput,
  StyledLabel,
  StyledText,
  StyledTitle,
} from "./Login.styled";
import { usePassVisibility } from "../PasswordVisibility/usePassVisibility";
import PassVisibility from "../PasswordVisibility/PassVisibility";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/actions";
import { InitialLoginValues, LoginProps } from "../../types/types";
import { LoginSchema } from "../../schemas/LoginSchema";
import { ErrorText } from "../Appointment/Appointment.styled";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = (props: LoginProps) => {
  const { toggleModal } = props;
  const auth = getAuth();
  const dispatch = useDispatch();

  const { visibility, toggleVisibility } = usePassVisibility();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (
    values: InitialLoginValues,
    { setSubmitting }: FormikHelpers<InitialLoginValues>
  ) => {
    try {
      const credentials = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      if (credentials && auth.currentUser) {
        const userName = credentials.user.displayName || "User";
        const idToken = await auth.currentUser?.getIdToken();
        dispatch(
          setUser({ name: userName, email: values.email, token: idToken })
        );
        toast(`Welcome, ${userName} !`, { type: "success" });
      }

      setTimeout(toggleModal, 1500);
    } catch (error) {
      toast.error("Invalid email or password");
    }
    setSubmitting(false);
  };

  return (
    <div>
      <ToastContainer />
      <StyledTitle>Login</StyledTitle>
      <StyledText>
        Welcome back! Please enter your credentials to access your account and
        continue your search for a psychologist.
      </StyledText>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={LoginSchema}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
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
              {isSubmitting ? "Logging in..." : "Log In"}
            </StyledBtn>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
