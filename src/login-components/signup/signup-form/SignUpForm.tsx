import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { AuthForm, signUpSchema } from "../../../components/types/form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthForm>({
    resolver: yupResolver(signUpSchema),
  });

  const [visible, setVisible] = useState(false);
  const [changeType, setChangeType] = useState(false);

  const viewPass = () => {
    setVisible(!visible);
    setChangeType(!changeType);
  }

  console.log(errors.firstName?.message);
  const handleFormSubmit = (data: AuthForm) => {
    console.log(data);
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
            <label htmlFor="firstname">Firstname</label>
            <div className="error-field">
              <input
                type="text"
                id="firstname"
                className="login-form-field"
                placeholder="Enter your Firstname"
                {...register("firstName")}
              />
              {errors.firstName ? (
                <span className="error-show">
                  <i className="bi bi-x-circle"></i>
                </span>
              ) : (
                <></>
              )}
            </div>
            {errors.confirmPassword ? (
              <span className="error-message">
                {errors.firstName?.message}
              </span>
            ) : (
              <></>
            )}
          </div>
          <div className="login-form-group">
            <label htmlFor="lastname">Lastname</label>
            <div className="error-field">
              <input
                type="text"
                id="lastname"
                className="login-form-field"
                placeholder="Enter your Lastname"
                {...register("lastName")}
              />
              {errors.lastName ? (
                <span className="error-show">
                  <i className="bi bi-x-circle"></i>
                </span>
              ) : (
                <></>
              )}
            </div>
            {errors.confirmPassword ? (
              <span className="error-message">{errors.lastName?.message}</span>
            ) : (
              <></>
            )}
          </div>

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
            {errors.confirmPassword ? (
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
            {errors.confirmPassword ? (
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
                  type={changeType ? "text" : "password"}
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  className="login-form-field"
                  {...register("confirmPassword")}
                />
                <span className="icon-span" onClick={viewPass}>
                  <i className={visible ? "bi bi-eye" : "bi bi-eye-slash"}></i>
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
          <div className="login-form-button">
            <button className="log-form-btn">Sign up</button>
          </div>
        </form>
      </Container>
    </>
  );
};
export default SignUpForm;
