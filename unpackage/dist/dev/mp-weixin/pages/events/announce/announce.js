"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    let list = [
      {
        url: "../../../static/bg.jpg",
        title: "\u7518\u9716\u793E\u533A\u670D\u52A1\u4E2D\u5FC32023\u5E74\u5EA6\u4F18\u79C0\u5FD7\u613F\u8005\u516C\u793A",
        time: "2023-08-23 14\uFF1A06\uFF1A15"
      },
      {
        url: "../../../static/bg.jpg",
        title: "\u7518\u9716\u793E\u533A\u670D\u52A1\u4E2D\u5FC32023\u5E74\u5EA6\u4F18\u79C0\u5FD7\u613F\u8005\u516C\u793A",
        time: "2023-08-23 14\uFF1A06\uFF1A15"
      },
      {
        url: "../../../static/bg.jpg",
        title: "\u7518\u9716\u793E\u533A\u670D\u52A1\u4E2D\u5FC32023\u5E74\u5EA6\u4F18\u79C0\u5FD7\u613F\u8005\u516C\u793A",
        time: "2023-08-23 14\uFF1A06\uFF1A15"
      },
      {
        url: "../../../static/bg.jpg",
        title: "\u7518\u9716\u793E\u533A\u670D\u52A1\u4E2D\u5FC32023\u5E74\u5EA6\u4F18\u79C0\u5FD7\u613F\u8005\u516C\u793A",
        time: "2023-08-23 14\uFF1A06\uFF1A15"
      },
      {
        url: "../../../static/bg.jpg",
        title: "\u7518\u9716\u793E\u533A\u670D\u52A1\u4E2D\u5FC32023\u5E74\u5EA6\u4F18\u79C0\u5FD7\u613F\u8005\u516C\u793A",
        time: "2023-08-23 14\uFF1A06\uFF1A15"
      },
      {
        url: "../../../static/bg.jpg",
        title: "\u7518\u9716\u793E\u533A\u670D\u52A1\u4E2D\u5FC32023\u5E74\u5EA6\u4F18\u79C0\u5FD7\u613F\u8005\u516C\u793A",
        time: "2023-08-23 14\uFF1A06\uFF1A15"
      }
    ];
    return {
      list
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: item.url,
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.time),
        d: index
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7f14225c"], ["__file", "D:/HBuilderProjects/volunService/pages/events/announce/announce.vue"]]);
wx.createPage(MiniProgramPage);
