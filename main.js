const axios = require("axios");
const readline = require('readline');

const firstRequest = require("./requestOTP");
const validate = require("./validateOTP");
const sender = require("./senderGift");

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

(async () => {
  try {
    // Request OTP
    const responseReqOTP = await firstRequest.actionRequest(axios)
    console.log("🚀 ~ file: main.js:178 ~ responseReqOTP", responseReqOTP.config);
    console.log("🚀 ~ file: main.js:178 ~ responseReqOTP Data", responseReqOTP.data);
    // Masukkan OTP
    const resultCurrentOTP = await askQuestion("Masukkan OTP: ");
    console.log("🚀 ~ file: main.js:180 ~ resultCurrentOTP", resultCurrentOTP)
    // Encrypt Hasil OTP
    const encryptResultOTP = encryptionMethodNomer(resultCurrentOTP);
    const payloadValidateOTP = {
      transid: responseReqOTP.data.transid,
      otp: encryptResultOTP,
    };
    // Validasi Login
    const responseLoginValidation = await validate.validateOtp(axios, payloadValidateOTP);
    console.log("🚀 ~ file: main.js:162 ~ responseLoginValidation", responseLoginValidation.config);
    console.log("🚀 ~ file: main.js:162 ~ responseLoginValidation Data", responseLoginValidation.data);
    // Get XimiTokenID dari response login successs
    const ximiTokenID = responseLoginValidation.data.data.tokenid;
    console.log("🚀 ~ file: main.js:40 ~ ximiTokenID", ximiTokenID)
    const nomerHpTarget = await askQuestion("Masukkan Nomor HP Awali dengan 62: ");
    const kodeVoucer = await askQuestion("Masukkan Kode Voucer: ");
    const payloadSenderGift = {
      name: "",
      target_msisdn: nomerHpTarget,
      vouchercode: kodeVoucer,
    };
    // Sender Gift
    const responseSenderGift = await sender.senderGift(axios, ximiTokenID, payloadSenderGift);
    console.log("🚀 ~ file: main.js:174 ~ responseSenderGift", responseSenderGift.config);
    console.log("🚀 ~ file: main.js:174 ~ responseSenderGift Data", responseSenderGift.data);
  } catch (error) {
    console.log(error);
  }
})();
