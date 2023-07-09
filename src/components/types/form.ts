import * as yup from 'yup';


export const signUpSchema = yup.object().shape({
    // firstName: yup.string().required("First Name is Required"),
    // lastName: yup.string().required("Last Name is Required"),
    email: yup.string().email("Please Provide a valid email address").required("Email Address is Required"),
    password: yup.string().min(6, "Password should have a min-length of 6").required("Password is Required"),
    confirmPassword: yup.string().oneOf([yup.ref('password')], "Passwords do not match").required("Confirm Password is Required"),
});

export const logInSchema = yup.object().shape({
    email: yup.string().email("Please Provide a valid email address").required("Email Address is Required"),
    password: yup.string().min(6, "Password should have a min-length of 6").required("Password is Required"),
});

export interface AuthForm {
    email: string;
    password: string;
    confirmPassword: string;
}

export interface LogInForm {
    email: string;
    password: string;
}