// const { insertUsers, closeDB } = require('./Database');
// const { jsonData } = require('./JsonModule');
// const usersFormCvs = '../datos.csv';
const { writeLog } = require('./createLogs');

const mainInsert = (arr) => {

    try {
        // const allData = await Promise.all([getUsers(), jsonData(usersFormCvs)])
        const APIUsers = arr[0];
        const csvUsers = arr[1];
        const newUsers = [];
        
        console.time();
        for (i = 0; i < csvUsers.length; i++) {

            let equal = false;

            for (n = 0; n < APIUsers.length & !equal; n++) {
                if (csvUsers[i].ContactId === APIUsers[n].ContactId) {
                    equal = true;
                }
            }
            if (!equal) newUsers.push(csvUsers[i]);
        }
        console.timeEnd();
        if (newUsers.length === 0) {
            writeLog('[INFO] No se encontraron nuevos usuarios para agregar.')
            // closeDB();
        } else {
            // newUsers.forEach(objUser => insertUsers(objUser));
            console.log(newUsers.length);
            writeLog(`[DEBUG] Se cargaron ${newUsers.length} nuevos usuarios.`)

        }       
        
    } catch (e) {
        console.log(e);
        writeLog('[ERROR] No se pudo cargar nuevos usuarios a DB');
    }
    
}

module.exports = { mainInsert }

// for (let i = 0; i < newUsers.length; i++) {
//     // insertUsers(newUsers[i]);
//     if(newUsers.length -1 === newUsers.indexOf(newUsers[i])){
//         // console.log(newUsers[i]);
//         closeDB();
//     }    
// }

// const fromCsvToDb = async () => {

//     try {
//         const data = await jsonData(usersFormCvs);

//         for (i = 0; i < data.length; i++) {
//             insertUsers(data[i]);
//         }
//         writeLog('[DEBUG] Datos cargados correctamente');
//     } catch (e) {
//         console.log(e);
//         writeLog('[ERROR] No se pudo cargar datos a DB');
//     }


// }

// getUsers();
// fromCsvToDb();







