
["x-imi-oauth"] = u.sha512("REQBODY=" + JSON.stringify(t) + "&SALT=" + this.getReqToken(o["X-IMI-TOKENID"]))

["X-IMI-UID"] = s + "" + this.generaterandomString(), r

// fungsi current = tokenid
["X-IMI-TOKENID"] = (e.indexOf("otp/validate") > -1 || e.indexOf("otp/send") > -1) && "addnumber" != t.action ? a : this.getSession("token") 


e = v1/otp/send/v2

var t = {
    msisdn: this.txtMobileNumber,
    action: "register"
 };
 var i = JSON.parse(JSON.stringify(t));

 const x = "zMKE".sha512("REQBODY={msisdn:6281459054547,action:register}&SALT=1724057")
 console.log(x)

#  a72bd3129ff80bed43626efbe10cd1c2bed9d8187ebc5974d9e6e922e58441f0e22563caa132e44e225d0979697a1a270e9f5a7ac903aa7a96fcba05f6d2d1f3

#  ab7308c987b8bf5fe561a0724451cec8820011b4314599c42366cbe34f64b47488b2fe4240bee498045379a4857ee796d8f384236d49c3c6558b704fbbd64c51

f070afef4bb44c20db973c01fd5336411ba0bb0d97496a9ca52e86df60e512ff42d0ee75c15ebc57e98c5fc63d468ee0d1697ae05758e0f61bf712973e84cfad

# X-IMI-TOKENID: 16732542025771
# X-IMI-UID: 202301915502577012

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function i() {
    return _classCallCheck(this, i), t.apply(this, arguments)
 }
 
 u = i("zMKE")