"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    let isResident = common_vendor.ref(false);
    function onChange(e) {
      console.log(e.detail);
      radio.value = e.detail;
      if (e.detail == "\u5C45\u6C11") {
        isResident.value = true;
      } else {
        isResident.value = false;
      }
    }
    function goLogin() {
      common_vendor.index.reLaunch({
        url: "/pages/login/login"
      });
    }
    let radio = common_vendor.ref("\u5C45\u6C11");
    return {
      isResident,
      show: false,
      form: {
        value: "",
        checked: true,
        radio: "1",
        pwd: "",
        phone: "",
        sms: ""
      },
      onChange,
      radio,
      goLogin
    };
  }
};
if (!Array) {
  const _component_van_field = common_vendor.resolveComponent("van-field");
  const _component_van_radio = common_vendor.resolveComponent("van-radio");
  const _component_van_radio_group = common_vendor.resolveComponent("van-radio-group");
  const _component_van_button = common_vendor.resolveComponent("van-button");
  const _component_van_cell_group = common_vendor.resolveComponent("van-cell-group");
  (_component_van_field + _component_van_radio + _component_van_radio_group + _component_van_button + _component_van_cell_group)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      label: "\u59D3\u540D",
      value: $data.form.value,
      placeholder: "\u8BF7\u8F93\u5165\u59D3\u540D",
      border: "{{ false }}"
    }),
    b: common_vendor.p({
      label: "\u5730\u5740",
      value: $data.form.value,
      placeholder: "\u8BF7\u8F93\u5165\u60A8\u7684\u5BB6\u5EAD\u5730\u5740",
      border: "{{ false }}"
    }),
    c: common_vendor.p({
      name: "\u5C45\u6C11"
    }),
    d: common_vendor.p({
      name: "\u5FD7\u613F\u8005"
    }),
    e: common_vendor.o($data.onChange),
    f: common_vendor.p({
      value: $data.radio,
      direction: "horizontal"
    }),
    g: common_vendor.p({
      name: "radio",
      label: "\u89D2\u8272"
    }),
    h: common_vendor.p({
      label: "\u624B\u673A\u53F7",
      value: $data.form.phone,
      placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7",
      type: "number",
      maxlength: "11",
      border: "{{ false }}"
    }),
    i: common_vendor.p({
      label: "\u5BC6\u7801",
      value: $data.form.pwd,
      placeholder: "\u8BF7\u8BBE\u7F6E8\u4F4D\u5BC6\u7801,\u5305\u542B\u5927\u5199\u5B57\u6BCD\u3001\u5C0F\u5199\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u7279\u6B8A\u7B26\u53F7\u4E2D\u7684\u4E09\u9879",
      border: "{{ false }}"
    }),
    j: common_vendor.p({
      size: "small",
      plain: true,
      color: "#a92c1e"
    }),
    k: common_vendor.p({
      value: $data.form.sms,
      center: true,
      clearable: true,
      label: "\u77ED\u4FE1\u9A8C\u8BC1\u7801",
      placeholder: "\u8BF7\u8F93\u5165\u77ED\u4FE1\u9A8C\u8BC1\u7801",
      border: "{{ false }}",
      useButtonSlot: true
    }),
    l: common_vendor.p({
      round: true,
      block: true,
      type: "primary",
      nativeType: "submit",
      color: "#a92c1e"
    }),
    m: common_vendor.o((...args) => $data.goLogin && $data.goLogin(...args)),
    n: common_vendor.o((...args) => $data.goLogin && $data.goLogin(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-23701386"], ["__file", "D:/HBuilderProjects/volunService/pages/signin/signin.vue"]]);
wx.createPage(MiniProgramPage);
