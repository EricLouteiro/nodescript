const fetch = require('node-fetch');
const https = require('https');
const { auth } = require('./Authorization');
const { writeLog } = require('../createLogs');

const agent = new https.Agent({ rejectUnauthorized: false });

const URL = '';

const sleep = (delay) => new Promise((resolve)=>setTimeout(resolve, delay));

const getContacts = async () => {

    try {
        const key = await auth();
        headers = { 'Authorization': `${key.access_token}` }

        const arr = [];
        let condition = true;
        let i = 55;

        console.time();


        while (i < 56) {

            await sleep(1500);
            console.log(`intento numero ${i}`);
            let message = true;
            let data = await fetch(URL + `?Pagenumber=${i++}`, { agent, headers })
                .then(res => {
                    if (!res.ok) {
                        message = false;
                        writeLog(`[ERROR] Status de Respuesta del server [${res.status}]`)
                        return res.json();
                    }
                    return res.json();
                })
            if (!message) {
                writeLog(`[APImsj] ${data.error.message}`);
                process.exit();
            }
            if (data != 0 && message) data.forEach(obj => arr.push(obj));
            else { condition = false; }
        }

        writeLog(`[INFO] Se importaron ${arr.length} contactos`)
        console.timeEnd();
        return arr;

    } catch (e) {
        writeLog(`[ERROR] No se pudo importar los contactos`);
        console.log(e);
        process.exit();
    }
}
// getContacts();
module.exports = { getContacts };


