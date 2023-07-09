import { Container } from "react-bootstrap";
import './LoginForm.css'
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthForm, LogInForm, logInSchema} from "../../../components/types/form";
import {signInWithEmailAndPassword} from "firebase/auth"
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { auth } from "../../../config/config";
import { useAppDispatch } from "../../../components/hooks/storeHooks";
import { login } from "../../../components/Auth/authSlice";

const LoginForm = () => {
   const {
     register,
     handleSubmit,
     formState: { errors },
   } = useForm<LogInForm>({
     resolver: yupResolver(logInSchema),
   });
  const [visible, setVisible] = useState(false);
  const [changeType, setChangeType] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessages, setErrorMessages] = useState<string | null>(null);
  const dispatch = useAppDispatch();

    const viewPass = () => {
      setVisible(!visible);
      setChangeType(!changeType);
    };
     const handleFormSubmit = async (data: LogInForm) => {
      const { email, password } = data;
      setLoading(true);
       try {
       const {user} = await signInWithEmailAndPassword(auth, email, password);
       setVisible(false);
       if (user && user.email) {
         dispatch(login({ email: user.email, id: user.uid }));
       }
       } catch (error: any) {
         console.log(error);
       }
     };

  return (
    <>
      <Container className="login-form-container">
        <div className="title">
          <h2>Log in</h2>
          <p>Welcome back! Please enter your details</p>
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
          <div className="login-form-section">
            <div className="forgotpwd">
              <p>
                New user? <NavLink to="/signup">Sign Up</NavLink>
              </p>
            </div>
            <div className="forgotpwd">
              <NavLink to="/forgotpwd" className="nav-link">
                Forgot Password?
              </NavLink>
            </div>
          </div>
          {errorMessages && (
            <span className="error-message">{errorMessages}</span>
          )}
          <div className="login-form-button">
            <button className="log-form-btn">Log in</button>
          </div>
        </form>
      </Container>
    </>
  );
};
export default LoginForm;
