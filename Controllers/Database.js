// const { Pool, Client } = require('pg');
// const { writeLog } = require('./createLogs');

// const config = {
//     user: 'postgres',
//     host: 'localhost',
//     password: '1234',
//     database: 'helpdesk1',
// }

// // const conn = new Pool(config);


// // if (!conn) {
// //     writeLog('[ERROR] Cannot connect to DB');
// // }
// // else {
// //     writeLog('[DEBUG] Connection to DB Succesfully');
// // };

// const getUsers = async () => {
//     try {
        
//         const res = await conn.query('SELECT * FROM dbhelpdesk.usuariosande');
//         // console.log(res.rows);
//         return res.rows;
        

//     } catch (e) {
//         console.log(e);
//         writeLog('[ERROR] No se pudo obtener los Usuarios');
//     };
// };

// const insertUsers = async (req) => {
//     try {
//         const { name, email, userId, campaing } = req;
//         const query = 'INSERT INTO dbhelpdesk.usuariosande (user_name, email, user_id, campaing) VALUES ($1, $2, $3, $4)';
//         const res = await conn.query(query, [name, email, userId, campaing]);
//         console.log(res);
                
//     } catch (e) {
//         console.log(e);
//         writeLog('[ERROR] No se pudo añadir a los usuarios');
//     };
// };
// const updateUsers = async (req) => {
//     try {
//         const { name, email, campaing, userId } = req;
//         const query = 'UPDATE dbhelpdesk.usuariosande SET user_name = $1, email = $2, campaing = $3 WHERE user_id = $4' ;
//         const res = await conn.query(query, [name, email, campaing, userId]);
//         console.log(res);
                
//     } catch (e) {
//         console.log(e);
//         writeLog('[ERROR] No se pudo añadir a los usuarios');
//     };
// };

// const closeDB = () => {
//     try {
//         conn.end();
//         console.log('conexion cerrada');
//     } catch (e) {
//         console.log(e);
//     }
// }





// // module.exports = {
// //     getUsers,
// //     insertUsers,
// //     updateUsers,
// //     closeDB
// // };




