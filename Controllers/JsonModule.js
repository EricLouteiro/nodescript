
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

const APIFormat = (arr) => {
    const toSendFormat = [];

    for (i = 0; i < arr.length; i++) {
        toSendFormat.push(
            {
                ContactId: arr[i].userId,
                ContactFirstName: arr[i].name,
                ContactLastName: arr[i].lastname,
                ContactEMail: arr[i].email,
                ContactPhone: '',
                ContactMobile: '',
                ContactPhoto: '',
                ContactUnwanted: false,
                DynamicFields: [
                    {
                        DynamicFieldId: '',
                        DynamicFieldname: '',
                        DynamicFieldType: '',
                        DynamicFieldValue: ''
                    }
                ]
            }


        )

    }
    return toSendFormat;

}


module.exports = { jsonData, APIFormat };








