import React from 'react'
import { Container } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';

const ForgotPwdForm = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/forgotpwd/reset");
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
            <label htmlFor="email">Email Address</label>
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
          {/* <div className="match-error">
            <p *ngIf="emailField.errors?.['email']" className="alert alert-danger">Please type in a valid email</p>
        </div> */}

          <div className="login-form-button">
            <button className="log-form-btn" onClick={handleClick}>Confirm</button>
          </div>
        </form>
      </Container>
    </>
  );
}

export default ForgotPwdForm