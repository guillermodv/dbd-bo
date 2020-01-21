// Información de ejemplo - SESIÓN //
const DATA = {
    'email': 'prueba@cdx.com',
    'name': 'Juan Carlos',
    'surname': 'Lopez',
    'password': 'prueba',
    'version': '0.0.1',
    'lastAccess': '21/12/2019'
};

// Información de ejemplo - CUENTAS //
const ACCOUNTS =[{
    "_id": '1',
    "name": 'Tanques Argentinos',
    "description": "Es una empresa mediana, con mucho potencial y está en la búsqueda de nuevos proveedores.",
    "ranking": 'D',
    "potential": 'MEDIO',
    "state": 'CONTACTADO',
    "service": 'IBC - Venta | IBC - Gerenciamiento | Isotanques - Lavado y Servicio estándar',
    "type": 'CLIENTE | PROVEEDOR',
    "opportunities": 3,
    "contacts": 4,
    "notes": 6,
    "events": 3,
    "industry" : 'Transportes',
    "socialName" : 'TA S.A',
    "cuit": '30-71467520-2',
    "creationDate": '14/11/2017',
    "ModificationDate": '29/05/2018'
},{
    "_id": '2',
    "name": 'Multi Service del Sur',
    "description": "Es una empresa mediana, con mucho potencial y está en la búsqueda de nuevos proveedores.",
    "ranking": 'A',
    "potential": 'MEDIO',
    "state": 'COTIZADO',
    "service": 'IBC - Compra | IBC - Venta | Cales - Cal | Isotanques - Lavado',
    "type": 'CLIENTE',
    "opportunities": 2,
    "contacts": 2,
    "notes": 5,
    "events": 4,
    "industry" : 'Logística y Distribución',
    "socialName" : 'Del Sur SRL',
    "creationDate": '14/11/2017',
    "ModificationDate": '29/05/2018'
},{
    "_id": '3',
    "name": 'Valle del IBC',
    "description": "Es una empresa mediana, con mucho potencial y está en la búsqueda de nuevos proveedores.",
    "cuit": '20-34912391-2',
    "ranking": 'B',
    "potential": 'ALTO',
    "state": 'COTIZADO',
    "service": 'IBC - Compra | IBC - Venta | IBC - Rebottling',
    "type": 'CLIENTE | PROVEEDOR',
    "opportunities": 3,
    "contacts": 2,
    "notes": 2,
    "events": 1,
    "industry" : 'Materiales',
    "socialName" : 'Argentina S.A',
    "creationDate": '14/11/2017',
    "ModificationDate": '29/05/2018'
},{
    "_id": '4',
    "name": 'Isotanques ++',
    "description": "Es una empresa mediana, con mucho potencial y está en la búsqueda de nuevos proveedores.",
    "cuit": '20-34912391-2',
    "ranking": 'A',
    "potential": 'MEDIO',
    "state": 'NO CONTACTADO',
    "service": 'ISOT - Lavado y Servicio Estándar | ISOT - Fraccionado | ISOT - Calefaccionado',
    "type": 'CLIENTE',
    "opportunities": 1,
    "contacts": 2,
    "notes": 3,
    "events": 1,
    "industry" : 'Materiales',
    "socialName" : 'ISOTSA',
    "creationDate": '14/11/2017',
    "ModificationDate": '29/05/2018'
}];

// Información de ejemplo - NOTAS //
const NOTES = [{
    "_id": '1',
    "name": 'Recordatorio',
    "description": 'Para no olvidarnos, consultar disponibilidad para reunirnos.',
    "user": 'Juan Roca',
    "date":'Hace 1 semana'
},{
    "_id": '2',
    "name": 'Cierre de cotización',
    "description": 'Envié la cotización, vamos a ver que feedback obtenemos.',
    "user": 'Juan Roca',
    "date":'Hace 9 días'
}];

// Información de ejemplo - CONTACTOS //
const CONTACTS = [{
    "_id": '1',
    "name": 'Jorge Federico',
    "surname": 'Alvarez',
    "position": 'Gerente de Compras',
    "ranking": 'B',
    "celular": '11-6530-2223',
    "phoneNumber": '5854-4472',
    "mailwork": 'jalvarez@email.com',
    "mailpersonal": 'jorge.alva@gmail.com',
    "mensajeria": 'LinkedIn',
    "messagingAppUser": 'linkedin.com/j.alvarez',
},{
    "_id": '2',
    "name": 'Maria de los Ángeles',
    "surname": 'Centurión',
    "position": 'Contrataciones y Compras',
    "ranking": 'A',
    "celular": '11-5802-7544',
    "phoneNumber": '4582-0156',
    "mailwork": 'jose_perez@email.com',
    "mailpersonal": 'jose89@gmail.com',
    "mensajeria": 'Skype',
    "messagingAppUser": 'jose.perez',
}];

