const fs = require('fs');
let ts = Date.now();
const Path =  'C:/Users/elouteiro/Desktop/nodescript/Logs/app.log';

let date_ob = new Date(ts);
let hour = date_ob.getHours();
let minutes = date_ob.getMinutes();
let second = date_ob.getSeconds();
let millisecond = date_ob.getUTCMilliseconds()
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();

let currTime = (`${date}-${month}-${year} ${hour}:${minutes}:${second}.${millisecond}`);

const writeLog = (inf) => {
    try {
        fs.appendFileSync(Path, `\n ${inf} ${currTime}`);
        // console.log('Log saved!');
    } catch (e) {
        console.log('Log cannot be writed', e);
    }
}

// console.log(currTime);

// writeLog('esto es una prueba');



module.exports = { writeLog };