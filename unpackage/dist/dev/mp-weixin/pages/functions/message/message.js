"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    function onSearch() {
    }
    function onChange(e) {
    }
    let value = common_vendor.ref("");
    let msg = [
      {
        text: "\u52A0\u5165\u793E\u533A\u5DF2\u5BA1\u6838\u901A\u8FC7!",
        time: "2023-08-25"
      },
      {
        text: "\u65B0\u7528\u6237\u6CE8\u518C\u6210\u529F",
        time: "2023-08-24"
      }
    ];
    return {
      onSearch,
      value,
      onChange,
      msg
    };
  }
};
if (!Array) {
  const _component_van_search = common_vendor.resolveComponent("van-search");
  const _component_van_tab = common_vendor.resolveComponent("van-tab");
  const _component_van_tabs = common_vendor.resolveComponent("van-tabs");
  (_component_van_search + _component_van_tab + _component_van_tabs)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      value: $data.value,
      placeholder: "\u641C\u7D22\u611F\u5174\u8DA3\u7684\u670D\u52A1",
      search: $data.onSearch
    }),
    b: common_vendor.f($data.msg, (item, index, i0) => {
      return {
        a: common_vendor.t(item.text),
        b: common_vendor.t(item.time),
        c: index
      };
    }),
    c: common_vendor.p({
      title: "\u7CFB\u7EDF\u6D88\u606F"
    }),
    d: common_vendor.p({
      title: "\u901A\u77E5\u516C\u544A"
    }),
    e: common_vendor.p({
      change: $data.onChange
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3798abe2"], ["__file", "D:/HBuilderProjects/volunService/pages/functions/message/message.vue"]]);
wx.createPage(MiniProgramPage);
