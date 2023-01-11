const axios = require("axios");
const crypto = require("crypto");

// const current = function () {
//   httpCounter = 0;
//   try {
//     return this.httpCounter++, new Date().getTime() + "" + this.httpCounter;
//   } catch (e) {}
//   return this.httpCounter;
// };

// const generaterandomString = function () {
//   for (var e = "", t = 0; t < 3; t++) {
//     var i = Math.floor(Math.random() * "0123456789".length);
//     e += "0123456789".substring(i, i + 1);
//   }
//   return e;
// };

// const getReqToken = function (e) {
//   try {
//     for (var t = "", i = 0; i < e.length; ) (t += e[i]), (i += 2);
//     return t;
//   } catch (a) {
//     return e;
//   }
// };

// const date = new Date();
// const times =
//   date.getFullYear() +
//   "" +
//   date.getMonth() +
//   1 +
//   date.getDate() +
//   date.getHours() +
//   date.getMinutes() +
//   date.getSeconds() +
//   date.getMilliseconds()
// ;

// // const resultParsing = JSON.parse(JSON.stringify(payloadSender));

// const xCurrent = current();
// const resultEcrypt = "REQBODY=" + JSON.stringify(resultParsing) + "&SALT=" + getReqToken(xCurrent);

// const hash = crypto.createHash("sha512");
// hash.update(resultEcrypt);

// const xImiOauthAndxReqToken = hash.digest("hex");
// const xMiUid = times + "" + generaterandomString();

const configReg = {
  method: 'post',
  url: 'https://myim3app.indosatooredoo.com/api/v1/prepaid/voucherreload',
  headers: { 
    'Accept': 'application/json', 
    'Access-Control-Allow-Origin': '*', 
    'Authorization': '642d1cc69d90666962726e', 
    'Content-Type': 'application/json', 
    'sec-ch-ua': '', 
    'sec-ch-ua-mobile': '', 
    'sec-ch-ua-platform': "Windows", 
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36', 
    'x-accesskey': '', 
    'x-csrftoken': '', 
    'x-current': "167344424951714", 
    'X-IMI-App-Model': '', 
    'X-IMI-App-OS': 'BROWSER', 
    'X-IMI-App-OSVersion': 'BROWSER', 
    'X-IMI-App-User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36', 
    'X-IMI-CHANNEL': 'Web', 
    'X-IMI-CHILD-LINENO': '', 
    'X-IMI-LANGUAGE': 'ID', 
    'X-IMI-NETWORK': 'WIFI', 
    'x-imi-oauth': "14371e67e0a7594024183b33f58fb7ab88bc69227fe94f26dc927f5e2f1e8b3014c3cd0e4e28b5fee6e8fbba5873a283140903da012096ca21887b4580c9462a", 
    'X-IMI-TOKENID': "X0OT5NGZFCUXKJRWRCB4KMJ3PNNLQ7UQ8LBE", 
    'X-IMI-UID': "20230111203729517209", 
    'X-IMI-VERSION': '80.1.0', 
    'x-reqtoken': "14371e67e0a7594024183b33f58fb7ab88bc69227fe94f26dc927f5e2f1e8b3014c3cd0e4e28b5fee6e8fbba5873a283140903da012096ca21887b4580c9462a"
  },
  data: JSON.stringify({
    name: "",
    target_msisdn: "6285640662758",
    vouchercode: "06343695204051"
  })
};


(async () => {
  try {
    const resTesting = await axios(configReg);
    console.log(resTesting);
  } catch (error) {
    console.log(error);
  }
})();