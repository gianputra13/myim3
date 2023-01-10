// enkripsi otp dan nomer
const tes = function (e) {
  var t,
    i = 256,
    a = "";
  try {
    console.log(e);
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

var t = {
  transid: "3004522111673248114538067",
  otp: "123456",
};
var i = JSON.parse(JSON.stringify(t));
console.log(tes(i.otp));

var t = {
  msisdn: "6281459054547".replace('"', ""),
  action: "register",
};

// console.log("REQBODY=" + JSON.stringify(t) + "&SALT=1724057");
var i = JSON.parse(JSON.stringify(t));

console.log(tes(i.msisdn));

const current = function () {
  httpCounter = 0;
  try {
    return this.httpCounter++, new Date().getTime() + "" + this.httpCounter;
  } catch (e) {}
  return this.httpCounter;
};

const getReqToken = function (e) {
  try {
    for (var t = "", i = 0; i < e.length; ) (t += e[i]), (i += 2);
    return t;
  } catch (a) {
    return e;
  }
};

// const getSession = function (e) {
//   return window.localStorage.getItem(e)
//     ? atob(window.localStorage.getItem(e))
//     : "NA";
// };

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

// var r = (r = this.env.enableallencryptedheaders);

var a = current();

console.log(a);

var e = "v1/dashboard/get/v2";

const generaterandomString = function () {
  for (var e = "", t = 0; t < 3; t++) {
    var i = Math.floor(Math.random() * "0123456789".length);
    e += "0123456789".substring(i, i + 1);
  }
  return e;
};

var r = 1;

// const xMiTokenId =
//   (e.indexOf("otp/validate") > -1 || e.indexOf("otp/send") > -1) &&
//   "addnumber" != t.action
//     ? a
//     : getSession("token");
const xMiUid = s + "" + generaterandomString();
console.log(xMiUid);
// const xMiOauth = u.sha512(
//   "REQBODY=" + JSON.stringify(t) + "&SALT=" + this.getReqToken(xMiTokenId)
// );

// console.log(getReqToken("16732542025771"));
// 16732542025771

// const x = "zMKE".sha512(
//   "REQBODY={msisdn:6281459054547,action:register}&SALT=1724057"
// );
// console.log(x);

// 16732542025771;

// 2023011073854169221
// 2023011092244184
