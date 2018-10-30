/*
definimos el puerto 

*/

process.env.PORT = process.env.PORT || 3000;
/*
ENTORNO
*/


process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


/*
vencimiento de token
*/
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//process.env.CADUCIDAD_TOKEN = 60 * 60 ;

/*
seed de autenticacion 
*/
process.env.SEED = process.env.SEED || 'esta-es-mi-prueba-de-token-javier';

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}


process.env.URLDB = urlDB;


/*
google client ID
*/

process.env.CLIENT_ID = process.env.CLIENT_ID || '54555373904-u1fm1d5ml5mmqlud90g2m8gvqc7nenfm.apps.googleusercontent.com';
