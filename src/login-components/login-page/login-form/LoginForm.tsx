import { Container } from "react-bootstrap";
import './LoginForm.css'
import { NavLink } from "react-router-dom";

const LoginForm = () => {
  return (
    <>
      <Container className="login-form-container">
        <div className="title">
          <h2>Log in</h2>
          <p>Welcome back! Please enter your details</p>
        </div>
        <form action="">
          <div className="login-form-group">
            <label htmlFor="email">Email</label>
            <div className="error-field">
              <input
                type="email"
                name="email"
                id="email"
                className="login-form-field"
                placeholder="Enter your email"
                required
              />
              {/* <span [className]="form.submitted && emailField.invalid ? 'error-show' : 'error-span'"><i className="bi bi-x-circle"></i></span> */}
            </div>
          </div>
          <div className="login-form-group">
            <label htmlFor="password">Password</label>
            <div className="password-span">
              <div className="error-field">
                <input
                  type="password'"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  className="login-form-field"
                  required
                />
                {/* <span className="icon-span" (click)="viewPass()"><i [ngclassName]="visible ? 'bi bi-eye' : 'bi bi-eye-slash'"></i></span>
                        <span [className]="form.submitted && passwordField.invalid ? 'error-show' : 'error-span'"><i className="bi bi-x-circle"></i></span> */}
              </div>
            </div>
          </div>
          {/* <div className="match-error">
            <p *ngIf="emailField.errors?.['email']" className="alert alert-danger">Please type in a valid email</p>
        </div> */}
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

          <div className="login-form-button">
            <button className="log-form-btn">Log in</button>
          </div>
        </form>
      </Container>
    </>
  );
};
export default LoginForm;
