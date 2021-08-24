
const csv = require('csvtojson');
const fs = require('fs');
const { writeLog } = require('./createLogs');

const jsonData = async (csvFile) => {

    try {
        const jsonArray = await csv().fromFile(csvFile);
        writeLog('[DEBUG] CSV leído correctamente');
        return APIFormat(jsonArray);
    }
    catch (e) {
        console.log(e, 'No se pudo enviar el archivo csv o no existe');
        writeLog('[ERROR] No se envió el archivo CSV o no se encontró el Path');
    }
}



module.exports = { jsonData, APIFormat };








