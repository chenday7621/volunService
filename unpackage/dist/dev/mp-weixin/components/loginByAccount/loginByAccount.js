"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "loginByAccount",
  data() {
    const username = common_vendor.ref("");
    const password = common_vendor.ref("");
    const onSubmit = (values) => {
      console.log("submit", values);
    };
    return {
      username,
      password,
      onSubmit
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
    a: common_vendor.o(($event) => $data.username = $event),
    b: common_vendor.p({
      name: "\u8D26\u53F7",
      label: "\u8D26\u53F7",
      placeholder: "\u8BF7\u8F93\u5165\u8D26\u53F7",
      rules: [{
        required: true,
        message: "\u8BF7\u586B\u5199\u8D26\u53F7"
      }],
      modelValue: $data.username
    }),
    c: common_vendor.o(($event) => $data.password = $event),
    d: common_vendor.p({
      type: "password",
      name: "\u5BC6\u7801",
      label: "\u5BC6\u7801",
      placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801",
      rules: [{
        required: true,
        message: "\u8BF7\u586B\u5199\u5BC6\u7801"
      }],
      modelValue: $data.password
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
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HBuilderProjects/volunService/components/loginByAccount/loginByAccount.vue"]]);
wx.createComponent(Component);
