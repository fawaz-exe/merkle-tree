import * as crypto from 'crypto';

let result = crypto.createHash('sha256')
    .update('test')
    .digest('hex');

console.log('Result :',result);

let result2 = crypto.createHash('sha256')
    .update('test')
    .digest('hex');

console.log('Result :',result2);

