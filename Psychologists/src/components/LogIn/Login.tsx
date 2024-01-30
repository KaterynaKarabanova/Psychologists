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
        const name = credentials.user.displayName || "User";
        const idToken = await auth.currentUser?.getIdToken();
        dispatch(setUser({ name: name, email: values.email, token: idToken }));
      }

      toggleModal();
    } catch (error) {
      console.log(error);
    }
    setSubmitting(false);
  };

  return (
    <div>
      <StyledTitle>Login</StyledTitle>
      <StyledText>
        Welcome back! Please enter your credentials to access your account and
        continue your search for a psychologist.
      </StyledText>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <StyledLabel>
              <Field
                as={StyledInput}
                type="text"
                name="email"
                placeholder="Email"
              />
            </StyledLabel>
            <StyledLabel>
              <Field
                as={StyledInput}
                type={visibility ? "password" : "text"}
                name="password"
                placeholder="Password"
              />
              <PassVisibility
                visibility={visibility}
                toggleVisibility={toggleVisibility}
              />
            </StyledLabel>
            <StyledBtn disabled={isSubmitting}>
              {isSubmitting ? "Logging in..." : "Log In"}
            </StyledBtn>
          </Form>
        )}
      </Formik>
      {/* <button onClick={() => signOut(auth)}>Sign Out</button> */}
    </div>
  );
};

export default Login;