// Información de ejemplo - DIRECCIONES //
const ADDRESSES = [{
    "_id": '1',
    "type": 'A',
    "name": 'Dirección Comercial',
    "country": 'Argentina',
    "state": 'Buenos Aires',
    "city": 'Lomas del Zamora',
    "address": 'Blas Parera 366',
    "codpostal" : '1416'
},{
    "_id": '2',
    "type": 'B', 
    "name": 'Planta Trasbordo',
    "country": 'Argentina',
    "state": 'Buenos Aires',
    "city": 'Campana',
    "address": 'Sarmiento 431',
    "codpostal" : '1406'
}];

const ITEM = [{
    "_id": '1',
    "type": 'A',
    "description": 'desc A',
    "date": '15/01/2020',
    "user": 'prueba',
    "name": 'Prueba 1'
},{
    "_id": '2',
    "type": 'B',
    "description": 'desc B',
    "date": '15/01/2020',
    "user": 'prueba',
    "name": 'Prueba 2'
}];

// Información de ejemplo - EVENTOS // 
const EVENTS = [{
    "_id": '1',
    "description": 'Lunes, llamar a Oscar para consultar sobre la cotización.',
    "responsable": 'Juan Manuel',
    "date": '30/10/2019',
    "time" : '12:30',
    "flow": 'Completada',
    "type": 'LLamada'
},{
    "_id": '2',
    "description": 'Se pactó reunión con contaduría.',
    "responsable": 'Carlos Dut',
    "date": '31/10/2019',
    "time" : '09:30',
    "flow": 'Pendiente',
    "type": 'Reunión'
},{
    "_id": '3',
    "description": 'Buscar proveedores similares.',
    "responsable": 'Axel',
    "date": '31/10/2019',
    "time" : '15:45',
    "flow": 'En Progreso',
    "type": 'Tarea'
}];

// Información de ejemplo - OPPORTUNITIES // 
const OPPORTUNITIES = [{
    "_id": '1',
    "potential": 'BAJA',
    "currency": 'ARS',
    "name": 'Oportunidad de vender IBCs. El Cliente necesita renovar su flota.',
    "businessUnit": 'IBC',
    "service": 'Venta', 
    "amount": '$10.500,00',
    "state": 'Cancelada',
    "comercial": 'Pedro Aznar'
},{
    "_id": '2',
    "potential": 'MEDIA',
    "currency": 'ARS',
    "name": 'Necesitan alquilar unidades para traslado de materiales.',
    "businessUnit": 'IBC',
    "service": 'Venta', 
    "amount": '$300,00',
    "state": 'Cotizada',
    "comercial": 'Pedro Aznar'
}];

// Información de ejemplo - SERVICES
const SERVICES = [{
    "_id": '1',
    "businessUnit": 'IBC',
    "services": 'Venta',
    "definition": 'IBC Mes: 600 | Calidad: Medio | Estado: Ganado'
},{
    "_id": '2',
    "businessUnit": 'IBC',
    "services": 'Gerenciamiento',
    "definition": 'IBC Mes: 200 | Proveedores'
},{
    "_id": '3',
    "businessUnit": 'Isotanques',
    "services": 'Lavado y Servicio estándar',
    "definition": 'Proveedor: Real Container | Isotanques Mes: 120 | Estado: Análisis'
}];

const EVENTS_TYPE = [{
    "_id": '1',
    "name": 'Reunión'
},{
    "_id": '2',
    "name": 'Llamada'
},{
    "_id": '3',
    "name": 'Cotización'
},{
    "_id": '4',
    "name": 'Tarea'
}];

const RANKING =[{
        "value": '1',
        "label": 'A'
    },{
        "value": '2',
        "label": 'B'
    },{
        "value": '3',
        "label": 'D'
}];

const POTENTIAL =[{
    "value": '1',
    "label": 'Alto'
},{
    "value": '2',
    "label": 'Medio'
},{
    "value": '3',
    "label": 'Bajo'
}];

const STATE =[{
    "value": '1',
    "label": 'Consolidado'
},{
    "value": '2',
    "label": 'No Consolidado'
}];

const TYPE =[{
    "value": '1',
    "label": 'A'
},{
    "value": '2',
    "label": 'B'
}];

export {ACCOUNTS};
export {NOTES};
export {CONTACTS};
export {ADDRESSES};
export {EVENTS};
export {OPPORTUNITIES};
export {SERVICES};
export {DATA};
export {ITEM};
export {TYPE};
export {STATE};
export {EVENTS_TYPE};
export {POTENTIAL};
export {RANKING};
