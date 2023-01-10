const axios = require("axios");
const crypto = require("crypto");
const readline = require('readline');

const askQuestion = (query) => {
  const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
  });

  return new Promise(resolve => rl.question(query, ans => {
      rl.close();
      resolve(ans);
  }))
}

const encryptionMethodNomer = function (e) {
  var t,
    i = 256,
    a = "";
  try {
    t = [];
    for (var n = [], s = "!nd!gi2r*2otL".length, c = 0; c < i; c++)
      (n[c] = "!nd!gi2r*2otL"[c % s].charCodeAt(0)), (t[c] = c);
    for (var o = 0, r = 0; r < i; r++) {
      o = (o + t[r] + n[r]) % i;
      var l = t[r];
      (t[r] = t[o]), (t[o] = l);
    }
    a = "";
    for (var b = 0, d = 0, u = 0, p = 0; p < e.length; p++) {
      var g = t[(b = (b + 1) % i)];
      (t[b] = t[(d = (d + t[b]) % i)]), (t[d] = g), (u = t[(t[b] + t[d]) % i]);
      var h = e[p].charCodeAt(0) ^ u;
      a += String.fromCharCode(h) + "";
    }
    var m = "";
    for (b = 0; b < a.length; b++) {
      var f = a[b].charCodeAt(0).toString(16);
      1 == f.length && (f = "0" + f), (m += f);
    }
    return m;
  } catch (v) {}
  return "";
};

const current = function () {
  httpCounter = 0;
  try {
    return this.httpCounter++, new Date().getTime() + "" + this.httpCounter;
  } catch (e) {}
  return this.httpCounter;
};

const generaterandomString = function () {
  for (var e = "", t = 0; t < 3; t++) {
    var i = Math.floor(Math.random() * "0123456789".length);
    e += "0123456789".substring(i, i + 1);
  }
  return e;
};

const getReqToken = function (e) {
  try {
    for (var t = "", i = 0; i < e.length; ) (t += e[i]), (i += 2);
    return t;
  } catch (a) {
    return e;
  }
};

const payloadBeforeEncrypt = {
  msisdn: "6285777730354",
  action: "register",
};

const encryptedNomor = encryptionMethodNomer(payloadBeforeEncrypt.msisdn);

const date = new Date();
const times =
  date.getFullYear() +
  "" +
  date.getMonth() +
  1 +
  date.getDate() +
  date.getHours() +
  date.getMinutes() +
  date.getSeconds() +
  date.getMilliseconds()
;

const payloadEncryptedNomor = {
  msisdn: encryptedNomor,
  action: "register",
};

const xCurrent = current();
const resultEcryptNomer = "REQBODY=" + JSON.stringify(payloadEncryptedNomor) + "&SALT=" + getReqToken(xCurrent);
const hash = crypto.createHash("sha512");
hash.update(resultEcryptNomer);

const xImiOauthAndxReqToken = hash.digest("hex");
const xMiUid = times + "" + generaterandomString();

const payloadReqOTP = JSON.stringify({
  "msisdn": encryptedNomor,
  "action": "register"
});

const configRequestOTP = {
  method: 'post',
  url: 'https://myim3app.indosatooredoo.com/api/v1/otp/send/v2',
  headers: { 
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '', 
    'Authorization': '642d1cc69d90666962726e', 
    'Content-Type': 'application/json',
    'sec-ch-ua': '', 
    'sec-ch-ua-mobile': '', 
    'sec-ch-ua-platform': '', 
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36', 
    'x-accesskey': '', 
    'x-csrftoken': '', 
    'x-current': `${xCurrent}`, 
    'X-IMI-App-Model': '', 
    'X-IMI-App-OS': 'BROWSER', 
    'X-IMI-App-OSVersion': '', 
    'X-IMI-App-User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36', 
    'X-IMI-CHANNEL': 'Web', 
    'X-IMI-CHILD-LINENO': '', 
    'X-IMI-LANGUAGE': 'ID', 
    'X-IMI-NETWORK': 'WIFI', 
    'x-imi-oauth': `${xImiOauthAndxReqToken}`, 
    'X-IMI-TOKENID': `${xCurrent}`, 
    'X-IMI-UID': `${xMiUid}`,
    'X-IMI-VERSION': '80.1.0', 
    'x-reqtoken': `${xImiOauthAndxReqToken}`, 
  },
  data : payloadReqOTP
};

const configValidationOTP = {
  method: 'post',
  url: 'https://myim3app.indosatooredoo.com/api/v1/otp/validate/v3',
  headers: { 
    'Accept': 'application/json', 
    'Access-Control-Allow-Origin': '', 
    'Authorization': '642d1cc69d90666962726e', 
    'Content-Type': 'application/json', 
    'sec-ch-ua': '', 
    'sec-ch-ua-mobile': '', 
    'sec-ch-ua-platform': '', 
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36', 
    'x-accesskey': '', 
    'x-csrftoken': '', 
    'x-current': `${xCurrent}`, 
    'X-IMI-App-Model': '', 
    'X-IMI-App-OS': 'BROWSER', 
    'X-IMI-App-OSVersion': 'BROWSER', 
    'X-IMI-App-User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36', 
    'X-IMI-CHANNEL': 'Web', 
    'X-IMI-CHILD-LINENO': '', 
    'X-IMI-LANGUAGE': 'ID', 
    'X-IMI-NETWORK': 'WIFI', 
    'x-imi-oauth': `${xImiOauthAndxReqToken}`, 
    'X-IMI-TOKENID': `${xCurrent}`, 
    'X-IMI-UID': `${xMiUid}`, 
    'X-IMI-VERSION': '80.1.0', 
    'x-reqtoken': `${xImiOauthAndxReqToken}`
  },
};

(async () => {
  try {
    // Request OTP
    const responseReqOTP = await axios(configRequestOTP);
    console.log("🚀 ~ file: main.js:178 ~ responseReqOTP", responseReqOTP.data)
    // Masukkan OTP
    const resultCurrentOTP = await askQuestion("Masukkan OTP: ");
    console.log("🚀 ~ file: main.js:180 ~ resultCurrentOTP", resultCurrentOTP)
    // Encrypt Hasil OTP
    const encryptResultOTP = 123445
    const payloadValidateOTP = {
      transid: responseReqOTP.data.transid,
      otp: encryptResultOTP,
    };
    const newConfigValidationOTP = { ...configValidationOTP,  data: JSON.stringify(payloadValidateOTP)}
    // Request Validasi OTP
    const responseValidationOTP = await axios(newConfigValidationOTP);
    console.log("🚀 ~ file: main.js:191 ~ responseValidationOTP", responseValidationOTP.data)
  } catch (error) {
    console.log(error);
  }
})();
