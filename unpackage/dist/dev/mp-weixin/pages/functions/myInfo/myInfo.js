"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      name: "\u5F20\u4E09",
      role: "\u5FD7\u613F\u8005",
      phone: "2561270278",
      card: "1FA5G14B5",
      isResident: false
    };
  }
};
if (!Array) {
  const _component_van_field = common_vendor.resolveComponent("van-field");
  const _component_van_cell_group = common_vendor.resolveComponent("van-cell-group");
  (_component_van_field + _component_van_cell_group)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      label: "\u59D3\u540D",
      value: $data.name,
      readonly: true
    }),
    b: common_vendor.p({
      label: "\u89D2\u8272",
      value: $data.role,
      readonly: true
    }),
    c: common_vendor.p({
      label: "\u624B\u673A\u53F7",
      value: $data.phone,
      readonly: true
    }),
    d: common_vendor.p({
      label: "\u7535\u5B50\u5361",
      value: $data.card,
      readonly: true
    }),
    e: common_vendor.p({
      inset: true
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HBuilderProjects/volunService/pages/functions/myInfo/myInfo.vue"]]);
wx.createPage(MiniProgramPage);
