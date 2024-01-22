import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  getAuth,
  AuthError,
} from "firebase/auth";
import { useState, ChangeEvent, FormEvent } from "react";

interface PasswordSignUpProps {}

const PasswordSignUp: React.FC<PasswordSignUpProps> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  // instantiate the auth service SDK
  const auth = getAuth();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  // Handle user sign up with email and password
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // create a new user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Pull out user's data from the userCredential property
      const user = userCredential.user;
      console.log(user);
    } catch (err: unknown) {
      // Handle errors here
      const typedError = err as AuthError;
      const errorMessage = typedError.message;
      const errorCode = typedError.code;

      setError(true);

      switch (errorCode) {
        case "auth/weak-password":
          setErrorMessage("The password is too weak.");
          break;
        case "auth/email-already-in-use":
          setErrorMessage(
            "This email address is already in use by another account."
          );
          break;
        case "auth/invalid-email":
          setErrorMessage("This email address is invalid.");
          break;
        case "auth/operation-not-allowed":
          setErrorMessage("Email/password accounts are not enabled.");
          break;
        default:
          setErrorMessage(errorMessage);
          break;
      }
    }
  };

  return (
    <div className="signupContainer">
      <div className="signupContainer__box">
        <div className="signupContainer__box__inner">
          <h1>Sign Up</h1>
          <form className="signupContainer__box__form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={email}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={handleChange}
              name="password"
              value={password}
            />
            <button type="submit">Sign Up</button>
            {error && <p>{errorMessage}</p>}
          </form>

          <div className="signupContainer__box__login">
            <p>
              Already have an account? <Link to="/signin">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordSignUp;
