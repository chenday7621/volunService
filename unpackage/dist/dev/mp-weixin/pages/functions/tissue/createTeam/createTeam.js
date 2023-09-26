"use strict";
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    const onSubmit = (values) => {
      console.log("submit", values);
    };
    return {
      alliPoint: 2,
      equalPoint: 4,
      onSubmit,
      name: ""
    };
  }
};
if (!Array) {
  const _component_van_field = common_vendor.resolveComponent("van-field");
  const _component_van_cell_group = common_vendor.resolveComponent("van-cell-group");
  const _component_van_button = common_vendor.resolveComponent("van-button");
  const _component_van_form = common_vendor.resolveComponent("van-form");
  (_component_van_field + _component_van_cell_group + _component_van_button + _component_van_form)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.name = $event),
    b: common_vendor.p({
      name: "\u540D\u79F0",
      label: "\u540D\u79F0",
      placeholder: "\u8BF7\u7ED9\u56E2\u961F\u8D77\u4E2A\u540D\u79F0",
      rules: [{
        required: true,
        message: "\u8BF7\u586B\u5199\u56E2\u961F\u540D\u79F0"
      }],
      modelValue: $data.name
    }),
    c: common_vendor.p({
      inset: true
    }),
    d: common_vendor.p({
      round: true,
      block: true,
      type: "primary",
      nativeType: "submit",
      color: "#a92c1e"
    }),
    e: common_vendor.o($data.onSubmit)
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-724af552"], ["__file", "D:/HBuilderProjects/volunService/pages/functions/tissue/createTeam/createTeam.vue"]]);
wx.createPage(MiniProgramPage);
