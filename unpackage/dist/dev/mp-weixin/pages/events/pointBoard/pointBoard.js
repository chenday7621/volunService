"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    function onSearch() {
    }
    return {
      onSearch,
      value: ""
    };
  }
};
if (!Array) {
  const _component_van_search = common_vendor.resolveComponent("van-search");
  const _easycom_stickTitle2 = common_vendor.resolveComponent("stickTitle");
  const _easycom_volunteer2 = common_vendor.resolveComponent("volunteer");
  (_component_van_search + _easycom_stickTitle2 + _easycom_volunteer2)();
}
const _easycom_stickTitle = () => "../../../components/stickTitle/stickTitle.js";
const _easycom_volunteer = () => "../../../components/volunteer/volunteer.js";
if (!Math) {
  (_easycom_stickTitle + _easycom_volunteer)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      value: $data.value,
      placeholder: "\u641C\u7D22\u5FD7\u613F\u8005",
      search: $data.onSearch
    }),
    b: common_vendor.p({
      title: "\u4E3A\u60A8\u63A8\u8350"
    }),
    c: common_vendor.f(10, (item, k0, i0) => {
      return {
        a: item,
        b: "33d64ca3-2-" + i0
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HBuilderProjects/volunService/pages/events/pointBoard/pointBoard.vue"]]);
wx.createPage(MiniProgramPage);
