const fetch = require('node-fetch');
const https = require('https');
const { auth } = require('./Authorization');
const { writeLog } = require('../createLogs');

const agent = new https.Agent({ rejectUnauthorized: false });

const urlInsert = '';
const urlUpdate = '';

const insertContacts = async (newUser) => {
    try {
        const key = await auth();
        let message = true;
        let hearders = {
            'Authorization': `${key.access_token}`,
            'Cache-Control': 'no-cache',
            'Content-Type': 'aplication/json'
        }
        const options = {
            method: 'post',
            body: newUser,
            agent,
            hearders
        }
        const response = await fetch(urlInsert, options)
            .then(res => {
                if (!res.ok) {
                    message = false;
                    writeLog(`[ERROR] Status de response [${res.status}]`);
                    return res.json();
                }
                return res.json();
            })
        if (!message) {
            writeLog(`[APImsj] ${response.error.message}`)
            process.exit();
        }
        return response;

    } catch (e) {
        console.log(e);
        writeLog('[ERROR] No se pudo insertar nuevos contactos');
    }
}
const updateContacts = async (user) => {
    try {
        const key = await auth();
        let message = true;
        let hearders = {
            'Authorization': `${key.access_token}`,
            'Cache-Control': 'no-cache',
            'Content-Type': 'aplication/json'
        }
        const options = {
            method: 'post',
            body: user,
            agent,
            hearders
        }
        const response = await fetch(urlUpdate, options)
            .then(res => {
                if (!res.ok) {
                    message = false;
                    writeLog(`[ERROR] Status response [${res.status}]`);
                    return res.json();
                }
                return res.json();
            })
        if (!message) {
            writeLog(`[APImsj] ${response.error.message}`);
            process.exit();
        }
        return response;

    } catch (e) {
        console.log(e);
        writeLog('[ERROR] No se pudo insertar nuevos contactos');
    }
}

module.exports = {
    insertContacts,
    updateContacts
};
