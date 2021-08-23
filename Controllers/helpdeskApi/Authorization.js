const fetch = require('node-fetch');
const https = require('https');
const { URLSearchParams }  = require('url');
const { writeLog } = require('../createLogs');

const URL = 'https://helpdesk.ande.gov.py/HelpDesk/oauth/access_token';

const agent = new https.Agent({ rejectUnauthorized: false });
const params = new URLSearchParams();

params.append('username', 'api@ande');
params.append('client_id', '51507d0c6a714f54bb23375c5eb4cabc');
params.append('scope', 'FullControl');
params.append('password', '12345');

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


// let usrAdmin = {
//     username: 'api@ande',
//     client_id: '51507d0c6a714f54bb23375c5eb4cabc',
//     scope: 'FullControl',
//     password: '1234'
// }
// const params = new FormData(usrAdmin);