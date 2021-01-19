import * as yup from "yup";

export const UserLoginSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Required"),
    password: yup
    .string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
})