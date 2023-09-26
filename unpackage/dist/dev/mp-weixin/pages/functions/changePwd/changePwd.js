"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    const onSubmit = (values) => {
      console.log("submit", values);
    };
    let isHide1 = common_vendor.ref(true);
    let isHide2 = common_vendor.ref(true);
    let type1 = common_vendor.ref("password");
    let type2 = common_vendor.ref("password");
    function changeMode1() {
      isHide1.value = isHide1.value ? false : true;
      type1.value = type1.value == "password" ? "text" : "password";
    }
    function changeMode2() {
      isHide2.value = isHide2.value ? false : true;
      type2.value = type2.value == "password" ? "text" : "password";
    }
    return {
      pwd: "",
      pwd2: "",
      onSubmit,
      isHide1,
      isHide2,
      changeMode1,
      changeMode2,
      type1,
      type2
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
    a: $data.isHide1,
    b: common_vendor.o((...args) => $data.changeMode1 && $data.changeMode1(...args)),
    c: !$data.isHide1,
    d: common_vendor.o((...args) => $data.changeMode1 && $data.changeMode1(...args)),
    e: common_vendor.o(($event) => $data.pwd = $event),
    f: common_vendor.p({
      type: $data.type1,
      name: "\u65B0\u5BC6\u7801",
      label: "\u65B0\u5BC6\u7801",
      placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801",
      rules: [{
        required: true,
        message: "\u8BF7\u586B\u5199\u5BC6\u7801"
      }],
      modelValue: $data.pwd
    }),
    g: $data.isHide2,
    h: common_vendor.o((...args) => $data.changeMode2 && $data.changeMode2(...args)),
    i: !$data.isHide2,
    j: common_vendor.o((...args) => $data.changeMode2 && $data.changeMode2(...args)),
    k: common_vendor.o(($event) => $data.pwd2 = $event),
    l: common_vendor.p({
      type: $data.type2,
      name: "\u786E\u8BA4\u5BC6\u7801",
      label: "\u786E\u8BA4\u5BC6\u7801",
      placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801",
      rules: [{
        required: true,
        message: "\u8BF7\u586B\u5199\u5BC6\u7801"
      }],
      modelValue: $data.pwd2
    }),
    m: common_vendor.p({
      inset: true
    }),
    n: common_vendor.p({
      round: true,
      block: true,
      type: "primary",
      nativeType: "submit",
      color: "#a92c1e"
    }),
    o: common_vendor.o($data.onSubmit)
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6d7894a4"], ["__file", "D:/HBuilderProjects/volunService/pages/functions/changePwd/changePwd.vue"]]);
wx.createPage(MiniProgramPage);
