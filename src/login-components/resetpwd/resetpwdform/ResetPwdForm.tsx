import React from 'react'
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ResetPwdForm = () => {
    const navigate = useNavigate();
    const handleClick = () => navigate("/login");
  return (
    <>
      <Container className="login-form-container">
        <div className="title">
          <h2>Forgot Password?</h2>
          <p>
            Enter your email and you will receive an OTP in your registered
            email
          </p>
        </div>
        <form action="">
          <div className="login-form-group">
            <label htmlFor="code">Code</label>
            <div className="password-span">
              <div className="error-field">
                <input
                  type="text"
                  name="codee"
                  id="code"
                  placeholder="Enter the 6 digits code"
                  className="login-form-field"
                  required
                />
              </div>
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

          <div className="login-form-button">
            <button className="log-form-btn" onClick={handleClick}>
              Reset
            </button>
          </div>
        </form>
      </Container>
    </>
  );
}

export default ResetPwdForm