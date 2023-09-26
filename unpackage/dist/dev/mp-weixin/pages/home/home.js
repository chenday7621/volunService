"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    let usr = {
      name: "\u5F20\u4E09",
      phone: "12145489822",
      tag: ["\u5BB6\u653F\u670D\u52A1", "\u6CD5\u5F8B\u54A8\u8BE2", "\u966A\u4F34\u8001\u4EBA"],
      address: "\u5317\u4EAC\u5E02\u6D77\u6DC0\u533A\u7D2B\u7AF9\u9662\u8857\u9053\u4E2D\u5173\u6751\u5357\u5927\u885727\u53F7\u4E2D\u592E\u6C11\u65CF\u5927\u5B66"
    };
    let options = {
      "message": "\u6D88\u606F\u4E2D\u5FC3",
      "tissue": "\u6211\u7684\u7EC4\u7EC7",
      "serveList": "\u670D\u52A1\u5217\u8868",
      "address": "\u5730\u5740\u7C3F",
      "myInfo": "\u4E2A\u4EBA\u4FE1\u606F",
      "record": "\u5151\u6362\u8BB0\u5F55",
      "identify": "\u5207\u6362\u8EAB\u4EFD",
      "serveTime": "\u670D\u52A1\u65F6\u95F4\u8868",
      "changePwd": "\u4FEE\u6539\u5BC6\u7801"
    };
    function goFunc(target) {
      console.log(target);
      common_vendor.index.navigateTo({
        url: `/pages/functions/${target}/${target}`
      });
    }
    function goP() {
      common_vendor.index.navigateTo({
        url: "/pages/points/pointsInfo/pointsInfo"
      });
    }
    return {
      usr,
      options,
      goFunc,
      goP
    };
  }
};
if (!Array) {
  const _component_van_image = common_vendor.resolveComponent("van-image");
  const _easycom_stickTitle2 = common_vendor.resolveComponent("stickTitle");
  (_component_van_image + _easycom_stickTitle2)();
}
const _easycom_stickTitle = () => "../../components/stickTitle/stickTitle.js";
if (!Math) {
  _easycom_stickTitle();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      round: true,
      width: "3.5rem",
      height: "3.5rem",
      src: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
    }),
    b: common_vendor.t($data.usr.name),
    c: common_vendor.t($data.usr.phone),
    d: common_vendor.f($data.usr.tag, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index
      };
    }),
    e: common_vendor.t($data.usr.address),
    f: common_vendor.p({
      title: "\u6211\u7684\u79EF\u5206"
    }),
    g: common_vendor.o((...args) => $data.goP && $data.goP(...args)),
    h: common_vendor.p({
      title: "\u5E38\u7528\u529F\u80FD"
    }),
    i: common_vendor.f($data.options, (item, index, i0) => {
      return {
        a: `../../static/HomeNav/${item}.png`,
        b: common_vendor.t(item),
        c: index,
        d: common_vendor.o(($event) => $data.goFunc(index), index)
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-92bb8f34"], ["__file", "D:/HBuilderProjects/volunService/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
