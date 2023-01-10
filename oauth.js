var t = {
  msisdn: "9a310f4f7ce2b22487b01bf0cd",
  action: "register",
};

const getReqToken = function (e) {
  try {
    for (var t = "", i = 0; i < e.length; ) (t += e[i]), (i += 2);
    return t;
  } catch (a) {
    return e;
  }
};

const xMiOauth =
  "REQBODY=" + JSON.stringify(t) + "&SALT=" + getReqToken("16733222460181");

console.log(xMiOauth);
