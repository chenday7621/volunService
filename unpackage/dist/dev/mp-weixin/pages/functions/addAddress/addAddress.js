"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    const onSubmit = (values) => {
      console.log("submit", values);
      setTimeout(() => {
        common_vendor.index.showToast({
          title: "\u6DFB\u52A0\u6210\u529F"
        });
        setTimeout(() => {
          common_vendor.index.hideToast();
          common_vendor.index.redirectTo({
            url: "/pages/functions/address/address"
          });
        }, 1500);
      }, 0);
    };
    let address = common_vendor.ref({
      name: "",
      phone: "",
      area: "",
      detail: "",
      isDefault: false
    });
    return {
      onSubmit,
      address
    };
  }
};
if (!Array) {
  const _component_van_field = common_vendor.resolveComponent("van-field");
  const _component_van_checkbox = common_vendor.resolveComponent("van-checkbox");
  const _component_van_cell_group = common_vendor.resolveComponent("van-cell-group");
  const _component_van_button = common_vendor.resolveComponent("van-button");
  const _component_van_form = common_vendor.resolveComponent("van-form");
  (_component_van_field + _component_van_checkbox + _component_van_cell_group + _component_van_button + _component_van_form)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.address.name = $event),
    b: common_vendor.p({
      name: "\u8054\u7CFB\u4EBA",
      label: "\u8054\u7CFB\u4EBA",
      placeholder: "\u8BF7\u8F93\u5165\u8054\u7CFB\u4EBA\u7684\u59D3\u540D",
      rules: [{
        required: true,
        message: "\u8BF7\u586B\u5199\u59D3\u540D"
      }],
      modelValue: $data.address.name
    }),
    c: common_vendor.o(($event) => $data.address.phone = $event),
    d: common_vendor.p({
      name: "\u624B\u673A\u53F7",
      label: "\u624B\u673A\u53F7",
      placeholder: "\u8BF7\u8F93\u5165\u6536\u8D27\u624B\u673A\u53F7",
      rules: [{
        required: true,
        message: "\u8BF7\u586B\u5199\u624B\u673A\u53F7"
      }],
      modelValue: $data.address.phone
    }),
    e: common_vendor.o(($event) => $data.address.detail = $event),
    f: common_vendor.p({
      name: "\u5177\u4F53\u5730\u5740",
      label: "\u5177\u4F53\u5730\u5740",
      placeholder: "\u4F8B:B\u5EA76\u697C606\u5BA4",
      modelValue: $data.address.detail
    }),
    g: common_vendor.o(($event) => $data.address.isDefault = $event),
    h: common_vendor.p({
      modelValue: $data.address.isDefault
    }),
    i: common_vendor.p({
      inset: true
    }),
    j: common_vendor.o($data.onSubmit),
    k: common_vendor.p({
      round: true,
      block: true,
      type: "primary",
      nativeType: "submit",
      color: "#a92c1e"
    }),
    l: common_vendor.o($data.onSubmit)
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HBuilderProjects/volunService/pages/functions/addAddress/addAddress.vue"]]);
wx.createPage(MiniProgramPage);
