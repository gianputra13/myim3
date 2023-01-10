const axios = require("axios");
const crypto = require("crypto");

const tes = function (e) {
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

var t = {
  msisdn: "6281459054547".replace('"', ""),
  action: "register",
};
var i = JSON.parse(JSON.stringify(t));
const encryptNo = tes(i.msisdn);

var j = {
  msisdn: encryptNo,
  action: "register",
};

var n = (n = new Date());
var s =
  n.getFullYear() +
  "" +
  n.getMonth() +
  1 +
  n.getDate() +
  n.getHours() +
  n.getMinutes() +
  n.getSeconds() +
  n.getMilliseconds();

const xMiUid = s + "" + generaterandomString();

const xCurrent = current();

const result =
  "REQBODY=" + JSON.stringify(j) + "&SALT=" + getReqToken(xCurrent);
const hash = crypto.createHash("sha512");
hash.update(result);
const hasil = hash.digest("hex");

const data = { msisdn: encryptNo, action: "register" };
const HEADER = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: "642d1cc69d90666962726e",
  "sec-ch-ua": "",
  "sec-ch-ua-mobile": "",
  "sec-ch-ua-platform": "",
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
  "x-accesskey": "",
  "x-csrftoken": "",
  "x-current": xCurrent,
  "X-IMI-App-Model": "",
  "X-IMI-App-OS": "BROWSER",
  "X-IMI-App-OSVersion": "",
  "X-IMI-App-User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
  "X-IMI-CHANNEL": "Web",
  "X-IMI-CHILD-LINENO": "",
  "X-IMI-LANGUAGE": "ID",
  "X-IMI-NETWORK": "WIFI",
  "x-imi-oauth": hasil,
  "X-IMI-TOKENID": xCurrent,
  "X-IMI-UID": xMiUid,
  "X-IMI-VERSION": "80.1.0",
  "x-reqtoken": hasil,
};

axios
  .post("https://myim3app.indosatooredoo.com/api/v1/otp/send/v2", data, HEADER)
  .then((response) => {
    if (response.status === 200) {
      console.log("Req body:", response.data);
      console.log("Req header :", response.headers);
      console.log("Req body:", response.data.transid);
    }
  })
  .catch((e) => {
    console.error(e);
  });
  