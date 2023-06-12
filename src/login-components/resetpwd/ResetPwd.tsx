import React from "react";
import { Container } from "react-bootstrap";
import ResetPwdForm from "./resetpwdform/ResetPwdForm";
import PhotoSection from "../photo-section/PhotoSection";

const ResetPwd = () => {
  return (
    <div className="login-container">
      <div className="photo-section">
        <div>
          <PhotoSection />
        </div>
      </div>
      <div className="login-form">
        <div className="login-flex">
          <ResetPwdForm/>
        </div>
      </div>
    </div>
  );
};

export default ResetPwd;
