const fetch = require('node-fetch');
const https = require('https');
const { URLSearchParams }  = require('url');
const { writeLog } = require('../createLogs');

const URL = '';

const agent = new https.Agent({ rejectUnauthorized: false });
const params = new URLSearchParams();

params.append('username', '');
params.append('client_id', '');
params.append('scope', 'FullControl');
params.append('', '');

const options = {
    method: 'post',
    body: params, 
    agent,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
}

const auth = async () => {

    try {
        let message = true;
        authRes = await fetch(URL, options)
            .then(res => {
                if (!res.ok) {
                    message = false;
                    writeLog(`[ERROR] Status de response [${res.status}]`);
                    return res.json();
                }
                writeLog(`[INFO] Key obtenida correctamente`);
                return res.json();
            })
            if(!message){ 
                writeLog(`[APImsj] ${authRes.error.message}`)
                throw Error(authRes.error.message);
            }
            return authRes;
        }
        catch (e) {
        console.error(e);
        writeLog(`[ERROR] No se puede conectar al API en auth.js`);
    }
}
module.exports = { auth };


