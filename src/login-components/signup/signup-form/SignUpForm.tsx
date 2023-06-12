import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const SignUpForm = () => {
  return (
    <>
      <Container className="login-form-container">
        <div className="title">
          <h2>Sign Up</h2>
          <p>Welcome New User! Please enter your details</p>
        </div>
        <form action="">
          <div className="login-form-group">
            <label htmlFor="firstname">Firstname</label>
            <div className="error-field">
              <input
                type="text"
                name="firstname"
                id="firstname"
                className="login-form-field"
                placeholder="Enter your Firstname"
                required
              />
              {/* <span [className]="form.submitted && emailField.invalid ? 'error-show' : 'error-span'"><i className="bi bi-x-circle"></i></span> */}
            </div>
          </div>
          <div className="login-form-group">
            <label htmlFor="lastname">Lastname</label>
            <div className="error-field">
              <input
                type="text"
                name="lastname"
                id="lastname"
                className="login-form-field"
                placeholder="Enter your Lastname"
                required
              />
              {/* <span [className]="form.submitted && emailField.invalid ? 'error-show' : 'error-span'"><i className="bi bi-x-circle"></i></span> */}
            </div>
          </div>
          
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
          <div className="login-form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="password-span">
              <div className="error-field">
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm your password"
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
