import credentials from "../credentials.json"

const CryptoJS = require("crypto-js");

const ApiMedicHost = 'https://sandbox-healthservice.priaid.ch';
const AuthHost = 'https://sandbox-authservice.priaid.ch';
const password = credentials.password;
const user_id = credentials.user_id;

export const getToken = () => {
  const computedHash = CryptoJS.HmacMD5(`${AuthHost}/login`, password);
  const computedHashString = computedHash.toString(CryptoJS.enc.Base64);

  return fetch(`${AuthHost}/login`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${user_id}:${computedHashString}`
    }
  }).then(res => res.json());
};