"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "stickTitle",
  data() {
    return {};
  },
  props: ["title"]
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.title)
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HBuilderProjects/volunService/components/stickTitle/stickTitle.vue"]]);
wx.createComponent(Component);
