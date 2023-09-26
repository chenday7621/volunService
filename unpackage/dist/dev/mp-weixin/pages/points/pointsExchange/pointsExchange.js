"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    const onSubmit = (values) => {
      console.log("submit", values);
    };
    return {
      alliPoint: 2,
      equalPoint: 4,
      onSubmit,
      number: 0
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
    a: common_vendor.p({
      label: "\u8054\u76DF\u79EF\u5206",
      value: $data.alliPoint,
      readonly: true
    }),
    b: common_vendor.o(($event) => $data.number = $event),
    c: common_vendor.p({
      type: "number",
      name: "\u5151\u6362\u6570\u91CF",
      label: "\u5151\u6362\u6570\u91CF",
      placeholder: "\u8BF7\u8F93\u5165\u8981\u5151\u6362\u7684\u8054\u76DF\u79EF\u5206\u6570\u91CF",
      rules: [{
        required: true,
        message: "\u8BF7\u586B\u5199\u6570\u91CF"
      }],
      modelValue: $data.number
    }),
    d: common_vendor.p({
      label: "\u7B49\u989D\u79EF\u5206",
      value: $data.equalPoint,
      readonly: true
    }),
    e: common_vendor.p({
      inset: true
    }),
    f: common_vendor.p({
      round: true,
      block: true,
      type: "primary",
      nativeType: "submit",
      color: "#a92c1e"
    }),
    g: common_vendor.o($data.onSubmit)
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-80cb2d08"], ["__file", "D:/HBuilderProjects/volunService/pages/points/pointsExchange/pointsExchange.vue"]]);
wx.createPage(MiniProgramPage);
