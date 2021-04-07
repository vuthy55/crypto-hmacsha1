## Document
A very tiny js library only with hmacsha1 and hmac method.

## Install

```shell
# npm
npm install crypto-hmacsha1

# yarn
yarn add crypto-hmacsha1
```

## Usage
```javascript
import Crypto from 'crypto-hmacsha1';

const message = 'some message';
const key = 'a key';
const result = Crypto.hmacsha1(message, key);
```

