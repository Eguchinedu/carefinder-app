import React, { FC } from 'react'
import { Container } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { ResetForm, logInSchema, resetSchema } from '../../../components/types/form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../../config/config';



const ForgotPwdForm = () => {
  const navigate = useNavigate();
  const handleClick = () => {navigate("/forgotpwd/reset")};

  const [success, setSuccess] = React.useState<string | null>("")
  const [error, setError] = React.useState<string | null>("")
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<ResetForm>({
      resolver: yupResolver(resetSchema),
    });

         const handleFormSubmit = async (data : ResetForm) => {
          const { email } = data;
           if (!email.length) return;
           try {
             await sendPasswordResetEmail(auth, email);
             setSuccess("Password reset email sent, check your inbox");
             setError(null);
              navigate("/login");
           } catch (error: any) {
             console.log(error);
             setSuccess(null);
             setError(error.message);
           }
         };


  const [email, setEmail] = React.useState("")
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
        <form onSubmit={handleSubmit(handleFormSubmit)} action="">
          <div className="login-form-group">
            <label htmlFor="email">Email Address</label>
            <div className="error-field">
              <input
                type="email"
                // onChange={(e) => setEmail(e.target.value)}
                id="email"
                className="login-form-field"
                placeholder="Enter your email"
                {...register("email")}
              />
              {/* <span [className]="form.submitted && emailField.invalid ? 'error-show' : 'error-span'"><i className="bi bi-x-circle"></i></span> */}
            </div>
          </div>
          {/* <div className="match-error">
            <p *ngIf="emailField.errors?.['email']" className="alert alert-danger">Please type in a valid email</p>
        </div> */}
        {success && <p className="alert alert-success">{success}</p>}
{error && <p className="alert alert-danger">{error}</p>}
          <div className="login-form-button">
            <button className="log-form-btn">Confirm</button>
          </div>
        </form>
      </Container>
    </>
  );
}

export default ForgotPwdForm