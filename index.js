const { mainInsert } = require('./Controllers/AddUsers');
const { mainUpdate } = require('./Controllers/UpdateUsers');
const { getContacts } = require('./Controllers/helpdeskApi/getAllContacts');
// const { getUsers, closeDB } = require('./Controllers/Database');
const { jsonData } = require('./Controllers/JsonModule');
const usersFormCvs = './ANDEGNB.csv';
// const { writeLog } = require('./Controllers/createLogs');


const main = async () => {
    try {
        const allData = await Promise.all([getContacts(), jsonData(usersFormCvs)]);

        // console.log(allData);
        // mainInsert(allData);
        mainUpdate(allData);  
        
        // closeDB();
    }catch(e){
        console.log(e);
    }

}
// writeLog('prueba desde main');

main();