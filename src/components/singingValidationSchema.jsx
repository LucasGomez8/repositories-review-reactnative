import * as Yup from "yup";

export const SingingValidationSchema = Yup.object.shape({
    email: Yup
        .string()
        .required()
        .email('Email is Required'),
    password: Yup
        .string()
        .min(5, 'La clave es muy corta')
        .required('Password is required')
});