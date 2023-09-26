"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "volunteer",
  data() {
    return {};
  }
};
if (!Array) {
  const _component_van_image = common_vendor.resolveComponent("van-image");
  _component_van_image();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      round: true,
      width: "3.5rem",
      height: "3.5rem",
      src: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-405d6c4c"], ["__file", "D:/HBuilderProjects/volunService/components/volunteer/volunteer.vue"]]);
wx.createComponent(Component);
