import * as yup from 'yup';
import { setLocale } from 'yup';

setLocale({
    mixed: {
        required: 'Campo Requerido.'
    },
    string: {
        length: 'Formato CUIT Incorrecto'
    }
});

let accountSchema = yup.object().shape({
    name: yup.string().required(),
    socialName: yup.string().required(),
    service: yup.string(),
    industry: yup.string(),
    cuit: yup.string().length(11).notRequired()
});

let friendlyMessage = [
    {id:'name',description:'Cuenta'},
    {id:'socialName',description:'Razón Social'},
    {id:'service',description:'Servicio'},
    {id:'industry',description:'Industria'},
    {id:'cuit',description:'CUIT'}
];

export {accountSchema};
export {friendlyMessage};
