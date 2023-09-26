"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    function onSearch() {
    }
    return {
      value: "",
      onSearch,
      background: ["color1", "color2", "color3"],
      indicatorDots: true,
      autoplay: true,
      interval: 2e3,
      duration: 500
    };
  },
  onLoad() {
  }
};
if (!Array) {
  const _component_van_search = common_vendor.resolveComponent("van-search");
  const _component_uni_easyinput = common_vendor.resolveComponent("uni-easyinput");
  const _component_uni_section = common_vendor.resolveComponent("uni-section");
  (_component_van_search + _component_uni_easyinput + _component_uni_section)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      value: $data.value,
      placeholder: "\u641C\u7D22\u611F\u5174\u8DA3\u7684\u670D\u52A1",
      search: $data.onSearch
    }),
    b: $data.indicatorDots,
    c: $data.autoplay,
    d: $data.interval,
    e: $data.duration,
    f: common_vendor.o(($event) => _ctx.password = $event),
    g: common_vendor.p({
      type: "password",
      placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801",
      modelValue: _ctx.password
    }),
    h: common_vendor.p({
      title: "\u5BC6\u7801\u6846",
      subTitle: "\u6307\u5B9A\u5C5E\u6027 type=password \u4F7F\u7528\u5BC6\u7801\u6846,\u53F3\u4FA7\u4F1A\u663E\u793A\u773C\u775B\u56FE\u6807",
      type: "line",
      padding: true
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-57280228"], ["__file", "D:/HBuilderProjects/volunService/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
