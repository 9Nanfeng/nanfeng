/*
年货节开红包



每次脚本领取红包次数
export jd_NhjRed_RedCount="0"
0=不限制 1=领取1次
每个账号之间等待时间单位毫秒 默认15秒
1000=1秒
export jd_NhjRed_RedTimes="15000"
export jd_NhjRed_Red_proxy='' 代理池URL多个请用|隔开
返回的格式为：ip:port
如果有账号密码的话格式为：ip:port:username:password
export jd_NhjRed_proxyReceiveCount='10' 使用代理领取账号大于 10 切换ip 填数字
export jd_NhjRed_Red_taskFlag='true' 执行打卡任务 true=执行 false=不执行 默认执行

10 * * * * jd_NhjRed.js

*/


const $ = new Env('年货节开红包');
let IiI1i111 = "",
  l1l1i1l1 = 10000,
  iiliiiI1 = 5,
  IilllilI = 0,
  l11Il1i1 = "",
  iiliiiII = 10,
  Iilllil1 = true;
const liiii1iI = $.isNode() ? require("./jdCookie.js") : "";
$.CryptoJS = require("crypto-js");
let Iilllill = [],
  l1l1i1il = "";
if ($.isNode()) {
  Object.keys(liiii1iI).forEach(Il1IilIl => {
    Iilllill.push(liiii1iI[Il1IilIl]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") console.log = () => {};
} else Iilllill = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonParse($.getdata("CookiesJD") || "[]").map(illIlI1i => illIlI1i.cookie)].filter(lII1I1l => !!lII1I1l);
let l1l1i1ii = "";
if (!l1l1i1ii) l1l1i1ii = "";
IiI1i111 = $.isNode() ? process.env.jd_NhjRed_code ? process.env.jd_NhjRed_code : "" + IiI1i111 : $.getdata("jd_NhjRed_code") ? $.getdata("jd_NhjRed_code") : "" + IiI1i111;
l1l1i1ii = $.isNode() ? process.env.jd_NhjRedrebatePin ? process.env.jd_NhjRedrebatePin : "" + l1l1i1ii : $.getdata("jd_NhjRedrebatePin") ? $.getdata("jd_NhjRedrebatePin") : "" + l1l1i1ii;
iiliiiI1 = $.isNode() ? process.env.jd_NhjRed_RedCount ? process.env.jd_NhjRed_RedCount : "" + iiliiiI1 : $.getdata("jd_NhjRed_RedCount") ? $.getdata("jd_NhjRed_RedCount") : "" + iiliiiI1;
l1l1i1l1 = $.isNode() ? process.env.jd_NhjRed_RedTimes ? process.env.jd_NhjRed_RedTimes : "" + l1l1i1l1 : $.getdata("jd_NhjRed_RedTimes") ? $.getdata("jd_NhjRed_RedTimes") : "" + l1l1i1l1;
$.shareCount = $.isNode() ? process.env.jd_NhjRedshareHelpCount ? process.env.jd_NhjRedshareHelpCount : "" + IilllilI : $.getdata("jd_NhjRedshareHelpCount") ? $.getdata("jd_NhjRedshareHelpCount") : "" + IilllilI;
iiliiiII = $.isNode() ? process.env.jd_NhjRed_proxyReceiveCount ? process.env.jd_NhjRed_proxyReceiveCount : "" + iiliiiII : $.getdata("jd_NhjRed_proxyReceiveCount") ? $.getdata("jd_NhjRed_proxyReceiveCount") : "" + iiliiiII;
l11Il1i1 = $.isNode() ? process.env.jd_NhjRed_Red_proxy ? process.env.jd_NhjRed_Red_proxy : l11Il1i1 : $.getdata("jd_NhjRed_Red_proxy") ? $.getdata("jd_NhjRed_Red_proxy") : l11Il1i1;
Iilllil1 = $.isNode() ? process.env.jd_NhjRed_Red_taskFlag ? process.env.jd_NhjRed_Red_taskFlag : Iilllil1 : $.getdata("jd_NhjRed_Red_taskFlag") ? $.getdata("jd_NhjRed_Red_taskFlag") : Iilllil1;
$.shareCount = parseInt($.shareCount, 10) || 0;
let Iilllili = l1l1i1ii && l1l1i1ii.split(",") || [],
  Ili1i1Il = IiI1i111 + "";
$.time("yyyy-MM-dd HH:mm:ss");
message = "";
let IiI1i11I = "";
resMsg = "";
$.uiUpdateTime = "";
$.endFlag = false;
$.runEnd = false;
let iiliiiIi = {};
$.getH5st_WQ_Arr = {};
$.runArr = {};
let Ili1i1Ii = {};
$.UVCookieArr = {};
lr = {};
$.UVCookie = "";
let IlI1ilIl = "",
  Iii1IlI = 4;
l1l1i1l1 = Number(l1l1i1l1);
iiliiiII = Number(iiliiiII);
$.time("yyyy-MM-dd");
const l1l1i1ll = require("request");
var Il1IilI1 = "";
try {
  Il1IilI1 = require("tunnel");
} catch (lII1I1i) {
  console.log("请安装模块\"tunnel\"\n");
}
var lI1iil1i = "";
try {
  var {
    SocksProxyAgent: lI1iil1i
  } = require("socks-proxy-agent");
} catch (il1iIi1l) {
  console.log("如果有用socks代理请安装模块\"socks-proxy-agent\"\n没有的话请忽略！\n");
}
let iiliiiIl = false;
$.proxyArrCount = 20;
$.proxyArrOrder = 0;
$.proxyArrIndex = -1;
if (l11Il1i1) l11Il1i1 = l11Il1i1.split("|").map(function (Iii1Ill, i11lI1iI, l1iIiIii) {
  return {
    "url": Iii1Ill,
    "index": i11lI1iI + 1,
    "status": true,
    "count": 0,
    "errorCount": 0
  };
});
$.proxyArrAll = {};
$.proxyArr = {};
l11Il1i1.length > 0 && (iiliiiIl = true);
iiliiiIl && console.log("开启代理");
$.switchProxies = false;
il1li11i();
!(async () => {
  if (/https:\/\/u\.jd\.com\/.+/.test(Ili1i1Il)) {
    if (Ili1i1Il.split("/").pop()) Ili1i1Il = Ili1i1Il.split("/").pop().split("?").shift();else {
      console.log("请填写正确的rebateCode");
      return;
    }
  }
  if (!Iilllill[0]) {
    $.msg($.name, "【提示】请先获取cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/", {
      "open-url": "https://bean.m.jd.com/"
    });
    return;
  }
  authorCodeList = await llliI1Ii("https://raw.githubusercontent.com/58285474/nanfeng/main/NhjRed.json");
  if (authorCodeList) $.authorCode = authorCodeList[IlliiII1(0, authorCodeList.length)];else {
    const i1111III = "TnFDNjlqNSUyQ051Q21nVEU=",
      IilI1iIl = Buffer.from(i1111III, "base64").toString().split(",");
    $.authorCode = IilI1iIl[IlliiII1(0, IilI1iIl.length)];
  }
  Ili1i1Il = IiI1i111 ? IiI1i111 : $.authorCode;
  console.log("\n红包码：" + Ili1i1Il.replace(/.+(.{3})/, "***$1") || "\n");
  $.shareCodeArr = {};
  $.shareCodePinArr = $.getdata("jd_NhjRed_Red_pin") || {};
  $.shareCode = "";
  $.again = false;
  $.taskPinArr = {};
  if ($.end) return;
  for (let I1IIliIi = 0; I1IIliIi < Iilllill.length && !$.runEnd; I1IIliIi++) {
    if ($.endFlag) break;
    l1l1i1il = Iilllill[I1IIliIi];
    if (l1l1i1il) {
      $.UserName = decodeURIComponent(l1l1i1il.match(/pt_pin=([^; ]+)(?=;?)/) && l1l1i1il.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = I1IIliIi + 1;
      if ($.runArr[$.UserName]) continue;
      console.log("\n\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      let iIIllIii = 1;
      Iii1IlI = 4;
      !l1l1i1il.includes("app_open") && (iIIllIii = 2, Iii1IlI = 2);
      typeof $.proxyArr.pin == "object" && $.proxyArr.pin.length >= iiliiiII && ($.switchProxies = true);
      $.eid_token = "";
      await l1iIiIl1(true, iIIllIii);
      await IlliiIII();
      await lI1iil1l();
      if ($.endFlag) break;
    }
    $.setdata($.shareCodePinArr, "jd_NhjRed_Red_pin");
  }
  $.setdata($.shareCodePinArr, "jd_NhjRed_Red_pin");
  if (message) {
    $.msg($.name, "", "红包详情：\n" + message + "\nhttps://u.jd.com/" + Ili1i1Il + "\n\n跳转到app 可查看助力情况");
    if ($.isNode()) {}
  }
  message = "";
  if (Object.getOwnPropertyNames($.taskPinArr).length > 0) {
    console.log("\n\n开始做任务");
    iiliiiIl = false;
    $.proxyArr = {};
    for (let IilI1iIi = 0; IilI1iIi < Iilllill.length; IilI1iIi++) {
      l1l1i1il = Iilllill[IilI1iIi];
      if (l1l1i1il) {
        $.UserName = decodeURIComponent(l1l1i1il.match(/pt_pin=([^; ]+)(?=;?)/) && l1l1i1il.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
        $.index = IilI1iIi + 1;
        if (!$.taskPinArr[$.UserName]) continue;
        console.log("\n\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
        let iIIllIil = 1;
        !l1l1i1il.includes("app_open") && (iIIllIil = 2);
        await l1iIiIl1(true, iIIllIil);
        await IlliiIII();
        await iiI1IliI();
      }
    }
    if (message) {
      $.msg($.name, "", "任务详情：\n" + message);
      if ($.isNode()) {}
    }
  }
})().catch(liiii1ll => $.logErr(liiii1ll)).finally(() => {
  $.done();
});
async function lI1iil1l(iIIllIll = 0) {
  try {
    iIIllIll == 0 && (Ili1i1Ii.c822a = iiI1Ill1("c822a", $.UA), await Ili1i1Ii.c822a.__genAlgo());
    $.UVCookie = $.UVCookieArr[$.UserName] || "";
    !$.UVCookie && il1li11i();
    resMsg = "";
    let l1I1I1Ii = false,
      II1lI1il = 0,
      il11I11I = 0,
      II1lI1ii = 0;
    $.shareFlag = true;
    do {
      if (il11I11I > 2) II1lI1il = 0;
      $.flag = 0;
      IiI1i11I = "";
      $.url1 = "";
      await Il1IilII();
      if (!$.url1) {
        console.log("获取url1失败");
        $.end = true;
        break;
      }
      $.url2 = "";
      $.UVCookie = IlI1ilIl.getUVCookie("", "", $.url1, $.UVCookie);
      $.UVCookieArr[$.UserName] = $.UVCookie + "";
      await Iii1Il1();
      if (!$.url2) {
        console.log("获取不到红包页面");
        break;
      }
      if (!/unionActId=\d+/.test($.url2) && !new RegExp("&d=" + Ili1i1Il).test($.url2)) {
        console.log("改返利url：https://u.jd.com/" + Ili1i1Il + " 可能不是红包页面");
        $.runEnd = true;
        return;
      }
      if (!$.url2) $.url2 = "https://pro.m.jd.com/mall/active/2Nmerir544C1FhDWKb1fkQ2DWC9L/index.html?unionActId=31168&d=" + Ili1i1Il + "&cu=true&utm_source=kong&utm_medium=jingfen";
      $.actId = $.url2.match(/(https:\/\/\S{3,7}[\.m]{0,}\.jd\.com)/) && $.url2.match(/mall\/active\/([^/]+)\/index\.html/)[1] || "2Nmerir544C1FhDWKb1fkQ2DWC9L";
      $.UVCookie = IlI1ilIl.getUVCookie("", "", $.url2, $.UVCookie);
      $.origin = $.url2.match(/(https:\/\/\S{3,7}[\.m]{0,}\.jd\.com)/) && $.url2.match(/(https:\/\/\S{3,7}[\.m]{0,}\.jd\.com)/)[1] || "https://pro.m.jd.com";
      $.UVCookieArr[$.UserName] = $.UVCookie + "";
      $.eid = "";
      !$.eid && ($.eid = -1);
      if (iIIllIll == 0) {
        let IliiilIl = 0,
          Il1Iii1I = true,
          IliiilIi = 0;
        if (Object.getOwnPropertyNames(iiliiiIi).length > II1lI1il && $.shareFlag) for (let IilI1i1i in iiliiiIi || {}) {
          if (IilI1i1i == $.UserName) {
            $.flag = 1;
            continue;
          }
          if (IliiilIl == II1lI1il) {
            $.flag = 0;
            $.shareCode = iiliiiIi[IilI1i1i] || "";
            if ($.shareCodePinArr[IilI1i1i] && $.shareCodePinArr[IilI1i1i].includes($.UserName)) {
              IliiilIi++;
              continue;
            }
            if ($.shareCode.count >= $.shareCodeArr.shareCount) {
              IliiilIi++;
              continue;
            }
            $.getlj = false;
            if ($.shareCode) console.log("助力[" + IilI1i1i + "]");
            let il1iIlI1 = await IiI1i11i($.shareCode.code, 1);
            if (/重复助力/.test(il1iIlI1)) {
              if (!$.shareCodePinArr[IilI1i1i]) $.shareCodePinArr[IilI1i1i] = [];
              $.shareCodePinArr[IilI1i1i].push($.UserName);
              II1lI1il--;
              II1lI1ii--;
            } else {
              if (/助力/.test(il1iIlI1) && /上限/.test(il1iIlI1)) $.shareFlag = false;else {
                if (!/领取上限/.test(il1iIlI1) && $.getlj == true) {
                  if (!$.shareCodePinArr[IilI1i1i]) $.shareCodePinArr[IilI1i1i] = [];
                  !$.shareCodePinArr[IilI1i1i].includes($.UserName) && $.shareCodePinArr[IilI1i1i].push($.UserName);
                  II1lI1il--;
                } else Il1Iii1I = false;
              }
            }
          }
          IliiilIl++;
        }
        Il1Iii1I && IliiilIi == Object.getOwnPropertyNames(iiliiiIi).length && (l1I1I1Ii = true);
        if (IliiilIl == 0) {
          $.getlj = false;
          let iiliiiI = await IiI1i11i("", 1);
          !/领取上限/.test(iiliiiI) && $.getlj == true && II1lI1il--;
        }
        if ($.endFlag) break;
      } else {
        let il1iIlII = await l1l1i1li();
        if (!$.endFlag && il1iIlII && $.again == false) await IiI1i11l();
        if ($.again == false) break;
      }
      $.again == true && il11I11I < 1 && (il11I11I++, $.again = false);
      II1lI1il++;
      II1lI1ii++;
      $.flag == 1 && (await $.wait(parseInt(Math.random() * 500 + 100, 10)));
      if (iiliiiI1 > 0 && iiliiiI1 <= II1lI1ii) break;
    } while ($.flag == 1 && II1lI1il < 4);
    if ($.endFlag) return;
    resMsg && (message += "【京东账号" + $.index + "】\n" + resMsg);
    if (l1I1I1Ii) {}
    if (!$.proxyArr.host) {
      let IliiilII = parseInt(Math.random() * 1000 + l1l1i1l1, 10);
      console.log("等待 " + IliiilII / 1000 + " 秒");
      await $.wait(IliiilII);
    }
  } catch (IilI1i1l) {
    console.log(IilI1i1l);
  }
}
async function l1iIiIlI(II1lI1lI = 0) {
  try {
    let IlIiII1I = 2;
    if (II1lI1lI == 1) IlIiII1I = 1;
    let iiii1iiI = 0;
    for (let iilIlIi1 in $.shareCodeArr || {}) {
      if (iilIlIi1 === "flag" || iilIlIi1 === "updateTime" || iilIlIi1 === "shareCount") continue;
      if ($.shareCodeArr[iilIlIi1] && $.shareCodeArr.shareCount && $.shareCodeArr[iilIlIi1].count < $.shareCodeArr.shareCount) iiii1iiI++;
    }
    for (let Ill1I1l1 = 0; Ill1I1l1 < Iilllill.length && !$.runEnd; Ill1I1l1++) {
      l1l1i1il = Iilllill[Ill1I1l1];
      if (l1l1i1il) {
        $.UserName = decodeURIComponent(l1l1i1il.match(/pt_pin=([^; ]+)(?=;?)/) && l1l1i1il.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
        if (Iilllili.length > 0 && Iilllili.indexOf($.UserName) == -1 || $.shareCodeArr[$.UserName]) continue;
        $.index = Ill1I1l1 + 1;
        $.eid_token = "";
        await l1iIiIl1();
        await IlliiIII();
        await lI1iil1l(1);
        let lI1iiliI = 0;
        for (let IlIiII1i in $.shareCodeArr || {}) {
          if (IlIiII1i === "flag" || IlIiII1i === "updateTime" || IlIiII1i === "shareCount") continue;
          if ($.shareCodeArr[IlIiII1i] && $.shareCodeArr.shareCount && $.shareCodeArr[IlIiII1i].count < $.shareCodeArr.shareCount) lI1iiliI++;
        }
        if ($.endFlag || lI1iiliI - iiii1iiI >= IlIiII1I || $.end) break;
      }
    }
  } catch (IlIiII1l) {
    console.log(IlIiII1l);
  }
  if (Object.getOwnPropertyNames($.shareCodeArr).length > 0) for (let ii1IIlI1 in $.shareCodeArr || {}) {
    if (ii1IIlI1 === "flag" || ii1IIlI1 === "updateTime" || ii1IIlI1 === "shareCount") continue;
    if ($.shareCodeArr[ii1IIlI1]) iiliiiIi[ii1IIlI1] = $.shareCodeArr[ii1IIlI1];
  }
}
function IiI1i11i(iiii1iii = "", IIliIiII = 1) {
  return new Promise(async ii1il1i1 => {
    $.UVCookie = IlI1ilIl.getUVCookie("", "", $.url2, $.UVCookie);
    $.UVCookieArr[$.UserName] = $.UVCookie + "";
    let I1IIlili = "",
      lll1111l = new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000;
    const II11ilI1 = {
        "platform": Iii1IlI,
        "unionActId": "31168",
        "actId": $.actId,
        "d": Ili1i1Il,
        "unionShareId": iiii1iii,
        "type": IIliIiII,
        "qdPageId": "MO-J2011-1",
        "mdClickId": "jxhongbao_ck"
      },
      I1IIlill = {
        "appid": "u_hongbao",
        "body": JSON.stringify(II11ilI1),
        "client": "apple",
        "clientVersion": $.UA.split(";")[2] || "1.1.0",
        "functionId": "getCoupons"
      };
    let IiIIII11 = Ili1i1Ii.c822a.__genH5st(I1IIlill, $.UserName);
    I1IIlili = IiIIII11.h5st || "";
    let i1111Ii1 = "",
      lIiIii1I = {
        "url": "https://api.m.jd.com/api",
        "body": "functionId=getCoupons&appid=" + I1IIlill.appid + "&_=" + lll1111l + "&loginType=2&body=" + $.toStr(II11ilI1) + "&client=" + I1IIlill.client + "&clientVersion=" + I1IIlill.clientVersion + "&h5st=" + I1IIlili + ($.eid_token ? "&x-api-eid-token=" + $.eid_token : ""),
        "headers": {
          "accept": "*/*",
          "Accept-Language": "zh-cn",
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
          "Cookie": "__jd_ref_cls=Babel_H5FirstClick; " + $.UVCookie + IiI1i11I + " " + l1l1i1il,
          "origin": $.origin,
          "Referer": $.origin + "/",
          "User-Agent": $.UA
        },
        "timeout": 10000
      };
    lIiIii1I.headers.Cookie = lIiIii1I.headers.Cookie.replace(/;\s*$/, "");
    lIiIii1I.headers.Cookie = lIiIii1I.headers.Cookie.replace(/;([^\s])/g, "; $1");
    if ($.url2) lIiIii1I.headers.Referer = $.url2;
    lIiIii1I = Iii1Iil(lIiIii1I);
    var iill111i = $;
    if (l1l1i1ll && $.proxyArr.type && $.proxyArr.type == "socks") iill111i = l1l1i1ll;
    iill111i.post(lIiIii1I, async (ii1il1ii, ii1i1ii1, I1liII1i) => {
      try {
        if (ii1il1ii) {
          var liillIIi = Iii1Iii(ii1il1ii, ii1i1ii1);
          console.log("" + $.toStr(ii1il1ii));
          console.log($.name + " getCoupons API请求失败，请检查网路重试");
          if (liillIIi) {
            await l1iIiIl1(false);
            if (!$.switchProxies) await IiI1i11i(...arguments);
          }
        } else {
          let IiIIIil = $.toObj(I1liII1i, I1liII1i);
          if (typeof IiIIIil == "object") {
            IiIIIil.msg && (i1111Ii1 = IiIIIil.msg, console.log(IiIIIil.msg));
            if (IiIIIil.msg.indexOf("不展示弹层") > -1 && IIliIiII == 1) $.again = true;
            if (IiIIIil.msg.indexOf("领取上限") === -1 && IiIIIil.msg.indexOf("登录") === -1) {
              if (IIliIiII == 1) $.flag = 1;
            }
            if (IiIIIil.msg.indexOf("活动已结束") > -1 || IiIIIil.msg.indexOf("活动未开始") > -1) {
              $.endFlag = true;
              return;
            }
            iiii1iii && typeof IiIIIil.data !== "undefined" && typeof IiIIIil.data.joinNum !== "undefined" && console.log("当前" + IiIIIil.data.joinSuffix + ":" + IiIIIil.data.joinNum);
            if (IiIIIil.code == 0 && IiIIIil.data) {
              IIliIiII == 1 && (typeof $.proxyArr.pin == "object" && !$.proxyArr.pin.includes($.UserName) && $.proxyArr.pin.push($.UserName), $.shareCode.count++);
              let I1liII11 = "";
              for (let liillII1 of IiIIIil.data.couponList) {
                I1liII11 += "" + (I1liII11 ? "\n" : "");
                $.getlj = true;
                if (liillII1.type == 1) I1liII11 += "获得[红包]🧧" + liillII1.discount + "元 使用时间:" + $.time("yyyy-MM-dd", liillII1.beginTime) + " " + $.time("yyyy-MM-dd", liillII1.endTime);else {
                  if (liillII1.type == 3) I1liII11 += "获得[优惠券]🎟️满" + liillII1.quota + "减" + liillII1.discount + " 使用时间:" + $.time("yyyy-MM-dd", liillII1.beginTime) + " " + $.time("yyyy-MM-dd", liillII1.endTime);else {
                    if (liillII1.type == 6) I1liII11 += "获得[打折券]🎫满" + liillII1.quota + "打" + liillII1.discount * 10 + "折 使用时间:" + $.time("yyyy-MM-dd", liillII1.beginTime) + " " + $.time("yyyy-MM-dd", liillII1.endTime);else {
                      if (liillII1.type == 17) I1liII11 += "获得[" + (liillII1.shopName || "京东支付立减") + "] " + (liillII1.limitStr && liillII1.limitStr + " " || "") + "领取之日起" + liillII1.limitTime + "天有效";else {
                        var iIl1lI1i = "未知";
                        I1liII11 += "获得[" + (liillII1.shopName || iIl1lI1i) + "] " + $.toStr(liillII1, liillII1);
                      }
                    }
                  }
                }
              }
              I1liII11 && (resMsg += I1liII11 + "\n", console.log(I1liII11));
            }
            if (IIliIiII == 1 && typeof IiIIIil.data !== "undefined" && typeof IiIIIil.data.groupData !== "undefined" && typeof IiIIIil.data.groupData.groupInfo !== "undefined") {
              var II1ilIi1 = $.time("d", new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000);
              for (let lliIili1 of IiIIIil.data.groupData.groupInfo || []) {
                if (lliIili1.status == 2) console.log("打卡满可以领取" + lliIili1.hbPrize + "元红包🧧"), await $.wait(parseInt(Math.random() * 2000 + 2000, 10)), await IiI1i11i("", 3);else Iilllil1 + "" === "true" && lliIili1.status == 1 && II1ilIi1 == $.time("d", lliIili1.dayTaskStartTime) && !$.taskPinArr[$.UserName] && ($.taskPinArr[$.UserName] = {
                  "actId": $.actId,
                  "unionActId": "31168",
                  "platform": Iii1IlI,
                  "d": Ili1i1Il,
                  "origin": $.origin,
                  "cookie": "" + $.UVCookie + IiI1i11I + " " + l1l1i1il
                });
              }
            }
          } else console.log(I1liII1i);
        }
      } catch (lI1IIIl1) {
        $.logErr(lI1IIIl1, ii1i1ii1);
      } finally {
        ii1il1i1(i1111Ii1);
      }
    });
  });
}
function l1l1i1li(lII1Ii1 = "") {
  let l1ii1ili = true;
  return new Promise(Iliiilil => {
    $.UVCookie = IlI1ilIl.getUVCookie("", "", $.url2, $.UVCookie);
    $.UVCookieArr[$.UserName] = $.UVCookie + "";
    let iliIlliI = new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000;
    var I11i1i1l = {
      "actId": $.actId,
      "unionActId": "31168",
      "platform": Iii1IlI,
      "unionShareId": lII1Ii1,
      "uiUpdateTime": $.uiUpdateTime,
      "d": Ili1i1Il,
      "callType": 2
    };
    let liIi1Iil = {
      "url": "https://api.m.jd.com/api?functionId=showCoupon&appid=u_hongbao&_=" + iliIlliI + "&loginType=2&body=" + $.toStr(I11i1i1l) + "&client=apple&clientVersion=" + ($.UA.split(";")[2] || "1.1.0") + ($.eid_token ? "&x-api-eid-token=" + $.eid_token : ""),
      "headers": {
        "accept": "*/*",
        "Accept-Language": "zh-cn",
        "Cookie": "" + $.UVCookie + IiI1i11I + " " + l1l1i1il,
        "origin": $.origin,
        "Referer": $.origin + "/",
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    liIi1Iil.headers.Cookie = liIi1Iil.headers.Cookie.replace(/;\s*$/, "");
    liIi1Iil.headers.Cookie = liIi1Iil.headers.Cookie.replace(/;([^\s])/g, "; $1");
    if ($.url2) liIi1Iil.headers.Referer = $.url2;
    liIi1Iil = Iii1Iil(liIi1Iil);
    var Iliiilii = $;
    if (l1l1i1ll && $.proxyArr.type && $.proxyArr.type == "socks") Iliiilii = l1l1i1ll;
    Iliiilii.get(liIi1Iil, async (IlI1iiii, IIlli1l1, liIi1Iii) => {
      try {
        if (IlI1iiii) {
          var IIliIiil = Iii1Iii(IlI1iiii, IIlli1l1);
          console.log("" + $.toStr(IlI1iiii));
          console.log($.name + " showCoupon API请求失败，请检查网路重试");
          if (IIliIiil) {
            await l1iIiIl1(false);
            if (!$.switchProxies) await l1l1i1li(...arguments);
          }
        } else {
          let iiI1Iil1 = $.toObj(liIi1Iii, liIi1Iii);
          if (typeof iiI1Iil1 == "object") {
            if (iiI1Iil1.msg) console.log(iiI1Iil1.msg);
            if (iiI1Iil1.msg.indexOf("不展示弹层") > -1) $.again = true;
            if (iiI1Iil1.msg.indexOf("领取上限") > -1) $.runArr[$.UserName] = true;
            iiI1Iil1.msg.indexOf("上限") === -1 && iiI1Iil1.msg.indexOf("登录") === -1 && ($.flag = 1);
            if (iiI1Iil1.msg.indexOf("活动已结束") > -1 || iiI1Iil1.msg.indexOf("活动未开始") > -1) {
              $.endFlag = true;
              return;
            }
            if (iiI1Iil1.data.uiUpdateTime) $.uiUpdateTime = iiI1Iil1.data.uiUpdateTime;
            if (typeof iiI1Iil1.data !== "undefined" && typeof iiI1Iil1.data.groupData !== "undefined" && typeof iiI1Iil1.data.groupData.joinNum !== "undefined") {
              $.joinNum = iiI1Iil1.data.groupData.joinNum;
              let iiiIIiii = 0;
              for (let iiiIIilI of iiI1Iil1.data.groupData.groupInfo) {
                if (iiiIIiii < iiiIIilI.num) iiiIIiii = iiiIIilI.num;
              }
              if ($.shareCount > 0 && iiiIIiii > $.shareCount) iiiIIiii = $.shareCount;
              $.shareCodeArr[$.UserName] && ($.shareCodeArr[$.UserName].count = iiiIIiii);
              $.shareCodeArr.shareCount = iiiIIiii;
              if (iiiIIiii <= $.joinNum) {
                if (!$.shareCodeArr[$.UserName]) $.shareCodeArr[$.UserName] = {};
                $.shareCodeArr[$.UserName].count = $.joinNum;
                l1ii1ili = false;
              }
              console.log("【账号" + $.index + "】" + ($.nickName || $.UserName) + " " + $.joinNum + "/" + iiiIIiii + "人");
            }
            iiI1Iil1.msg.indexOf("活动已结束") > -1 && (l1ii1ili = false);
            if (typeof iiI1Iil1.data !== "undefined" && typeof iiI1Iil1.data.groupData !== "undefined" && typeof iiI1Iil1.data.groupData.groupInfo !== "undefined") {
              var IillllIi = $.time("d", new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000);
              for (let liIi1Il1 of iiI1Iil1.data.groupData.groupInfo || []) {
                if (liIi1Il1.status == 2) console.log("打卡满可以领取" + liIi1Il1.hbPrize + "元红包🧧"), await $.wait(parseInt(Math.random() * 2000 + 2000, 10)), await IiI1i11i("", 3);else Iilllil1 + "" === "true" && liIi1Il1.status == 1 && IillllIi == $.time("d", liIi1Il1.dayTaskStartTime) && !$.taskPinArr[$.UserName] && ($.taskPinArr[$.UserName] = {
                  "actId": $.actId,
                  "unionActId": "31168",
                  "platform": Iii1IlI,
                  "d": Ili1i1Il,
                  "origin": $.origin,
                  "cookie": "" + $.UVCookie + IiI1i11I + " " + l1l1i1il
                });
              }
            }
          } else console.log(liIi1Iii);
        }
      } catch (i1l11iII) {
        $.logErr(i1l11iII, IIlli1l1);
      } finally {
        Iliiilil(l1ii1ili);
      }
    });
  });
}
function llliI1Ii(iiI1Iiii) {
  return new Promise(iiiIIili => {
    const i1l11iIi = {
      "url": "" + iiI1Iiii,
      "timeout": 10000,
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88"
      }
    };
    $.get(i1l11iIi, async (IIlli1ii, IlI1iiiI, IlliIli1) => {
      try {
        if (IIlli1ii) {} else IlI1iiiI?.["statusCode"] === 200 ? IlliIli1 && (IlliIli1 = JSON.parse(IlliIli1)) : $.authorCodeend = true;
      } catch (I1iiiIIi) {
        $.logErr(I1iiiIIi, IlI1iiiI);
        IlliIli1 = null;
      } finally {
        iiiIIili(IlliIli1);
      }
    });
  });
}
function IlliiII1(iiii1i1I, I1iiiIIl) {
  return Math.floor(Math.random() * (I1iiiIIl - iiii1i1I)) + iiii1i1I;
}
function IiI1i11l() {
  if ($.shareCodeArr[$.UserName]) {
    console.log("【账号" + $.index + "】缓存分享码:" + $.shareCodeArr[$.UserName].code.replace(/.+(.{3})/, "***$1"));
    return;
  }
  return new Promise(async II111I1i => {
    let i1l1l11i = "",
      II111I1l = new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000;
    const IiIIIIIi = {
        "unionActId": "31168",
        "actId": $.actId,
        "platform": Iii1IlI,
        "unionShareId": "",
        "d": Ili1i1Il,
        "supportPic": 2
      },
      Iiiill1 = {
        "appid": "u_hongbao",
        "body": JSON.stringify(IiIIIIIi),
        "client": "apple",
        "clientVersion": $.UA.split(";")[2] || "1.1.0",
        "functionId": "shareUnionCoupon"
      };
    Ili1i1Ii.c10dc = iiI1Ill1("c10dc", $.UA);
    await Ili1i1Ii.c10dc.__genAlgo();
    let IiIIIIIl = Ili1i1Ii.c10dc.__genH5st(Iiiill1, $.UserName);
    i1l1l11i = IiIIIIIl.h5st || "";
    let lII1IIi1 = {
      "url": "https://api.m.jd.com/api?functionId=shareUnionCoupon&appid=" + Iiiill1.appid + "&_=" + II111I1l + "&loginType=2&body=" + $.toStr(IiIIIIIi) + "&client=" + Iiiill1.client + "&clientVersion=" + Iiiill1.clientVersion + "&h5st=" + i1l1l11i + ($.eid_token ? "&x-api-eid-token=" + $.eid_token : ""),
      "headers": {
        "accept": "*/*",
        "Accept-Language": "zh-cn",
        "Cookie": "" + $.UVCookie + IiI1i11I + " " + l1l1i1il,
        "origin": $.origin,
        "Referer": $.origin + "/",
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    lII1IIi1.headers.Cookie = lII1IIi1.headers.Cookie.replace(/;\s*$/, "");
    lII1IIi1.headers.Cookie = lII1IIi1.headers.Cookie.replace(/;([^\s])/g, "; $1");
    lII1IIi1 = Iii1Iil(lII1IIi1);
    var IiiillI = $;
    if (l1l1i1ll && $.proxyArr.type && $.proxyArr.type == "socks") IiiillI = l1l1i1ll;
    IiiillI.get(lII1IIi1, async (I11il1I1, i1l11i1I, IiiiliI) => {
      try {
        if (I11il1I1) {
          var lIiIiiI1 = Iii1Iii(I11il1I1, i1l11i1I);
          console.log("" + $.toStr(I11il1I1));
          console.log($.name + " shareUnionCoupon API请求失败，请检查网路重试");
          if (lIiIiiI1) {
            await l1iIiIl1(false);
            if (!$.switchProxies) await IiI1i11l();
          }
        } else {
          let i1l11i1l = $.toObj(IiiiliI, IiiiliI);
          if (typeof i1l11i1l == "object") {
            if (i1l11i1l.code == 0 && i1l11i1l.data && i1l11i1l.data.shareUrl) {
              let Iiiilil = i1l11i1l.data.shareUrl.match(/\?s=([^&]+)/) && i1l11i1l.data.shareUrl.match(/\?s=([^&]+)/)[1] || "";
              Iiiilil && (console.log("【账号" + $.index + "】分享码：" + Iiiilil.replace(/.+(.{3})/, "***$1")), $.shareCodeArr[$.UserName] = {
                "code": Iiiilil,
                "count": $.joinNum
              });
            }
          } else console.log(IiiiliI);
        }
      } catch (lII1IIil) {
        $.logErr(lII1IIil, i1l11i1I);
      } finally {
        II111I1i();
      }
    });
  });
}
function Iii1Il1() {
  return new Promise(I11IIl1i => {
    let Ilii1I11 = {
      "url": $.url1,
      "followRedirect": false,
      "headers": {
        "Cookie": "" + $.UVCookie + IiI1i11I + " " + l1l1i1il,
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    var I1Iiill = $;
    I1Iiill.get(Ilii1I11, async (iIi1IiI1, lIi11Ii1, lIi11Iii) => {
      try {
        if (iIi1IiI1) {
          var I1IiilI = Iii1Iii(iIi1IiI1, lIi11Ii1);
          console.log("" + $.toStr(iIi1IiI1));
          console.log($.name + " getUrl1 API请求失败，请检查网路重试");
          if (I1IiilI) {
            await l1iIiIl1(false);
            if (!$.switchProxies) await Iii1Il1();
          }
        } else l1l1i1lI(lIi11Ii1), $.url2 = lIi11Ii1 && lIi11Ii1.headers && (lIi11Ii1.headers.location || lIi11Ii1.headers.Location || "") || "", $.url2 = decodeURIComponent($.url2), $.url2 = $.url2.match(/(https:\/\/\S{3,7}[\.m]{0,}\.jd\.com\/mall[^'"]+)/) && $.url2.match(/(https:\/\/\S{3,7}[\.m]{0,}\.jd\.com\/mall[^'"]+)/)[1] || "";
      } catch (l1l1i11I) {
        $.logErr(l1l1i11I, lIi11Ii1);
      } finally {
        I11IIl1i(lIi11Iii);
      }
    });
  });
}
function Il1IilII() {
  return new Promise(lII1Ill => {
    let Iii1I1i = {
      "url": "https://u.jd.com/" + Ili1i1Il + ($.shareCode && "?s=" + $.shareCode || ""),
      "followRedirect": false,
      "headers": {
        "Cookie": "" + $.UVCookie + IiI1i11I + " " + l1l1i1il,
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    var Iii1I1l = $;
    Iii1I1l.get(Iii1I1i, async (lliIilIi, iIllIiiI, lliIilIl) => {
      try {
        if (lliIilIi) {
          var IiI1i1ll = Iii1Iii(lliIilIi, iIllIiiI);
          console.log("" + $.toStr(lliIilIi));
          console.log($.name + " getUrl API请求失败，请检查网路重试");
          if (IiI1i1ll) {
            await l1iIiIl1(false);
            if (!$.switchProxies) await Il1IilII();
          }
        } else l1l1i1lI(iIllIiiI), $.url1 = lliIilIl && lliIilIl.match(/(https:\/\/u\.jd\.com\/jda[^']+)/) && lliIilIl.match(/(https:\/\/u\.jd\.com\/jda[^']+)/)[1] || "";
      } catch (Iii1I11) {
        $.logErr(Iii1I11, iIllIiiI);
      } finally {
        lII1Ill(lliIilIl);
      }
    });
  });
}
async function iiI1IliI() {
  Ili1i1Ii["7b74b"] = iiI1Ill1("7b74b", $.UA);
  await Ili1i1Ii["7b74b"].__genAlgo();
  resMsg = "";
  await llliI1Il();
  resMsg && (message += "【京东账号" + $.index + "】\n" + resMsg);
}
function llliI1Il() {
  return new Promise(iiii1lII => {
    var iiii1lI1 = {
      "actId": $.taskPinArr[$.UserName].actId,
      "unionActId": $.taskPinArr[$.UserName].unionActId,
      "platform": $.taskPinArr[$.UserName].platform,
      "d": $.taskPinArr[$.UserName].d,
      "taskType": 1,
      "prstate": 0
    };
    let I1i11lll = "",
      I1i11lli = new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000;
    const li1ii11I = {
      "appid": "u_hongbao",
      "body": JSON.stringify(iiii1lI1),
      "client": "apple",
      "clientVersion": $.UA.split(";")[2] || "1.1.0",
      "functionId": "queryFullGroupInfoMap"
    };
    let llIIIIii = Ili1i1Ii["7b74b"].__genH5st(li1ii11I, $.UserName);
    I1i11lll = llIIIIii.h5st || "";
    let iilIIIi1 = "https://api.m.jd.com/api?functionId=queryFullGroupInfoMap&appid=" + li1ii11I.appid + "&_=" + I1i11lli + "&loginType=2&body=" + $.toStr(iiii1lI1) + "&client=" + li1ii11I.client + "&clientVersion=" + li1ii11I.clientVersion + "&h5st=" + I1i11lll + ($.eid_token ? "&x-api-eid-token=" + $.eid_token : ""),
      l11lllI1 = {
        "url": iilIIIi1,
        "headers": {
          "accept": "*/*",
          "Accept-Language": "zh-cn",
          "Cookie": $.taskPinArr[$.UserName].cookie,
          "origin": $.taskPinArr[$.UserName].origin,
          "Referer": $.taskPinArr[$.UserName].origin + "/",
          "User-Agent": $.UA
        },
        "timeout": 10000
      };
    var I1I1Iil1 = $;
    I1I1Iil1.get(l11lllI1, async (I1l11Ii1, iil1i1li, IiIIlI1l) => {
      try {
        if (I1l11Ii1) console.log("" + $.toStr(I1l11Ii1)), console.log($.name + " dotask API请求失败，请检查网路重试");else {
          var I11Illi1 = $.toObj(IiIIlI1l, IiIIlI1l);
          if (I11Illi1.code == 200 && I11Illi1.data) {
            if (I11Illi1.data.dayGroupData && I11Illi1.data.dayGroupData.groupInfo.length > 0) {
              var iil1i1ll = I11Illi1.data.dayGroupData.groupInfo,
                ilIililI = 0;
              for (let I1I1Iiii of iil1i1ll) {
                if (I1I1Iiii.taskType == 2 && I1I1Iiii.status == 2) ilIililI++, console.log("领取邀请 " + Number(I1I1Iiii.joinNum) + " 人奖励"), await iiI1Ili1("", 2), await $.wait(2000);else {
                  if (I1I1Iiii.taskType == 100 && (I1I1Iiii.status == 1 || I1I1Iiii.status == 2)) I1I1Iiii.status == 1 && (console.log("做任务", I1I1Iiii.showInfo), await il1iIi11("", I1I1Iiii.taskId), await $.wait(2000)), console.log("抽奖", I1I1Iiii.showInfo), await iiI1Ili1("", 8, I1I1Iiii.taskId), await $.wait(2000);else {
                    if (I1I1Iiii.adId && I1I1Iiii.status == 1) {
                      console.log("做任务", I1I1Iiii.showInfo, I1I1Iiii.taskId);
                      await lI1iil1I(I1I1Iiii.projectId, I1I1Iiii.taskId);
                      await $.wait(6000);
                      await i11lI1i1(I1I1Iiii.projectId, I1I1Iiii.taskId, I1I1Iiii.adInfo.target_url);
                      await $.wait(2000);
                    } else ilIililI++;
                  }
                }
              }
              ilIililI >= iil1i1ll.length && console.log("任务已经做完了");
            } else console.log("获取不到任务");
          } else console.log(I11Illi1);
        }
      } catch (ll1i1IlI) {
        $.logErr(ll1i1IlI, iil1i1li);
      } finally {
        iiii1lII(IiIIlI1l);
      }
    });
  });
}
function il1iIi11(I1ii1iI, llI11I1) {
  return new Promise(async illIill => {
    let lI1i1Ii1 = "",
      IIlI1ii = new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000;
    const IIlI1il = {
        "unionActId": "31168",
        "actId": $.taskPinArr[$.UserName].actId,
        "platform": $.taskPinArr[$.UserName].platform,
        "unionShareId": I1ii1iI,
        "d": Ili1i1Il,
        "supportPic": 2,
        "taskId": llI11I1
      },
      iiiIIlll = {
        "appid": "u_hongbao",
        "body": JSON.stringify(IIlI1il),
        "client": "apple",
        "clientVersion": $.UA.split(";")[2] || "1.1.0",
        "functionId": "shareUnionCoupon"
      };
    Ili1i1Ii.c10dc = iiI1Ill1("c10dc", $.UA);
    await Ili1i1Ii.c10dc.__genAlgo();
    let iiiIIlli = Ili1i1Ii.c10dc.__genH5st(iiiIIlll, $.UserName);
    lI1i1Ii1 = iiiIIlli.h5st || "";
    let I1l11IlI = {
      "url": "https://api.m.jd.com/api?functionId=shareUnionCoupon&appid=" + iiiIIlll.appid + "&_=" + IIlI1ii + "&loginType=2&body=" + $.toStr(IIlI1il) + "&client=" + iiiIIlll.client + "&clientVersion=" + iiiIIlll.clientVersion + "&h5st=" + lI1i1Ii1 + ($.eid_token ? "&x-api-eid-token=" + $.eid_token : ""),
      "headers": {
        "accept": "*/*",
        "Accept-Language": "zh-cn",
        "Cookie": "__jd_ref_cls=hongbao_quyaoqing_ck; " + $.taskPinArr[$.UserName].cookie,
        "origin": $.taskPinArr[$.UserName].origin,
        "Referer": $.taskPinArr[$.UserName].origin + "/",
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    I1l11IlI.headers.Cookie = I1l11IlI.headers.Cookie.replace(/;\s*$/, "");
    I1l11IlI.headers.Cookie = I1l11IlI.headers.Cookie.replace(/;([^\s])/g, "; $1");
    var II1ilIi = $;
    II1ilIi.get(I1l11IlI, async (iii1111i, illIiil, liiI1IiI) => {
      try {
        if (iii1111i) console.log("" + $.toStr(iii1111i)), console.log($.name + " doTaskUnionShare API请求失败，请检查网路重试");else {
          let iii1111l = $.toObj(liiI1IiI, liiI1IiI);
          if (typeof iii1111l == "object") {} else console.log(liiI1IiI);
        }
      } catch (iili1I1l) {
        $.logErr(iili1I1l, illIiil);
      } finally {
        illIill();
      }
    });
  });
}
function iiI1Ili1(illIiii = "", il1iiIII = 8, IliiIII = "") {
  return new Promise(async llIIIIll => {
    let illIii1 = "",
      iii1111I = new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000;
    var i111ii11 = {
      "platform": $.taskPinArr[$.UserName].platform,
      "unionActId": "31168",
      "actId": $.taskPinArr[$.UserName].actId,
      "d": Ili1i1Il,
      "unionShareId": illIiii,
      "type": il1iiIII,
      "qdPageId": "MO-J2011-1",
      "mdClickId": "jxhongbao_ck"
    };
    IliiIII && (i111ii11.taskId = IliiIII, i111ii11.agreeState = 1);
    const illIiiI = {
      "appid": "u_hongbao",
      "body": JSON.stringify(i111ii11),
      "client": "apple",
      "clientVersion": $.UA.split(";")[2] || "1.1.0",
      "functionId": "getCoupons"
    };
    Ili1i1Ii.c822a = iiI1Ill1("c822a", $.UA);
    await Ili1i1Ii.c822a.__genAlgo();
    let lI1i1IlI = Ili1i1Ii.c822a.__genH5st(illIiiI, $.UserName);
    illIii1 = lI1i1IlI.h5st || "";
    let iI1ill1l = "",
      iI1ill1i = {
        "url": "https://api.m.jd.com/api",
        "body": "functionId=getCoupons&appid=" + illIiiI.appid + "&_=" + iii1111I + "&loginType=2&body=" + $.toStr(i111ii11) + "&client=" + illIiiI.client + "&clientVersion=" + illIiiI.clientVersion + "&h5st=" + illIii1 + ($.eid_token ? "&x-api-eid-token=" + $.eid_token : ""),
        "headers": {
          "accept": "*/*",
          "Accept-Language": "zh-cn",
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
          "Cookie": "__jd_ref_cls=hongbao_shiyongpinquchoujiang_ck; " + $.taskPinArr[$.UserName].cookie,
          "origin": $.taskPinArr[$.UserName].origin,
          "Referer": $.taskPinArr[$.UserName].origin + "/",
          "User-Agent": $.UA
        },
        "timeout": 10000
      };
    iI1ill1i.headers.Cookie = iI1ill1i.headers.Cookie.replace(/;\s*$/, "");
    iI1ill1i.headers.Cookie = iI1ill1i.headers.Cookie.replace(/;([^\s])/g, "; $1");
    var i11l1lIl = $;
    i11l1lIl.post(iI1ill1i, async (il1iiI1I, Il1I1IiI, l1liil1i) => {
      try {
        if (il1iiI1I) console.log("" + $.toStr(il1iiI1I)), console.log($.name + " doTaskGetCoupons API请求失败，请检查网路重试");else {
          let l1I1l11l = $.toObj(l1liil1i, l1liil1i);
          if (typeof l1I1l11l == "object") {
            l1I1l11l.msg && (iI1ill1l = l1I1l11l.msg, console.log(l1I1l11l.msg));
            if (l1I1l11l.code == 0 && l1I1l11l.data) {
              let iIIIilil = "";
              for (let l1I1l11i of l1I1l11l.data.couponList) {
                iIIIilil += "" + (iIIIilil ? "\n" : "");
                $.getlj = true;
                if (l1I1l11i.type == 1) iIIIilil += "获得[红包]🧧" + l1I1l11i.discount + "元 使用时间:" + $.time("yyyy-MM-dd", l1I1l11i.beginTime) + " " + $.time("yyyy-MM-dd", l1I1l11i.endTime);else {
                  if (l1I1l11i.type == 3) iIIIilil += "获得[优惠券]🎟️满" + l1I1l11i.quota + "减" + l1I1l11i.discount + " 使用时间:" + $.time("yyyy-MM-dd", l1I1l11i.beginTime) + " " + $.time("yyyy-MM-dd", l1I1l11i.endTime);else {
                    if (l1I1l11i.type == 6) iIIIilil += "获得[打折券]🎫满" + l1I1l11i.quota + "打" + l1I1l11i.discount * 10 + "折 使用时间:" + $.time("yyyy-MM-dd", l1I1l11i.beginTime) + " " + $.time("yyyy-MM-dd", l1I1l11i.endTime);else {
                      if (l1I1l11i.type == 17) iIIIilil += "获得[" + (l1I1l11i.shopName || "京东支付立减") + "] " + (l1I1l11i.limitStr && l1I1l11i.limitStr + " " || "") + "领取之日起" + l1I1l11i.limitTime + "天有效";else {
                        var iIIIilii = "未知";
                        iIIIilil += "获得[" + (l1I1l11i.shopName || iIIIilii) + "] " + $.toStr(l1I1l11i, l1I1l11i);
                      }
                    }
                  }
                }
              }
              iIIIilil && (resMsg += iIIIilil + "\n", console.log(iIIIilil));
            }
          } else console.log(l1liil1i);
        }
      } catch (il1iiI1i) {
        $.logErr(il1iiI1i, Il1I1IiI);
      } finally {
        llIIIIll(iI1ill1l);
      }
    });
  });
}
function lI1iil1I(IIiiiiII, Il1I1Iii) {
  return new Promise(liiI1Iii => {
    var i1illII = {
      "encryptProjectId": IIiiiiII,
      "encryptAssignmentId": Il1I1Iii,
      "sourceCode": "ace36658",
      "actionType": 1,
      "itemId": "1"
    };
    let Il1I1Il1 = "",
      i111i1l = new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000;
    const lIiIiii1 = {
      "appid": "u_hongbao",
      "body": JSON.stringify(i1illII),
      "client": "apple",
      "clientVersion": $.UA.split(";")[2] || "1.1.0",
      "functionId": "doInteractiveAssignment"
    };
    let I1llIl1 = Ili1i1Ii["7b74b"].__genH5st(lIiIiii1, $.UserName);
    Il1I1Il1 = I1llIl1.h5st || "";
    let liiI1Iil = "https://api.m.jd.com/api?functionId=doInteractiveAssignment&appid=" + lIiIiii1.appid + "&_=" + i111i1l + "&loginType=2&body=" + $.toStr(i1illII) + "&client=" + lIiIiii1.client + "&clientVersion=" + lIiIiii1.clientVersion + "&h5st=" + Il1I1Il1 + ($.eid_token ? "&x-api-eid-token=" + $.eid_token : ""),
      i111i1i = {
        "url": liiI1Iil,
        "headers": {
          "accept": "*/*",
          "Accept-Language": "zh-cn",
          "Cookie": $.taskPinArr[$.UserName].cookie,
          "origin": $.taskPinArr[$.UserName].origin,
          "Referer": $.taskPinArr[$.UserName].origin + "/",
          "User-Agent": $.UA
        },
        "timeout": 10000
      };
    var ii1111ii = $;
    ii1111ii.get(i111i1i, async (I1iiIl1I, iiIlilli, II1ili1) => {
      try {
        if (I1iiIl1I) console.log("" + $.toStr(I1iiIl1I)), console.log($.name + " dotask API请求失败，请检查网路重试");else {
          var Il1I1IlI = $.toObj(II1ili1, II1ili1);
          Il1I1IlI.code == 0 ? console.log(Il1I1IlI.msg) : console.log(Il1I1IlI);
        }
      } catch (llIiill1) {
        $.logErr(llIiill1, iiIlilli);
      } finally {
        liiI1Iii(II1ili1);
      }
    });
  });
}
function i11lI1i1(lIli1iII, liiI1Ill, liiI1Ili) {
  return new Promise(IIl11lll => {
    var i11l11I = "{\"dataSource\":\"babelInteractive\",\"method\":\"customDoInteractiveAssignmentForBabel\",\"reqParams\":\"{\\\"itemId\\\":\\\"1\\\",\\\"encryptProjectId\\\":\\\"" + lIli1iII + "\\\",\\\"encryptAssignmentId\\\":\\\"" + liiI1Ill + "\\\"}\",\"sdkVersion\":\"1.0.0\",\"clientLanguage\":\"zh\"}";
    let IIl11lli = new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000,
      ii1i1lIl = "https://api.m.jd.com/?client=wh5&clientVersion=1.0.0&functionId=qryViewkitCallbackResult&body=" + i11l11I + "&_timestamp=" + IIl11lli;
    origin = liiI1Ili.match(/(https:\/\/\S{3,7}[\.m]{0,}\.jd\.com)/) && liiI1Ili.match(/(https:\/\/\S{3,7}[\.m]{0,}\.jd\.com)/)[1] || "";
    let lIiIiilI = {
      "url": ii1i1lIl,
      "headers": {
        "accept": "*/*",
        "Accept-Language": "zh-cn",
        "Cookie": $.taskPinArr[$.UserName].cookie,
        "origin": origin,
        "Referer": liiI1Ili,
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    var I1IIllIi = $;
    I1IIllIi.get(lIiIiilI, async (iiIl1I1l, ii1i1lIi, iiIl1I1i) => {
      try {
        if (iiIl1I1l) console.log("" + $.toStr(iiIl1I1l)), console.log($.name + " callbackResult API请求失败，请检查网路重试");else {
          var I11IllIl = $.toObj(iiIl1I1i, iiIl1I1i);
          I11IllIl.code == 0 ? console.log(I11IllIl.msg) : console.log(I11IllIl);
        }
      } catch (IllI1ilI) {
        $.logErr(IllI1ilI, ii1i1lIi);
      } finally {
        IIl11lll(iiIl1I1i);
      }
    });
  });
}
function l1l1i1lI(il1IIil) {
  let lliIiiII = il1IIil && il1IIil.headers && (il1IIil.headers["set-cookie"] || il1IIil.headers["Set-Cookie"] || "") || "",
    iiIIlilI = "";
  if (lliIiiII) {
    if (typeof lliIiiII != "object") iiIIlilI = lliIiiII.split(",");else iiIIlilI = lliIiiII;
    for (let llIi1I11 of iiIIlilI) {
      let IIlili1i = llIi1I11.split(";")[0].trim();
      if (IIlili1i.split("=")[1]) {
        IIlili1i.split("=")[0] == "unpl" && IIlili1i.split("=")[1] && ($.unpl = IIlili1i.split("=")[1]);
        if (IiI1i11I.indexOf(IIlili1i.split("=")[1]) == -1) IiI1i11I += IIlili1i.replace(/ /g, "") + "; ";
      }
    }
  }
}
function Iii1Iii(IIl11li1, illiii1l) {
  var llIi1I1I = false;
  if (iiliiiIl) {
    if (/statusCode=407/.test(IIl11li1)) {
      console.log("代理连接失败");
      llIi1I1I = true;
      if ($.getProxyIp) for (let llIIIII1 of l11Il1i1) {
        if (!llIIIII1 || llIIIII1.status == false) continue;
        if (llIIIII1.proxyArr && llIIIII1.proxyArr.host == $.proxyArr.host && llIIIII1.proxyArr.port == $.proxyArr.port) {
          llIIIII1.errorCount++;
          llIIIII1.errorCount >= 3 && (console.log("代理池(" + llIIIII1.index + ")请求多次失败，禁用"), llIIIII1.status = false);
          break;
        }
      }
    } else {
      if (/ESOCKETTIMEDOUT|Timeout awaiting|ETIMEDOUT/.test(IIl11li1)) console.log("请求超时"), llIi1I1I = true;else /socket|connect ECONNREFUSED/.test(IIl11li1) && (console.log("代理连接失败"), llIi1I1I = true);
    }
  }
  return llIi1I1I && ($.switchProxies = true), llIi1I1I;
}
function Iii1Iil(IllI1i1i) {
  if ($.proxyArr.host && $.proxyArr.port) {
    if ($.proxyArr.type == "socks") {
      var II1il1I = $.proxyArr.type == "socks" ? "socks5" : "http";
      let ii1IIll1 = II1il1I + "://" + ($.proxyArr.auth && $.proxyArr.auth.username ? $.proxyArr.auth.username + ":" + $.proxyArr.auth.password + "@" : "") + $.proxyArr.host + ":" + $.proxyArr.port;
      if (II1il1I == "http") Object.assign(IllI1i1i, {
        "proxy": ii1IIll1
      });else {
        if (lI1iil1i) {
          const i1i1IIi1 = new lI1iil1i(ii1IIll1);
          Object.assign(IllI1i1i, {
            "agent": i1i1IIi1
          });
        }
      }
      delete IllI1i1i.headers["Accept-Encoding"];
    } else {
      const l1liilI1 = {
        "http": Il1IilI1.httpsOverHttp({
          "proxy": {
            "host": $.proxyArr.host,
            "port": $.proxyArr.port * 1,
            "proxyAuth": $.proxyArr.auth && $.proxyArr.auth.username ? $.proxyArr.auth.username + ":" + $.proxyArr.auth.password : ""
          }
        }),
        "https": Il1IilI1.httpsOverHttp({
          "proxy": {
            "host": $.proxyArr.host,
            "port": $.proxyArr.port * 1,
            "proxyAuth": $.proxyArr.auth && $.proxyArr.auth.username ? $.proxyArr.auth.username + ":" + $.proxyArr.auth.password : ""
          }
        })
      };
      Object.assign(IllI1i1i, {
        "agent": l1liilI1
      });
    }
    Object.assign(IllI1i1i, {
      "retry": {
        "limit": 0
      }
    });
  }
  return IllI1i1i;
}
function il1iIi1I(IIlilil1) {
  if (IIlilil1.status == false) return true;
  return IIlilil1.count++, new Promise(IllIl11i => {
    let ii1iII1 = true;
    $.get({
      "url": IIlilil1.url,
      "timeout": 10000
    }, async (il1iIlll, il1iIlli, IlIilIIl) => {
      try {
        if (il1iIlll) console.log("" + $.toStr(il1iIlll)), console.log($.name + " 获取ip代理池(" + IIlilil1.index + ") API请求失败，请检查网路重试");else {
          let illl11il = $.toStr(IlIilIIl, IlIilIIl),
            IliiIi1 = illl11il.match(/((\d{0,3}\.){3}\d{0,3}):(\d{0,5})/);
          if (IliiIi1 && IliiIi1.length == 4) {
            $.switchProxies && ($.proxyArr.host != IliiIi1[1] || $.proxyArr.port != IliiIi1[3] ? console.log("切换成功！") : console.log("切换失败，IP不变！"));
            ii1iII1 = false;
            $.proxyArr.host = IliiIi1[1];
            $.proxyArr.port = IliiIi1[3];
            $.proxyArr.pin = [];
            $.proxyArr.auth = "";
            var IliiIii = new RegExp(IliiIi1[1] + ":" + IliiIi1[3] + ":(\\S+):([^\\s\"]+)");
            if (IliiIii.test(illl11il)) {
              var lIlil1I1 = illl11il.match(IliiIii);
              lIlil1I1.length == 3 && ($.proxyArr.auth = {
                "username": lIlil1I1[1],
                "password": lIlil1I1[2]
              });
            }
            $.getProxyIp = true;
            IIlilil1.count = 0;
            IIlilil1.proxyArr = $.proxyArr;
          } else console.log("获取ip代理池(" + IIlilil1.index + ")失败\n" + IlIilIIl), /订单不存在|key无效|无可用余量|过期|充值|续费|登陆|为空|添加|联系|未检索|Error/.test(IlIilIIl) && (IIlilil1.count = 999);
        }
      } catch (IlIilII1) {
        $.logErr(IlIilII1, il1iIlli);
        console.log(IlIilIIl);
      } finally {
        IllIl11i(ii1iII1);
      }
    });
  });
}
async function l1iIiIl1(i111iII = true, l1I11ii1 = 1) {
  i111iII && ($.UA = "jdapp;iPhone;12.2.0;;;M/5.0;appBuild/168919;jdSupportDarkMode/0;ef/1;ep/" + encodeURIComponent(JSON.stringify({
    "ciphertype": 5,
    "cipher": {
      "ud": "",
      "sv": "CJGkCm==",
      "iad": ""
    },
    "ts": Math.floor(new Date().getTime() / 1000),
    "hdid": "JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=",
    "version": "1.0.3",
    "appname": "com.360buy.jdmobile",
    "ridx": -1
  })) + ";Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;", l1I11ii1 != 1 && ($.UA = "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"));
  try {
    if (iiliiiIl) {
      let I1i11lIl = true;
      if (l11Il1i1 && ($.switchProxies || !$.proxyArr.host || !$.getProxyIp)) {
        let iiliilli = 1;
        do {
          $.getProxyIp = false;
          for (let IIil11I1 of l11Il1i1) {
            if (!IIil11I1 || IIil11I1.status == false) continue;
            I1i11lIl = await il1iIi1I(IIil11I1);
            if (!I1i11lIl) break;
            IIil11I1.count >= 3 && (console.log("代理池(" + IIil11I1.index + ")获取多次失败，禁用"), IIil11I1.status = false);
          }
          iiliilli++;
        } while (I1i11lIl && iiliilli <= 4);
      } else l11Il1i1 && $.proxyArr.host && (I1i11lIl = false);
      I1i11lIl && ($.proxyArr = {}, console.log("无可用代理地址，使用本地IP\n"));
      if ($.proxyArr.host && $.proxyArr.port) console.log("代理" + ($.getProxyIp ? "池" : "") + "地址:" + $.proxyArr.host + ":" + $.proxyArr.port + "\n");
      $.switchProxies = false;
    }
  } catch (l1I1l1i1) {
    console.log(l1I1l1i1);
  }
}
function IlI1ilI1(Il1llI11) {
  if (typeof Il1llI11 == "string") try {
    return JSON.parse(Il1llI11);
  } catch (ii1i1l1I) {
    return console.log(ii1i1l1I), $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie"), [];
  }
}
async function IlliiIII() {
  var I1ii11l = function () {
    function II1ilI1(ll11i1il, iiiIiIiI) {
      ll11i1il = [ll11i1il[0] >>> 16, 65535 & ll11i1il[0], ll11i1il[1] >>> 16, 65535 & ll11i1il[1]];
      iiiIiIiI = [iiiIiIiI[0] >>> 16, 65535 & iiiIiIiI[0], iiiIiIiI[1] >>> 16, 65535 & iiiIiIiI[1]];
      var II11IIl = [0, 0, 0, 0];
      return II11IIl[3] += ll11i1il[3] + iiiIiIiI[3], II11IIl[2] += II11IIl[3] >>> 16, II11IIl[3] &= 65535, II11IIl[2] += ll11i1il[2] + iiiIiIiI[2], II11IIl[1] += II11IIl[2] >>> 16, II11IIl[2] &= 65535, II11IIl[1] += ll11i1il[1] + iiiIiIiI[1], II11IIl[0] += II11IIl[1] >>> 16, II11IIl[1] &= 65535, II11IIl[0] += ll11i1il[0] + iiiIiIiI[0], II11IIl[0] &= 65535, [II11IIl[0] << 16 | II11IIl[1], II11IIl[2] << 16 | II11IIl[3]];
    }
    function illiiiII(I1llI1il, I1llI1ii) {
      I1llI1il = [I1llI1il[0] >>> 16, 65535 & I1llI1il[0], I1llI1il[1] >>> 16, 65535 & I1llI1il[1]];
      I1llI1ii = [I1llI1ii[0] >>> 16, 65535 & I1llI1ii[0], I1llI1ii[1] >>> 16, 65535 & I1llI1ii[1]];
      var iiI1iIiI = [0, 0, 0, 0];
      return iiI1iIiI[3] += I1llI1il[3] * I1llI1ii[3], iiI1iIiI[2] += iiI1iIiI[3] >>> 16, iiI1iIiI[3] &= 65535, iiI1iIiI[2] += I1llI1il[2] * I1llI1ii[3], iiI1iIiI[1] += iiI1iIiI[2] >>> 16, iiI1iIiI[2] &= 65535, iiI1iIiI[2] += I1llI1il[3] * I1llI1ii[2], iiI1iIiI[1] += iiI1iIiI[2] >>> 16, iiI1iIiI[2] &= 65535, iiI1iIiI[1] += I1llI1il[1] * I1llI1ii[3], iiI1iIiI[0] += iiI1iIiI[1] >>> 16, iiI1iIiI[1] &= 65535, iiI1iIiI[1] += I1llI1il[2] * I1llI1ii[2], iiI1iIiI[0] += iiI1iIiI[1] >>> 16, iiI1iIiI[1] &= 65535, iiI1iIiI[1] += I1llI1il[3] * I1llI1ii[1], iiI1iIiI[0] += iiI1iIiI[1] >>> 16, iiI1iIiI[1] &= 65535, iiI1iIiI[0] += I1llI1il[0] * I1llI1ii[3] + I1llI1il[1] * I1llI1ii[2] + I1llI1il[2] * I1llI1ii[1] + I1llI1il[3] * I1llI1ii[0], iiI1iIiI[0] &= 65535, [iiI1iIiI[0] << 16 | iiI1iIiI[1], iiI1iIiI[2] << 16 | iiI1iIiI[3]];
    }
    function I1llII1(lIl11111, ii1Il1i) {
      return 32 === (ii1Il1i %= 64) ? [lIl11111[1], lIl11111[0]] : 32 > ii1Il1i ? [lIl11111[0] << ii1Il1i | lIl11111[1] >>> 32 - ii1Il1i, lIl11111[1] << ii1Il1i | lIl11111[0] >>> 32 - ii1Il1i] : (ii1Il1i -= 32, [lIl11111[1] << ii1Il1i | lIl11111[0] >>> 32 - ii1Il1i, lIl11111[0] << ii1Il1i | lIl11111[1] >>> 32 - ii1Il1i]);
    }
    function Ii11liil(I1l1ilii, I1I1Ii1I) {
      return 0 === (I1I1Ii1I %= 64) ? I1l1ilii : 32 > I1I1Ii1I ? [I1l1ilii[0] << I1I1Ii1I | I1l1ilii[1] >>> 32 - I1I1Ii1I, I1l1ilii[1] << I1I1Ii1I] : [I1l1ilii[1] << I1I1Ii1I - 32, 0];
    }
    function l11lll1l(iil1II1, ll11i1iI) {
      return [iil1II1[0] ^ ll11i1iI[0], iil1II1[1] ^ ll11i1iI[1]];
    }
    function llIiilII(ii1Il1I) {
      return l11lll1l(ii1Il1I = illiiiII(ii1Il1I = l11lll1l(ii1Il1I = illiiiII(ii1Il1I = l11lll1l(ii1Il1I, [0, ii1Il1I[0] >>> 1]), [4283543511, 3981806797]), [0, ii1Il1I[0] >>> 1]), [3301882366, 444984403]), [0, ii1Il1I[0] >>> 1]);
    }
    return {
      "hash128": function (IlIilIli, IiIl111l) {
        var IlIilIl1 = IiIl111l || 0;
        IiIl111l = (IlIilIli = IlIilIli || "").length % 16;
        var li1I1I1I = IlIilIli.length - IiIl111l,
          iiiiI11l = [0, IlIilIl1];
        IlIilIl1 = [0, IlIilIl1];
        for (var ii1Il11, iilIII1l, ll11i1lI = [2277735313, 289559509], IiIl111i = [1291169091, 658871167], I1l1iliI = 0; I1l1iliI < li1I1I1I; I1l1iliI += 16) ii1Il11 = [255 & IlIilIli.charCodeAt(I1l1iliI + 4) | (255 & IlIilIli.charCodeAt(I1l1iliI + 5)) << 8 | (255 & IlIilIli.charCodeAt(I1l1iliI + 6)) << 16 | (255 & IlIilIli.charCodeAt(I1l1iliI + 7)) << 24, 255 & IlIilIli.charCodeAt(I1l1iliI) | (255 & IlIilIli.charCodeAt(I1l1iliI + 1)) << 8 | (255 & IlIilIli.charCodeAt(I1l1iliI + 2)) << 16 | (255 & IlIilIli.charCodeAt(I1l1iliI + 3)) << 24], iilIII1l = [255 & IlIilIli.charCodeAt(I1l1iliI + 12) | (255 & IlIilIli.charCodeAt(I1l1iliI + 13)) << 8 | (255 & IlIilIli.charCodeAt(I1l1iliI + 14)) << 16 | (255 & IlIilIli.charCodeAt(I1l1iliI + 15)) << 24, 255 & IlIilIli.charCodeAt(I1l1iliI + 8) | (255 & IlIilIli.charCodeAt(I1l1iliI + 9)) << 8 | (255 & IlIilIli.charCodeAt(I1l1iliI + 10)) << 16 | (255 & IlIilIli.charCodeAt(I1l1iliI + 11)) << 24], iiiiI11l = II1ilI1(illiiiII(iiiiI11l = II1ilI1(iiiiI11l = I1llII1(iiiiI11l = l11lll1l(iiiiI11l, ii1Il11 = illiiiII(ii1Il11 = I1llII1(ii1Il11 = illiiiII(ii1Il11, ll11i1lI), 31), IiIl111i)), 27), IlIilIl1), [0, 5]), [0, 1390208809]), IlIilIl1 = II1ilI1(illiiiII(IlIilIl1 = II1ilI1(IlIilIl1 = I1llII1(IlIilIl1 = l11lll1l(IlIilIl1, iilIII1l = illiiiII(iilIII1l = I1llII1(iilIII1l = illiiiII(iilIII1l, IiIl111i), 33), ll11i1lI)), 31), iiiiI11l), [0, 5]), [0, 944331445]);
        switch (ii1Il11 = [0, 0], iilIII1l = [0, 0], IiIl111l) {
          case 15:
            iilIII1l = l11lll1l(iilIII1l, Ii11liil([0, IlIilIli.charCodeAt(I1l1iliI + 14)], 48));
          case 14:
            iilIII1l = l11lll1l(iilIII1l, Ii11liil([0, IlIilIli.charCodeAt(I1l1iliI + 13)], 40));
          case 13:
            iilIII1l = l11lll1l(iilIII1l, Ii11liil([0, IlIilIli.charCodeAt(I1l1iliI + 12)], 32));
          case 12:
            iilIII1l = l11lll1l(iilIII1l, Ii11liil([0, IlIilIli.charCodeAt(I1l1iliI + 11)], 24));
          case 11:
            iilIII1l = l11lll1l(iilIII1l, Ii11liil([0, IlIilIli.charCodeAt(I1l1iliI + 10)], 16));
          case 10:
            iilIII1l = l11lll1l(iilIII1l, Ii11liil([0, IlIilIli.charCodeAt(I1l1iliI + 9)], 8));
          case 9:
            IlIilIl1 = l11lll1l(IlIilIl1, iilIII1l = illiiiII(iilIII1l = I1llII1(iilIII1l = illiiiII(iilIII1l = l11lll1l(iilIII1l, [0, IlIilIli.charCodeAt(I1l1iliI + 8)]), IiIl111i), 33), ll11i1lI));
          case 8:
            ii1Il11 = l11lll1l(ii1Il11, Ii11liil([0, IlIilIli.charCodeAt(I1l1iliI + 7)], 56));
          case 7:
            ii1Il11 = l11lll1l(ii1Il11, Ii11liil([0, IlIilIli.charCodeAt(I1l1iliI + 6)], 48));
          case 6:
            ii1Il11 = l11lll1l(ii1Il11, Ii11liil([0, IlIilIli.charCodeAt(I1l1iliI + 5)], 40));
          case 5:
            ii1Il11 = l11lll1l(ii1Il11, Ii11liil([0, IlIilIli.charCodeAt(I1l1iliI + 4)], 32));
          case 4:
            ii1Il11 = l11lll1l(ii1Il11, Ii11liil([0, IlIilIli.charCodeAt(I1l1iliI + 3)], 24));
          case 3:
            ii1Il11 = l11lll1l(ii1Il11, Ii11liil([0, IlIilIli.charCodeAt(I1l1iliI + 2)], 16));
          case 2:
            ii1Il11 = l11lll1l(ii1Il11, Ii11liil([0, IlIilIli.charCodeAt(I1l1iliI + 1)], 8));
          case 1:
            iiiiI11l = l11lll1l(iiiiI11l, ii1Il11 = illiiiII(ii1Il11 = I1llII1(ii1Il11 = illiiiII(ii1Il11 = l11lll1l(ii1Il11, [0, IlIilIli.charCodeAt(I1l1iliI)]), ll11i1lI), 31), IiIl111i));
        }
        return iiiiI11l = l11lll1l(iiiiI11l, [0, IlIilIli.length]), IlIilIl1 = II1ilI1(IlIilIl1 = l11lll1l(IlIilIl1, [0, IlIilIli.length]), iiiiI11l = II1ilI1(iiiiI11l, IlIilIl1)), iiiiI11l = llIiilII(iiiiI11l), IlIilIl1 = II1ilI1(IlIilIl1 = llIiilII(IlIilIl1), iiiiI11l = II1ilI1(iiiiI11l, IlIilIl1)), ("00000000" + (iiiiI11l[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (iiiiI11l[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (IlIilIl1[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (IlIilIl1[1] >>> 0).toString(16)).slice(-8);
      }
    };
  }();
  function I1ii11i(I1i1I1I1) {
    I1i1I1I1 = JSON.stringify(I1i1I1I1);
    I1i1I1I1 = encodeURIComponent(I1i1I1I1);
    var iiiIiIl1 = "",
      I1llI1lI = 0;
    do {
      var l11lliiI = I1i1I1I1.charCodeAt(I1llI1lI++),
        I1i1I1II = I1i1I1I1.charCodeAt(I1llI1lI++),
        iliIIilI = I1i1I1I1.charCodeAt(I1llI1lI++),
        iiiIiIlI = l11lliiI >> 2;
      l11lliiI = (3 & l11lliiI) << 4 | I1i1I1II >> 4;
      var iiI1iIl1 = (15 & I1i1I1II) << 2 | iliIIilI >> 6,
        l11llii1 = 63 & iliIIilI;
      isNaN(I1i1I1II) ? iiI1iIl1 = l11llii1 = 64 : isNaN(iliIIilI) && (l11llii1 = 64);
      iiiIiIl1 = iiiIiIl1 + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(iiiIiIlI) + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(l11lliiI) + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(iiI1iIl1) + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(l11llii1);
    } while (I1llI1lI < I1i1I1I1.length);
    return iiiIiIl1 + "/";
  }
  var lIlil11i = [$.UA.substring(0, 90), "zh-CN", "applewebkit_chrome", "605.1.15", "NA", "NA", 32, "896x414", -480, "sessionStorageKey", "localStorageKey", "indexedDbKey", "openDatabase", "NA", "iPhone", 10, "NA", "", null, null],
    Ii1Ii1I1 = I1ii11l.hash128(lIlil11i.join("~~~"), 31),
    iII1I1I = {
      "pin": "",
      "oid": "",
      "bizId": "jd-babelh5",
      "fc": "",
      "mode": "strict",
      "p": "s",
      "fp": Ii1Ii1I1,
      "ctype": 1,
      "v": "3.1.1.0",
      "f": "3",
      "o": "prodev.m.jd.com/mall/active/2Nmerir544C1FhDWKb1fkQ2DWC9L/index.html",
      "qs": "",
      "jsTk": "",
      "qi": ""
    },
    iIl1IIII = I1ii11i(iII1I1I),
    iIII1IIi = {},
    lIlil11i = new Date();
  iIII1IIi.ts = {};
  iIII1IIi.ts.deviceTime = lIlil11i.getTime();
  iIII1IIi.ca = {
    "tdHash": null
  };
  iIII1IIi.m = {
    "compatMode": "CSS1Compat"
  };
  iIII1IIi.fo = ["Arial Black", "Bauhaus 93", "Chalkduster", "GungSeo", "Hiragino Sans GB", "Impact", "Menlo", "Papyrus", "Rockwell"];
  iIII1IIi.n = {
    "vendorSub": "",
    "productSub": "20030107",
    "vendor": "Apple Computer, Inc.",
    "maxTouchPoints": 1,
    "pdfViewerEnabled": !1,
    "hardwareConcurrency": 10,
    "cookieEnabled": !0,
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "appVersion": /\/(.+)/g.exec($.UA) && /\/(.+)/g.exec($.UA)[1] || $.UA,
    "platform": "iPhone",
    "product": "Gecko",
    "userAgent": $.UA,
    "language": "zh-CN",
    "onLine": !0,
    "webdriver": !1,
    "javaEnabled": !1,
    "deviceMemory": 8,
    "enumerationOrder": ["vendorSub", "productSub", "vendor", "maxTouchPoints", "scheduling", "userActivation", "doNotTrack", "geolocation", "connection", "plugins", "mimeTypes", "pdfViewerEnabled", "webkitTemporaryStorage", "webkitPersistentStorage", "hardwareConcurrency", "cookieEnabled", "appCodeName", "appName", "appVersion", "platform", "product", "userAgent", "language", "languages", "onLine", "webdriver", "getGamepads", "javaEnabled", "sendBeacon", "vibrate", "bluetooth", "clipboard", "credentials", "keyboard", "managed", "mediaDevices", "storage", "serviceWorker", "virtualKeyboard", "wakeLock", "deviceMemory", "ink", "hid", "locks", "mediaCapabilities", "mediaSession", "permissions", "presentation", "serial", "gpu", "usb", "windowControlsOverlay", "xr", "userAgentData", "clearAppBadge", "getBattery", "getUserMedia", "requestMIDIAccess", "requestMediaKeySystemAccess", "setAppBadge", "webkitGetUserMedia", "getInstalledRelatedApps", "registerProtocolHandler", "unregisterProtocolHandler"]
  };
  iIII1IIi.p = [];
  iIII1IIi.w = {
    "devicePixelRatio": 1,
    "screenTop": 0,
    "screenLeft": 0
  };
  iIII1IIi.s = {
    "availHeight": 896,
    "availWidth": 414,
    "colorDepth": 24,
    "height": 896,
    "width": 414,
    "pixelDepth": 24
  };
  iIII1IIi.sc = {
    "ActiveBorder": "rgb(118, 118, 118)",
    "ActiveCaption": "rgb(0, 0, 0)",
    "AppWorkspace": "rgb(255, 255, 255)",
    "Background": "rgb(255, 255, 255)",
    "ButtonFace": "rgb(239, 239, 239)",
    "ButtonHighlight": "rgb(239, 239, 239)",
    "ButtonShadow": "rgb(239, 239, 239)",
    "ButtonText": "rgb(0, 0, 0)",
    "CaptionText": "rgb(0, 0, 0)",
    "GrayText": "rgb(128, 128, 128)",
    "Highlight": "rgb(181, 213, 255)",
    "HighlightText": "rgb(0, 0, 0)",
    "InactiveBorder": "rgb(118, 118, 118)",
    "InactiveCaption": "rgb(255, 255, 255)",
    "InactiveCaptionText": "rgb(128, 128, 128)",
    "InfoBackground": "rgb(255, 255, 255)",
    "InfoText": "rgb(0, 0, 0)",
    "Menu": "rgb(255, 255, 255)",
    "MenuText": "rgb(0, 0, 0)",
    "Scrollbar": "rgb(255, 255, 255)",
    "ThreeDDarkShadow": "rgb(118, 118, 118)",
    "ThreeDFace": "rgb(239, 239, 239)",
    "ThreeDHighlight": "rgb(118, 118, 118)",
    "ThreeDLightShadow": "rgb(118, 118, 118)",
    "ThreeDShadow": "rgb(118, 118, 118)",
    "Window": "rgb(255, 255, 255)",
    "WindowFrame": "rgb(118, 118, 118)",
    "WindowText": "rgb(0, 0, 0)"
  };
  iIII1IIi.ss = {
    "cookie": !0,
    "localStorage": !0,
    "sessionStorage": !0,
    "globalStorage": !1,
    "indexedDB": !0
  };
  iIII1IIi.tz = -480;
  iIII1IIi.lil = "";
  iIII1IIi.wil = "";
  iIII1IIi.ts.deviceEndTime = new Date().getTime();
  var ii1i1l1l = I1ii11i(iIII1IIi);
  let l11II11I = {
    "url": "https://gia.jd.com/jsTk.do?a=" + iIl1IIII,
    "body": "d=" + ii1i1l1l,
    "headers": {
      "Accept": "*/*",
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      "Origin": "https://pro.m.jd.com",
      "Referer": "https://pro.m.jd.com/",
      "User-Agent": $.UA
    },
    "timeout": 10000
  };
  return l11II11I = Iii1Iil(l11II11I), new Promise(IlIilIil => {
    var lIlIIlli = $;
    if (l1l1i1ll && $.proxyArr.type && $.proxyArr.type == "socks") lIlIIlli = l1l1i1ll;
    lIlIIlli.post(l11II11I, async (iiiIiIil, I1i1I1Ii, iliIIili) => {
      try {
        if (iiiIiIil) console.log(iiiIiIil);else {
          let iiI1iIil = $.toObj(iliIIili, iliIIili);
          iiI1iIil && typeof iiI1iIil === "object" && iiI1iIil.code == 0 && iiI1iIil.data && iiI1iIil.data.token ? $.eid_token = iiI1iIil.data.token : console.log(iliIIili);
        }
      } catch (i11ilIII) {
        $.logErr(i11ilIII, I1i1I1Ii);
      } finally {
        IlIilIil();
      }
    });
  });
}
function iiI1Ill1(IiIl1111, I1I1Ii1, IlIilIiI = "") {
  class iiliilI1 {
    constructor(il1II1i = "", iIII1Ill = "", iii111ll = "") {
      this.appId = il1II1i;
      this.v = "3.1";
      ["c10dc"].includes(this.appId) && (this.v = "4.1");
      iIII1Ill ? this.ua = iIII1Ill : this.ua = this.__genUA();
      this.fp = iii111ll ? iii111ll : this.__genFp();
    }
    ["__format"](liiIilll, iIlliIll) {
      if (!liiIilll) liiIilll = "yyyy-MM-dd";
      var IlI11Ili;
      !iIlliIll ? IlI11Ili = Date.now() : IlI11Ili = new Date(iIlliIll);
      var iiIl1IiI = new Date(IlI11Ili),
        lIli1l11 = liiIilll,
        llIi1Iii = {
          "M+": iiIl1IiI.getMonth() + 1,
          "d+": iiIl1IiI.getDate(),
          "D+": iiIl1IiI.getDate(),
          "h+": iiIl1IiI.getHours(),
          "H+": iiIl1IiI.getHours(),
          "m+": iiIl1IiI.getMinutes(),
          "s+": iiIl1IiI.getSeconds(),
          "w+": iiIl1IiI.getDay(),
          "q+": Math.floor((iiIl1IiI.getMonth() + 3) / 3),
          "S+": iiIl1IiI.getMilliseconds()
        };
      return /(y+)/i.test(lIli1l11) && (lIli1l11 = lIli1l11.replace(RegExp.$1, "".concat(iiIl1IiI.getFullYear()).substr(4 - RegExp.$1.length))), Object.keys(llIi1Iii).forEach(Il1Iilii => {
        if (new RegExp("(".concat(Il1Iilii, ")")).test(lIli1l11)) {
          var IlI11Ii1 = "S+" === Il1Iilii ? "000" : "00";
          lIli1l11 = lIli1l11.replace(RegExp.$1, 1 == RegExp.$1.length ? llIi1Iii[Il1Iilii] : "".concat(IlI11Ii1).concat(llIi1Iii[Il1Iilii]).substr("".concat(llIi1Iii[Il1Iilii]).length));
        }
      }), lIli1l11;
    }
    ["__genUA"]() {
      this.uid = $.CryptoJS.SHA1($.UserName + "red").toString();
      let llIi1Il1 = this.uid,
        iii111l1 = ["14.3"],
        liiIillI = iii111l1[Math.floor(Math.random() * iii111l1.length)],
        I1i1I1iI = ["12,1"],
        II11Ii1 = I1i1I1iI[Math.floor(Math.random() * I1i1I1iI.length)],
        l1iiI1i1 = ["wifi"],
        Il1IiliI = l1iiI1i1[Math.floor(Math.random() * l1iiI1i1.length)],
        liiIill1 = liiIillI.replace(/\./g, "_"),
        lIli1l1I = [];
      lIli1l1I = [["10.1.4", "167814"]];
      let IIlI11I = Math.floor(Math.random() * lIli1l1I.length),
        lIIiili = lIli1l1I[IIlI11I] ? lIli1l1I[IIlI11I] : lIli1l1I[0];
      II11Ii1 = "iPhone" + II11Ii1;
      let lIIiill = "";
      return lIIiill = "jdapp;iPhone;" + lIIiili[0] + ";" + liiIillI + ";" + llIi1Il1 + ";network/" + Il1IiliI + ";model/" + II11Ii1 + ";addressid/;appBuild/" + lIIiili[1] + ";jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS " + liiIill1 + " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1", lIIiill;
    }
    ["__genFp"]() {
      function iIII1Iii(IIII1111, l1iiI1ll) {
        var l1iiI1li = [],
          IiIIlIiI = IIII1111.length,
          IIII111I = IIII1111.split(""),
          iII1II1 = "";
        for (; iII1II1 = IIII111I.shift();) {
          if (Math.random() * IiIIlIiI < l1iiI1ll) {
            l1iiI1li.push(iII1II1);
            if (--l1iiI1ll == 0) break;
          }
          IiIIlIiI--;
        }
        for (var iil1i1II = "", lilIIl1 = 0; lilIIl1 < l1iiI1li.length; lilIIl1++) {
          var l1liillI = Math.random() * (l1iiI1li.length - lilIIl1) | 0;
          iil1i1II += l1iiI1li[l1liillI];
          l1iiI1li[l1liillI] = l1iiI1li[l1iiI1li.length - lilIIl1 - 1];
        }
        return iil1i1II;
      }
      function l11llili(iIl1II11, l1iiI1lI) {
        for (let Il1Iilll of l1iiI1lI.slice()) iIl1II11 = iIl1II11.replace(Il1Iilll, "");
        return iIl1II11;
      }
      if (this.v == "4.1") {
        var IlI11Iil = "uct6d0jhqw";
        var i11lI1I1 = iIII1Iii(IlI11Iil, 6);
        var IlIlI11l = Math.random() * 10 | 0;
        var IilI1lII = l11llili(IlI11Iil, i11lI1I1);
        var IlI11Iii = {};
        IlI11Iii.size = IlIlI11l;
        IlI11Iii.customDict = IilI1lII;
        var l11llill = this.getRandomIDPro(IlI11Iii) + i11lI1I1 + this.getRandomIDPro({
          "size": 10 - IlIlI11l - 1,
          "customDict": IilI1lII
        }) + IlIlI11l;
        var IilI1lI1 = l11llill.split("");
        var iIII1Iil = IilI1lI1;
        var l1iiI1l1;
        iIII1Iil = IilI1lI1.slice(0, 14);
        l1iiI1l1 = IilI1lI1.slice(14);
        var iii111i1 = [];
        for (; iIII1Iil.length > 0;) {
          iii111i1.push((35 - parseInt(iIII1Iil.pop(), 36)).toString(36));
        }
        iii111i1 = iii111i1.concat(l1iiI1l1);
        var Il1IillI = iii111i1.join("");
        return Il1IillI;
      } else {
        var I1iiIiII = "0123456789",
          liiIili1 = iIII1Iii(I1iiIiII, 3),
          IlIlI11i = Math.random() * 10 | 0,
          Iii1liI1 = l11llili(I1iiIiII, liiIili1),
          IIlI11i = {};
        IIlI11i.size = IlIlI11i;
        IIlI11i.customDict = Iii1liI1;
        var lIIiilI = this.getRandomIDPro(IIlI11i) + liiIili1 + this.getRandomIDPro({
            "size": 14 - (IlIlI11i + 3) + 1,
            "customDict": Iii1liI1
          }) + IlIlI11i,
          IIlI11l = lIIiilI.split(""),
          llIi1Ili = [];
        for (; IIlI11l.length > 0;) llIi1Ili.push(9 - parseInt(IIlI11l.pop()));
        var iIII1IiI = llIi1Ili.join("");
        return iIII1IiI;
      }
    }
    ["getRandomIDPro"]() {
      var iII1III,
        iIl1II1I,
        lIIiiiI = void 0 === (lIi1ilI1 = (iIl1II1I = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).size) ? 10 : lIi1ilI1,
        lIi1ilI1 = void 0 === (lIi1ilI1 = iIl1II1I.dictType) ? "number" : lIi1ilI1,
        l1Ili11i = "";
      if ((iIl1II1I = iIl1II1I.customDict) && "string" == typeof iIl1II1I) iII1III = iIl1II1I;else switch (lIi1ilI1) {
        case "alphabet":
          iII1III = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "max":
          iII1III = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
          break;
        case "number":
        default:
          iII1III = "0123456789";
      }
      for (; lIIiiiI--;) l1Ili11i += iII1III[Math.random() * iII1III.length | 0];
      return l1Ili11i;
    }
    ["Encrypt"](liiI1I1I, i1ililI) {
      let I1IIIi1I = $.CryptoJS.AES.encrypt(liiI1I1I, $.CryptoJS.enc.Utf8.parse(i1ililI.key), {
        "iv": $.CryptoJS.enc.Utf8.parse(i1ililI.iv),
        "mode": $.CryptoJS.mode.CBC,
        "padding": $.CryptoJS.pad.Pkcs7
      });
      return I1IIIi1I.ciphertext.toString();
    }
    async ["__genAlgo"]() {
      let i1ilill = {
          "wc": 0,
          "wd": 0,
          "l": "zh-cn",
          "ls": "zh-cn",
          "ml": 0,
          "pl": 0,
          "av": /\/(.+)/g.exec(this.ua) && /\/(.+)/g.exec(this.ua)[1] || this.ua,
          "ua": this.ua,
          "sua": /\((i[^;]+;( U;)? CPU.+Mac OS X)/g.exec(this.ua) && /\((i[^;]+;( U;)? CPU.+Mac OS X)/g.exec(this.ua)[1] || /\((M[^;]+;( U;)? Intel.+Mac OS X [0-9_]+)/g.exec(this.ua) && /\((M[^;]+;( U;)? Intel.+Mac OS X [0-9_]+)/g.exec(this.ua)[1] || "",
          "pp": {},
          "pp1": "",
          "pm": {
            "ps": "prompt",
            "np": "default"
          },
          "w": 414,
          "h": 896,
          "ow": 414,
          "oh": 896,
          "url": "https://pro.m.jd.com/mall/active/2Nmerir544C1FhDWKb1fkQ2DWC9L/index.html?unionActId=31168&d=&s=&cu=true&utm_source=kong&utm_medium=jingfen",
          "og": "https://pro.m.jd.com",
          "pr": 3,
          "re": "https://u.jd.com/",
          "ai": this.appId,
          "fp": this.fp
        },
        Il1I1I1I = JSON.stringify(i1ilill, null, 2),
        II1iIIIi = this.Encrypt(Il1I1I1I, {
          "key": "wm0!@w-s#ll1flo(",
          "iv": "0102030405060708"
        });
      var iI11l1I1 = {};
      return this.v == "4.1" ? iI11l1I1 = {
        "appId": this.appId.toString(),
        "expandParams": II1iIIIi || "",
        "fp": this.fp,
        "fv": "v1.6.1",
        "platform": "web",
        "timestamp": Date.now(),
        "version": this.v
      } : iI11l1I1 = {
        "version": this.v,
        "fp": this.fp,
        "appId": this.appId.toString(),
        "timestamp": Date.now(),
        "platform": "web",
        "expandParams": II1iIIIi || ""
      }, new Promise(i1ilili => {
        let I1IIIi1i = {
          "url": "https://cactus.jd.com/request_algo?g_ty=ajax",
          "body": JSON.stringify(iI11l1I1),
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Accept-Language": "zh-cn",
            "Origin": "https://passport.jd.com",
            "Referer": "https://passport.jd.com/",
            "user-agent": this.ua
          },
          "timeout": 30000
        };
        $.post(I1IIIi1i, async (iIil1III, II1iIII1, l1li1I1I) => {
          try {
            if (iIil1III) console.log(iIil1III);else {
              let I11IIi1l = $.toObj(l1li1I1I, l1li1I1I);
              I11IIi1l && typeof I11IIi1l === "object" && I11IIi1l.data && I11IIi1l.data.result && I11IIi1l.data.result.tk && (this.tk = I11IIi1l.data.result.tk, this.genKey = new Function("return " + I11IIi1l.data.result.algo)());
            }
          } catch (iIil1II1) {
            $.logErr(iIil1II1, II1iIII1);
          } finally {
            i1ilili();
          }
        });
      });
    }
    ["__genH5st"](II1iIIII = {}, Il1I1I1l = "") {
      let IlIlI1il = undefined,
        iiii1liI = {
          "ua": this.ua,
          "uid": this.uid
        };
      if (this.tk && this.genKey) {
        this.time = Date.now();
        this.timestamp = this.__format("yyyyMMddhhmmssSSS", this.time);
        let lilI11ii = this.genKey(this.tk, this.fp.toString(), this.timestamp.toString(), this.appId.toString(), $.CryptoJS).toString();
        var iI11l1Ii = {},
          liiI1I1l = null;
        liiI1I1l = Object.keys(II1iIIII).sort().map(function (IlIlI1ii) {
          var I1lilIli = {};
          return I1lilIli.key = IlIlI1ii, I1lilIli.value = II1iIIII[IlIlI1ii], I1lilIli;
        }).filter(function (iiii1li1) {
          var l1Iilll1 = iiii1li1.value,
            I1i1I11i = "number" == typeof l1Iilll1 && !isNaN(l1Iilll1) || "string" == typeof l1Iilll1 || "boolean" == typeof l1Iilll1 || "body" == iiii1li1.key;
          if (I1i1I11i) {
            if ("body" == iiii1li1.key && typeof iiii1li1.value == "object") iiii1li1.value = JSON.stringify(iiii1li1.value);
            iI11l1Ii[iiii1li1.key] = iiii1li1.value;
          }
          return I1i1I11i;
        });
        II1iIIII = iI11l1Ii;
        let I1I1llii = "";
        I1I1llii = Object.keys(II1iIIII).map(function (I1i1I11l) {
          return I1i1I11l + ":" + (I1i1I11l == "body" && II1iIIII[I1i1I11l].length !== 64 && II1iIIII[I1i1I11l].slice(0, 1) == "{" ? $.CryptoJS.SHA256(II1iIIII[I1i1I11l]).toString($.CryptoJS.enc.Hex) : II1iIIII[I1i1I11l]);
        }).join("&");
        this.v == "4.1" ? I1I1llii = $.CryptoJS.MD5(lilI11ii + I1I1llii + lilI11ii).toString($.CryptoJS.enc.Hex) : I1I1llii = $.CryptoJS.HmacSHA256(I1I1llii, lilI11ii).toString($.CryptoJS.enc.Hex);
        let lill1i1I = {
          "sua": /\((i[^;]+;( U;)? CPU.+Mac OS X)/g.exec(this.ua) && /\((i[^;]+;( U;)? CPU.+Mac OS X)/g.exec(this.ua)[1] || /\((M[^;]+;( U;)? Intel.+Mac OS X [0-9_]+)/g.exec(this.ua) && /\((M[^;]+;( U;)? Intel.+Mac OS X [0-9_]+)/g.exec(this.ua)[1] || "",
          "pp": {},
          "extend": {
            "wd": 0,
            "l": 0,
            "ls": 0,
            "wk": 0
          },
          "random": this.getRandomIDPro({
            "size": 10,
            "dictType": "max",
            "customDict": null
          }),
          "referer": "",
          "v": "v_lite_f_0.1.6",
          "fp": this.fp
        };
        if (Il1I1I1l) {}
        let iIIii11l = JSON.stringify(lill1i1I, null, 2);
        var ii1iI11I = {
          "key": "wm0!@w_s#ll1flo(",
          "iv": "0102030405060708"
        };
        this.v == "4.1" && (lill1i1I.v = "v1.6.1", ii1iI11I.key = "HL4|FW#Chc3#q?0)");
        let iI1iliiI = this.Encrypt(iIIii11l, ii1iI11I);
        IlIlI1il = [this.timestamp, this.fp, this.appId.toString(), this.tk, I1I1llii, this.v, this.time.toString(), iI1iliiI].join(";");
        iiii1liI.t = II1iIIII.t;
      }
      return iiii1liI.h5st = IlIlI1il, iiii1liI;
    }
  }
  return new iiliilI1(IiIl1111, I1I1Ii1, IlIilIiI);
}
function il1li11i() {
  class II11I1i {
    constructor() {
      this.UVCookie = "";
      this.ltr = 0;
      this.mr = [1, 0];
      this.mbaFlag = true;
      this.document = {
        "cookie": "",
        "cookies": "__jdc=123;",
        "domain": "prodev.m.jd.com",
        "referrer": "https://u.jd.com/",
        "location": {
          "href": "https://pro.m.jd.com/mall/active/2Nmerir544C1FhDWKb1fkQ2DWC9L/index.html",
          "hrefs": "https://pro.m.jd.com/mall/active/2Nmerir544C1FhDWKb1fkQ2DWC9L/index.html"
        }
      };
      this.navigator = {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
        "userAgents": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
      };
      this.window = {};
    }
    ["getUVCookie"](i11l1lli = "", ll1IIIlI = "", IIilIiI = "", IlIlI1lI = "") {
      try {
        this.document.location.href = this.document.location.hrefs + "";
        this.document.cookie = this.document.cookies + "";
        if (IIilIiI) this.document.location.href = IIilIiI;
        if (IlIlI1lI) this.document.cookie = IlIlI1lI;
        this.UVCookie = "";
        this.navigator.userAgent = this.navigator.userAgents + "";
        this.ltr = 1011 + Math.round(31 * Math.random());
        if (this.mbaFlag) {
          this.mr[1]++;
          this.mr[1] >= 314 && (this.mr[1] = Math.round(31 * Math.random()));
          !ll1IIIlI && (ll1IIIlI = $.CryptoJS.SHA1("").toString());
          let IIlI1Il = 0;
          while (true) {
            this.mr[0] = parseInt(ll1IIIlI.match(/\d/g)[IIlI1Il]);
            IIlI1Il++;
            if (this.mr[0] > 0 || IIlI1Il >= ll1IIIlI.match(/\d/g).length) break;
          }
          this.mr[0] += Math.round((new Date().getTime() - new Date("2023-06-02").getTime()) / 86400000);
        }
        if (i11l1lli) this.navigator.userAgent = i11l1lli;
        return this.lr = {
          "ckJda": "__jda",
          "ckJdb": "__jdb",
          "ckJdv": "__jdv",
          "ckJdc": "__jdc",
          "refUrl": "https://u.jd.com/"
        }, this.q(), this.s(ll1IIIlI), this.UVCookie;
      } catch (illIlll) {
        console.log(illIlll);
      }
    }
    ["s"](illIlli = "") {
      var iiii1llI,
        IlIlI1l1,
        lIi1il1l,
        lIi1il1i,
        iiii1ll1 = (this.getCookie(this.lr.ckJda) || "").split("."),
        ll1IIIl1 = (this.getCookie(this.lr.ckJdb) || "").split("."),
        IIilIi1 = (this.getCookie(this.lr.ckJdv) || "").split("|"),
        illIlIil = this.getCookie(this.lr.ckJdc) || "",
        IIlillIi = parseInt((new Date().getTime() - this.ltr) / 1000),
        li1Iili1 = 0,
        I1l11I1i = 1,
        iI11l11l = "direct",
        I1ili1iI = "-",
        lIiIiliI = "none",
        l1I11l1I = "-";
      if (iiii1ll1.length > 3) for (var I1iiIii1 = 2; I1iiIii1 < 5 && I1iiIii1 < iiii1ll1.length; I1iiIii1++) {
        var li1IiliI = iiii1ll1[I1iiIii1];
        li1IiliI.length > 10 && (iiii1ll1[I1iiIii1] = li1IiliI.substr(0, 10));
      }
      iiii1ll1.length > 5 ? (lIi1il1l = iiii1ll1[0], lIi1il1i = iiii1ll1[1], iiii1llI = parseInt(iiii1ll1[2], 10), IlIlI1l1 = parseInt(iiii1ll1[3], 10), IIlillIi = parseInt(iiii1ll1[4], 10), I1l11I1i = parseInt(iiii1ll1[5], 10) || I1l11I1i) : (lIi1il1i = this.genUuid(), iiii1llI = IIlillIi, IlIlI1l1 = IIlillIi);
      this.lr.uuid = lIi1il1i;
      ll1IIIl1.length > 3 && (lIi1il1l || (lIi1il1l = ll1IIIl1[0]), li1Iili1 = parseInt(ll1IIIl1[1], 10) || 0);
      IIilIi1.length > 4 && (lIi1il1l || (lIi1il1l = IIilIi1[0]), iI11l11l = IIilIi1[1], I1ili1iI = IIilIi1[2], lIiIiliI = IIilIi1[3], l1I11l1I = IIilIi1[4]);
      illIlIil && "" !== illIlIil && (lIi1il1l || (lIi1il1l = illIlIil));
      var lIl111II,
        IIilIl1 = [],
        iIi1iI11 = ll1IIIl1.length < 4,
        ll1IIIii = this.getParameter("utm_source"),
        ll1IIIil = false;
      if (ll1IIIii) {
        var I1ili1il = this.getParameter("utm_campaign"),
          ll1IIIi1 = this.getParameter("utm_medium"),
          l1I11l11 = this.getParameter("utm_term");
        IIilIl1.push(ll1IIIii || iI11l11l);
        IIilIl1.push(I1ili1il || I1ili1iI);
        IIilIl1.push(ll1IIIi1 || lIiIiliI);
        IIilIl1.push(l1I11l11 || l1I11l1I);
        l1I11l1I = IIilIl1[3];
        ll1IIIil = !0;
      } else {
        var I1ili1ii,
          lIiIilii = this.lr.refUrl && this.lr.refUrl.split("/")[2],
          lIiIilil = false;
        if (lIiIilii && lIiIilii.indexOf(this.lr.ckDomain) < 0) {
          for (I1ili1ii = this.lr.seo, I1iiIii1 = 0; I1iiIii1 < I1ili1ii.length; I1iiIii1++) {
            var lIl111I1 = I1ili1ii[I1iiIii1].split(":");
            if (lIiIilii.indexOf(lIl111I1[0].toLowerCase()) > -1 && this.lr.refUrl.indexOf((lIl111I1[1] + "=").toLowerCase()) > -1) {
              var IlI11IIi = this.getParameter(lIl111I1[1], this.lr.refUrl);
              /[^\x00-\xff]/.test(IlI11IIi) && (IlI11IIi = encodeURIComponent(IlI11IIi));
              IIilIl1.push(lIl111I1[0]);
              IIilIl1.push("-");
              IIilIl1.push("organic");
              IIilIl1.push(IlI11IIi || "not set");
              l1I11l1I = IIilIl1[3];
              lIiIilil = !0;
              break;
            }
          }
          lIiIilil || (lIiIilii.indexOf("zol.com.cn") > -1 ? (IIilIl1.push("zol.com.cn"), IIilIl1.push("-"), IIilIl1.push("cpc"), IIilIl1.push("not set")) : (IIilIl1.push(lIiIilii), IIilIl1.push("-"), IIilIl1.push("referral"), IIilIl1.push("-")));
        }
      }
      lIl111II = IIilIl1.length > 0 && (IIilIl1[0] !== iI11l11l || IIilIl1[1] !== I1ili1iI || IIilIl1[2] !== lIiIiliI) && "referral" !== IIilIl1[2];
      iIi1iI11 || !iIi1iI11 && lIl111II ? (iI11l11l = IIilIl1[0] || iI11l11l, I1ili1iI = IIilIl1[1] || I1ili1iI, lIiIiliI = IIilIl1[2] || lIiIiliI, l1I11l1I = IIilIl1[3] || l1I11l1I, iiii1ll1.length > 5 ? (iiii1llI = parseInt(iiii1ll1[2], 10), IlIlI1l1 = parseInt(iiii1ll1[4], 10), IIlillIi = parseInt((new Date().getTime() - this.ltr) / 1000), I1l11I1i++, li1Iili1 = 1) : (I1l11I1i = 1, li1Iili1 = 1)) : li1Iili1++;
      var iIi1iI1I = this.getPageParamFromSdk();
      if (iIi1iI1I && iIi1iI1I.vts) {
        var IIilIii = 1 * iIi1iI1I.vts,
          IlI11IIl = 1 * iIi1iI1I.seq;
        (IIilIii > I1l11I1i || IIilIii === I1l11I1i && IlI11IIl >= li1Iili1) && (I1l11I1i = IIilIii, li1Iili1 = IlI11IIl + 1);
      }
      if (lIi1il1l || (lIi1il1l = this.genHash(this.lr.ckDomain)), this.setCookie(this.lr.ckJda, [lIi1il1l, lIi1il1i, iiii1llI, IlIlI1l1, IIlillIi, I1l11I1i || 1].join("."), this.lr.ckDomain, this.lr.ckJdaExp), this.setCookie(this.lr.ckJdb, [lIi1il1l, li1Iili1, lIi1il1i + "|" + I1l11I1i, IIlillIi].join("."), this.lr.ckDomain, this.lr.ckJdbExp), ll1IIIil || lIl111II || IIilIi1.length < 5) {
        var I1iiIiiI = [lIi1il1l, iI11l11l || "direct", I1ili1iI || "-", lIiIiliI || "none", l1I11l1I || "-", new Date().getTime() - this.ltr].join("|");
        this.setJdv(I1iiIiiI = encodeURIComponent(I1iiIiiI), lIi1il1l);
      }
      this.setCookie(this.lr.ckJdc, lIi1il1l, this.lr.ckDomain);
      if (this.mbaFlag) {
        this.setCookie("shshshfpa", this.shshshfpa(), this.lr.ckDomain);
        this.setCookie("mba_sid", this.mr.join("."), this.lr.ckDomain);
        this.setCookie("mba_muid", [lIi1il1i, this.mr[0], new Date().getTime()].join("."), this.lr.ckDomain);
        this.setCookie("pre_seq", Math.round(5 * Math.random()) * 2 + 1, this.lr.ckDomain);
        var li1Iili1 = 0;
        var li1Iilil = "";
        if (illIlli) {
          while (true) {
            li1Iilil += illIlli.match(/\d/g)[li1Iili1];
            li1Iili1++;
            if (li1Iilil.split("").length >= 2 || li1Iili1 >= illIlli.match(/\d/g).length) break;
          }
          this.setCookie("pre_session", illIlli + "|" + (parseInt(this.mr[0]) + parseInt(li1Iilil)), this.lr.ckDomain);
        }
      }
    }
    ["shshshfpa"]() {
      var IIl11iii = "";
      for (var liiIilIi = 1; liiIilIi <= 32; liiIilIi++) {
        var l11I1lII = Math.floor(Math.random() * 16).toString(16);
        IIl11iii += l11I1lII;
        if (liiIilIi == 8 || liiIilIi == 12 || liiIilIi == 16 || liiIilIi == 20) IIl11iii += "-";
      }
      var liiIilIl = Date.parse(new Date());
      return liiIilIl = liiIilIl / 1000, IIl11iii += "-" + liiIilIl, IIl11iii;
    }
    ["q"]() {
      this.lr.rpDomain = this.lr.rpDomain || "uranus.jd.com";
      this.lr.logUrl = "//" + this.lr.rpDomain + "/log/m";
      this.lr.logType = {
        "pv": "1",
        "pf": "2",
        "cl": "3",
        "od": "4",
        "pd": "5",
        "hm": "6",
        "magic": "000001"
      };
      this.lr.useTmpCookie ? (this.lr.ckJda = "__tra", this.lr.ckJdb = "__trb", this.lr.ckJdc = "__trc", this.lr.ckJdu = "__tru") : (this.lr.ckJda = "__jda", this.lr.ckJdb = "__jdb", this.lr.ckJdc = "__jdc", this.lr.ckJdu = "__jdu");
      this.lr.ckJdv = "__jdv";
      this.lr.ckWxAppCk = "__jdwxapp";
      this.lr.ckRefCls = "__jd_ref_cls";
      this.lr.ckJdaExp = 15552000000;
      this.lr.ckJdbExp = 1800000;
      this.lr.ckJduExp = 15552000000;
      this.lr.ckJdvExp = 1296000000;
      this.lr.ckJdvEmbeddedExp = 86400000;
      this.lr.ckWxAppCkExp = 15552000000;
      this.lr.mtSubsiteExp = 31536000000;
      this.lr.ckDomain = (this.document.domain.match(/[^.]+\.(com.cn|net.cn|org.cn|gov.cn|edu.cn)$/) || [""])[0] || this.document.domain.replace(/.*?([^.]+\.[^.]+)$/, "$1");
      this.lr.title = this.document.title;
      this.lr.refUrl = this.document.referrer;
      this.lr.seo = ["i.easou.com:q", "m.baidu.com:word", "m.sm.cn:q", "m.so.com:q", "wap.sogou.com:keyword", "m.sogou.com:keyword", "wap.sogo.com:keyword", "m.sogo.com:keyword", "page.roboo.com:q", "ask.com:q", "baidu:word", "baidu:wd", "bing:q", "easou:q", "google:q", "roboo:word", "roboo:q", "sm.cn:q", "so.com:q", "sogou:keyword", "sogou:query", "sogo.com:keyword", "sogo.com:query", "yahoo:p", "yandex:text", "yicha:key"];
    }
    ["setCookie"](iIIllI11, iI111i1l, iI111i1i, I1iiIili) {
      if (iIIllI11) {
        var illiI1I = "";
        if (I1iiIili) {
          var lIli1ili = new Date();
          lIli1ili.setTime(lIli1ili.getTime() - this.ltr + I1iiIili);
          illiI1I = ";expires=" + lIli1ili.toGMTString();
        }
        this.UVCookie += iIIllI11 + "=" + iI111i1l + "; ";
      }
    }
    ["setJdv"](iI11l111, lIli1iii, lIli1iil) {
      var l1iiI1Ii = "";
      l1iiI1Ii = this.isPrey(10) && (!iI11l111 || iI11l111.length > 400) ? lIli1iii + "|direct|-|none|-|" + (new Date().getTime() - this.ltr) : iI11l111;
      var lIIil1I = lIli1iil || this.isEmbedded() ? this.lr.ckJdvEmbeddedExp : this.lr.ckJdvExp;
      this.setCookie(this.lr.ckJdv || "__jdv", l1iiI1Ii, this.lr.ckDomain, lIIil1I);
    }
    ["getCookie"](IIl11iiI, IlI11III) {
      var II11II1 = this.document.cookie.match(new RegExp("(^| )" + IIl11iiI + "=([^;]*)(;|$)"));
      return null !== II11II1 ? IlI11III ? II11II1[2] : this.urlDecode(II11II1[2]) : "";
    }
    ["genUuid"]() {
      return new Date().getTime() - this.ltr + "" + parseInt(2147483647 * Math.random());
    }
    ["getParameter"](iiliil1l, iiliil1i) {
      var l1iiI1Il = iiliil1i || this.document.location.href,
        I1iiIiii = new RegExp("(?:^|&|[?]|[/])" + iiliil1l + "=([^&]*)").exec(l1iiI1Il);
      return I1iiIiii ? this.urlDecode(I1iiIiii[1]) : null;
    }
    ["urlDecode"](IIl11ii1) {
      try {
        return decodeURIComponent(IIl11ii1);
      } catch (iI11l11I) {
        return IIl11ii1;
      }
    }
    ["genHash"](lIlIIliI) {
      var lIIil11,
        lIli1il1 = 1,
        II11III = 0;
      if (lIlIIliI) for (lIli1il1 = 0, lIIil11 = lIlIIliI.length - 1; lIIil11 >= 0; lIIil11--) {
        lIli1il1 = 0 !== (II11III = 266338304 & (lIli1il1 = (lIli1il1 << 6 & 268435455) + (II11III = lIlIIliI.charCodeAt(lIIil11)) + (II11III << 14))) ? lIli1il1 ^ II11III >> 21 : lIli1il1;
      }
      return lIli1il1;
    }
    ["isPrey"](l1iiI1II) {
      if (l1iiI1II >= 100) return !0;
      var l1I11l1i = this.lr.uuid,
        I1ili1i1 = l1I11l1i.substr(l1I11l1i.length - 2);
      return !!I1ili1i1 && 1 * I1ili1i1 < l1iiI1II;
    }
    ["isEmbedded"]() {
      var I1iiIil1 = this.navigator.userAgent || "";
      return /^(jdapp|jdltapp|jdpingou);/.test(I1iiIil1) || this.isJdLog();
    }
    ["isJdLog"]() {
      return (this.navigator.userAgent || "").indexOf(";jdlog;") > -1;
    }
    ["getPageParamFromSdk"]() {
      var lIlil1ll, li1IillI;
      try {
        this.window.JDMAUnifyBridge && this.window.JDMAUnifyBridge.JDMAGetMPageParam ? li1IillI = JDMAUnifyBridge.JDMAGetMPageParam() : this.window.JDMAGetMPageParam ? li1IillI = JDMAGetMPageParam() : this.window.webkit && this.window.webkit.messageHandlers && this.window.webkit.messageHandlers.JDMASetMPageParam && (li1IillI = this.window.prompt("JDMAGetMPageParam", ""));
        li1IillI && (lIlil1ll = JSON.parse(li1IillI));
      } catch (lIlil1li) {}
      return lIlil1ll;
    }
    ["time"](liiIilI1, iI11l11i = null) {
      const IlI11II1 = iI11l11i ? new Date(iI11l11i) : new Date();
      let lIlIIli1 = {
        "M+": IlI11II1.getMonth() + 1,
        "d+": IlI11II1.getDate(),
        "H+": IlI11II1.getHours(),
        "m+": IlI11II1.getMinutes(),
        "s+": IlI11II1.getSeconds(),
        "q+": Math.floor((IlI11II1.getMonth() + 3) / 3),
        "S": IlI11II1.getMilliseconds()
      };
      /(y+)/.test(liiIilI1) && (liiIilI1 = liiIilI1.replace(RegExp.$1, (IlI11II1.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let I11IlllI in lIlIIli1) new RegExp("(" + I11IlllI + ")").test(liiIilI1) && (liiIilI1 = liiIilI1.replace(RegExp.$1, 1 == RegExp.$1.length ? lIlIIli1[I11IlllI] : ("00" + lIlIIli1[I11IlllI]).substr(("" + lIlIIli1[I11IlllI]).length)));
      return liiIilI1;
    }
  }
  IlI1ilIl = new II11I1i();
}
function illIlI1l(iil1i1il) {
  iil1i1il = iil1i1il || 32;
  let iil1i1ii = "abcdef0123456789",
    I11Illl1 = iil1i1ii.length,
    ilii1i1I = "";
  for (i = 0; i < iil1i1il; i++) ilii1i1I += iil1i1ii.charAt(Math.floor(Math.random() * I11Illl1));
  return ilii1i1I;
}
// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date(new Date().getTime()+new Date().getTimezoneOffset()*60*1000+8*60*60*1000);let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}