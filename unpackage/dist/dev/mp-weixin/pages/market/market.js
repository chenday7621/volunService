"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    function onSearch() {
    }
    let value = common_vendor.ref("");
    let list = [
      "\u5168\u90E8",
      "\u98DF\u54C1\u7CBE\u9009",
      "\u65E5\u7528\u767E\u8D27",
      "\u5BB6\u5C45\u4FBF\u6C11",
      "\u56E2\u961F\u4E13\u5C5E"
    ];
    return {
      onSearch,
      value,
      list
    };
  }
};
if (!Array) {
  const _component_van_search = common_vendor.resolveComponent("van-search");
  const _easycom_stickTitle2 = common_vendor.resolveComponent("stickTitle");
  const _component_van_tab = common_vendor.resolveComponent("van-tab");
  const _component_van_tabs = common_vendor.resolveComponent("van-tabs");
  (_component_van_search + _easycom_stickTitle2 + _component_van_tab + _component_van_tabs)();
}
const _easycom_stickTitle = () => "../../components/stickTitle/stickTitle.js";
if (!Math) {
  _easycom_stickTitle();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      value: $data.value,
      placeholder: "\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22",
      search: $data.onSearch
    }),
    b: common_vendor.p({
      title: "\u79CD\u7C7B\u7B5B\u9009"
    }),
    c: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: index,
        b: "6a3f1f75-3-" + i0 + ",6a3f1f75-2",
        c: common_vendor.p({
          title: item
        })
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HBuilderProjects/volunService/pages/market/market.vue"]]);
wx.createPage(MiniProgramPage);
