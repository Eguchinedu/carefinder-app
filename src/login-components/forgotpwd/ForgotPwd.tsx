import React from "react";
import { Container } from "react-bootstrap";
import ForgotPwdForm from "./forgotpwdform/ForgotPwdForm";
import PhotoSection from "../photo-section/PhotoSection";

const ForgotPwd = () => {
  return (
    <div className="login-container">
      <div className="photo-section">
        <div>
          <PhotoSection />
        </div>
      </div>
      <div className="login-form">
        <div className="login-flex">
          <ForgotPwdForm/>
        </div>
      </div>
    </div>
  );
};

export default ForgotPwd;
