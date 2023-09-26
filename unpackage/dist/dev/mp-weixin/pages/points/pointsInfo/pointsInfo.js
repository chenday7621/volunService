"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    let list = common_vendor.ref();
    list.value = [
      {
        title: "\u60A8\u7684\u79EF\u5206\u5927\u793C\u5305\u4E2D\u76842.0\u79EF\u5206\u5DF2\u5230\u8D26",
        time: "2023-08-23 14: 06: 15",
        point: "+2\u5206"
      },
      {
        title: "\u60A8\u7684\u79EF\u5206\u5927\u793C\u5305\u4E2D\u76842.0\u79EF\u5206\u5DF2\u5230\u8D26",
        time: "2023-08-23 14: 06: 15",
        point: "+2\u5206"
      }
    ];
    function goExchange() {
      common_vendor.index.navigateTo({
        url: "/pages/points/pointsExchange/pointsExchange"
      });
    }
    return {
      num: 2,
      list,
      goExchange
    };
  }
};
if (!Array) {
  const _easycom_stickTitle2 = common_vendor.resolveComponent("stickTitle");
  _easycom_stickTitle2();
}
const _easycom_stickTitle = () => "../../../components/stickTitle/stickTitle.js";
if (!Math) {
  _easycom_stickTitle();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.num),
    b: common_vendor.t($data.num),
    c: common_vendor.t($data.num),
    d: common_vendor.o((...args) => $data.goExchange && $data.goExchange(...args)),
    e: common_vendor.p({
      title: "\u79EF\u5206\u8BB0\u5F55"
    }),
    f: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: common_vendor.t(item.time),
        c: common_vendor.t(item.point),
        d: index
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a6cab3c8"], ["__file", "D:/HBuilderProjects/volunService/pages/points/pointsInfo/pointsInfo.vue"]]);
wx.createPage(MiniProgramPage);
