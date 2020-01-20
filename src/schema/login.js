import * as yup from 'yup';
import { setLocale } from 'yup';

setLocale({
    mixed: {
        required: 'Campo Requerido'
    },
    string: {
        email: 'Ingrese un email Válido'
    }
});

let loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
});

export default loginSchema;