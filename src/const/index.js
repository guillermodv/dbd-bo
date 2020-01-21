// Información de ejemplo - SESIÓN //
const DATA = {
    'email': 'test@test.com',
    'name': 'Juan Carlos',
    'surname': 'Lopez',
    'password': 'test',
    'version': '0.0.1',
    'lastAccess': '21/12/2019'
};
const data = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
            label: 'My Second dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [28, 48, 40, 19, 96, 27, 100]
        }
    ]
};

// Información de ejemplo - CUENTAS //
const ACCOUNTS =[{
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

export {data};
export {ACCOUNTS};
export {DATA};
export {ITEM};
