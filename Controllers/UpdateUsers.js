// const { updateUsers, closeDB } = require('./Database');
// const { jsonData } = require('./JsonModule');
// const usersFormCvs = '../datos.csv';
const { writeLog } = require('./createLogs');

const mainUpdate = (arr) => {
    try {
        // const allData = await Promise.all([getUsers(), jsonData(usersFormCvs)])
        const APIusers = arr[0];
        const csvUsers = arr[1];
        const usersToUpdate = [];
        // console.log(APIusers[0].ContactId);
        // console.log(csvUsers[30].ContactId);
        console.time('update');
        for (i = 0; i < csvUsers.length; i++) {
            for (n = 0; n < APIusers.length; n++) {
                if (csvUsers[i].ContactId == APIusers[n].ContactId &&
                    csvUsers[i].ContactFirstName != APIusers[n].ContactFirstName ||
                    csvUsers[i].ContactId == APIusers[n].ContactId &&
                    csvUsers[i].ContactLastName != APIusers[n].ContactLastName ||
                    csvUsers[i].ContactId == APIusers[n].ContactId &&
                    csvUsers[i].ContactPhone != APIusers[n].ContactPhone ||
                    csvUsers[i].ContactId == APIusers[n].ContactId &&
                    csvUsers[i].ContactEMail != APIusers[n].ContactEMail
                ) {
                    usersToUpdate.push(csvUsers[i]);
                }
            }
        }
        
        // console.log(usersToUpdate)
        
        if (usersToUpdate.length === 0) {
            writeLog('[INFO] No existen usuarios para actualizar.')
            // closeDB();
        } else {
            // usersToUpdate.forEach(objUser => updateUsers(objUser));
            console.log(usersToUpdate)
            writeLog(`[INFO] Se actualizaron correctamente ${usersToUpdate.length} usuarios.`)
            
        }
        console.timeEnd('update');

    } catch (e) {
        console.log(e);
        writeLog('[ERROR] No se pudo actualizar los usuarios en DB');
    }


}
module.exports = { mainUpdate };

