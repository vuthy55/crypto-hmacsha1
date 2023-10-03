import Crypto from 'crypto-hmacsha1';

const message = 'some message';
const key = 'a key';
const result = Crypto.hmacsha1(message, key);

consol.log(result);

console.log('hello');
