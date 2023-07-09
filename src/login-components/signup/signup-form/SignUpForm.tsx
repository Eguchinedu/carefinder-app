import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { AuthForm, signUpSchema } from "../../../components/types/form";
import { setDoc, doc } from "firebase/firestore";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../config/config";
import { useAppDispatch } from "../../../components/hooks/storeHooks";
import { login } from "../../../components/Auth/authSlice";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthForm>({
    resolver: yupResolver(signUpSchema),
  });

  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [changeType, setChangeType] = useState(false);
  const [changeType2, setChangeType2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessages, setErrorMessages] = useState<string | null>(null);

const dispatch = useAppDispatch()

  const viewPass = () => {
    setVisible(!visible);
    setChangeType(!changeType);
  };
  const viewPass2 = () => {
    setVisible2(!visible2);
    setChangeType2(!changeType2);
  };

  const handleFormSubmit = async (data: AuthForm) => {
    try {
      setLoading(true);
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
console.log(user)
      await setDoc(doc(db, "users", user.uid),{
        email : data.email,
      });
      setLoading(false);
      if (user && user.email) {
        dispatch(login({email: user.email, id: user.uid}))
      }
    } catch (error: any) {
      setLoading(false);
      console.log(error);
      const errorCode = error.code;
      setErrorMessages(errorCode)
    }
  };
  return (
    <>
      <Container className="login-form-container">
        <div className="title">
          <h2>Sign Up</h2>
          <p>Welcome New User! Please enter your details</p>
        </div>
        <form onSubmit={handleSubmit(handleFormSubmit)} action="">
          <div className="login-form-group">
            <label htmlFor="email">Email</label>
            <div className="error-field">
              <input
                type="email"
                id="email"
                className="login-form-field"
                placeholder="Enter your email"
                {...register("email")}
              />
              {errors.email ? (
                <span className="error-show">
                  <i className="bi bi-x-circle"></i>
                </span>
              ) : (
                <></>
              )}
            </div>
            {errors.email ? (
              <span className="error-message">{errors.email?.message}</span>
            ) : (
              <></>
            )}
          </div>
          <div className="login-form-group">
            <label htmlFor="password">Password</label>
            <div className="password-span">
              <div className="error-field">
                <input
                  type={changeType ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  className="login-form-field"
                  {...register("password")}
                />
                <span className="icon-span" onClick={viewPass}>
                  <i className={visible ? "bi bi-eye" : "bi bi-eye-slash"}></i>
                </span>
                {errors.password ? (
                  <span className="error-show">
                    <i className="bi bi-x-circle"></i>
                  </span>
                ) : (
                  <></>
                )}
              </div>
            </div>
            {errors.password ? (
              <span className="error-message">{errors.password?.message}</span>
            ) : (
              <></>
            )}
          </div>
          <div className="login-form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="password-span">
              <div className="error-field">
                <input
                  type={changeType2 ? "text" : "password"}
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  className="login-form-field"
                  {...register("confirmPassword")}
                />
                <span className="icon-span" onClick={viewPass2}>
                  <i className={visible2 ? "bi bi-eye" : "bi bi-eye-slash"}></i>
                </span>
                {errors.confirmPassword ? (
                  <span className="error-show">
                    <i className="bi bi-x-circle"></i>
                  </span>
                ) : (
                  <></>
                )}
              </div>
            </div>
            {errors.confirmPassword ? (
              <span className="error-message">
                {errors.confirmPassword.message}
              </span>
            ) : (
              <></>
            )}
          </div>
          <div className="login-form-section">
            <p>
              Already a user? <NavLink to="/login">Log In</NavLink>
            </p>
          </div>
          {errorMessages && <span className="error-message">{errorMessages}</span>}
          <div className="login-form-button">
            <button disabled={loading} className="log-form-btn">Sign up</button>
          </div>
        </form>
      </Container>
    </>
  );
};
export default SignUpForm;
