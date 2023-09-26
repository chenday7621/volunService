"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "loginByPhone",
  data() {
    let phone = common_vendor.ref("");
    let sms = common_vendor.ref("");
    return {
      phone,
      sms
    };
  }
};
if (!Array) {
  const _component_van_field = common_vendor.resolveComponent("van-field");
  const _component_van_button = common_vendor.resolveComponent("van-button");
  const _component_van_cell_group = common_vendor.resolveComponent("van-cell-group");
  (_component_van_field + _component_van_button + _component_van_cell_group)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      label: "\u624B\u673A\u53F7",
      value: $data.phone,
      placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7",
      type: "number",
      maxlength: "11",
      border: "{{ false }}"
    }),
    b: common_vendor.p({
      size: "small",
      plain: true,
      color: "#a92c1e"
    }),
    c: common_vendor.p({
      value: $data.sms,
      center: true,
      clearable: true,
      label: "\u9A8C\u8BC1\u7801",
      placeholder: "\u8BF7\u8F93\u51656\u4F4D\u9A8C\u8BC1\u7801",
      border: "{{ false }}",
      useButtonSlot: true
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HBuilderProjects/volunService/components/loginByPhone/loginByPhone.vue"]]);
wx.createComponent(Component);
