const crypto = require("crypto");

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

exports.senderGift = async (axios, ximiTokenID, payloadSender) => {
  const resultParsing = JSON.parse(JSON.stringify(payloadSender));

  const xCurrent = current();
  const resultEcrypt = "REQBODY=" + JSON.stringify(resultParsing) + "&SALT=" + getReqToken(ximiTokenID);

  const hash = crypto.createHash("sha512");
  hash.update(resultEcrypt);

  const xImiOauthAndxReqToken = hash.digest("hex");
  const xMiUid = times + "" + generaterandomString();

  const configSender = {
    method: 'post',
    url: 'https://myim3app.indosatooredoo.com/api/v1/prepaid/voucherreload',
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
      'X-IMI-TOKENID': `${ximiTokenID}`, 
      'X-IMI-UID': `${xMiUid}`, 
      'X-IMI-VERSION': '80.1.0', 
      'x-reqtoken': `${xImiOauthAndxReqToken}`
    },
  };
  const newconfigSender = { ...configSender,  data: JSON.stringify(payloadSender)};

  // Request Voucher
  const responseSenderGift = await axios(newconfigSender);
  return responseSenderGift;
}