import * as yup from "yup";

export const UserLoginSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Required"),
    password: yup
    .string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
})

export const UserSchema = yup.object().shape({
    email: yup
    .string()
    .email("Invalid email")
    .required("Required"),
    lastName: yup
    .string()
    .required("Required"),
    password: yup
    .string()
    .min(8, "Minimum 8 characters!")
    .max(80, "Too Long!")
    .required("Required"),
    dni: yup
    .string()
    .min(8, "DNI must contain 8 numbers!")
    .max(8, "DNI must contain 8 numbers!")
    .required("Required"),
    address: yup
    .string()
    .required("Required"),
})