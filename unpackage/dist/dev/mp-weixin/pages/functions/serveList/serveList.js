"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    function onSearch() {
    }
    let list1 = [
      {
        title: "\u5168\u5FC3\u5168\u610F\u793E\u533A\u52A9\u8001\u670D\u52A1\u961F \u62DB\u52DF\u8BA1\u5212",
        tag: "\u9700\u6C42"
      },
      {
        title: "\u5168\u5FC3\u5168\u610F\u793E\u533A\u52A9\u8001\u670D\u52A1\u961F \u62DB\u52DF\u8BA1\u5212",
        tag: "\u9700\u6C42"
      },
      {
        title: "\u5168\u5FC3\u5168\u610F\u793E\u533A\u52A9\u8001\u670D\u52A1\u961F \u62DB\u52DF\u8BA1\u5212",
        tag: "\u9700\u6C42"
      },
      {
        title: "\u5168\u5FC3\u5168\u610F\u793E\u533A\u52A9\u8001\u670D\u52A1\u961F \u62DB\u52DF\u8BA1\u5212",
        tag: "\u9700\u6C42"
      },
      {
        title: "\u5168\u5FC3\u5168\u610F\u793E\u533A\u52A9\u8001\u670D\u52A1\u961F \u62DB\u52DF\u8BA1\u5212",
        tag: "\u9700\u6C42"
      }
    ];
    let list2 = [
      {
        title: "\u5168\u5FC3\u5168\u610F\u793E\u533A\u52A9\u8001\u670D\u52A1\u961F \u62DB\u52DF\u8BA1\u5212",
        tag: "\u9700\u6C42"
      },
      {
        title: "\u5168\u5FC3\u5168\u610F\u793E\u533A\u52A9\u8001\u670D\u52A1\u961F \u62DB\u52DF\u8BA1\u5212",
        tag: "\u9700\u6C42"
      },
      {
        title: "\u5168\u5FC3\u5168\u610F\u793E\u533A\u52A9\u8001\u670D\u52A1\u961F \u62DB\u52DF\u8BA1\u5212",
        tag: "\u9700\u6C42"
      },
      {
        title: "\u5168\u5FC3\u5168\u610F\u793E\u533A\u52A9\u8001\u670D\u52A1\u961F \u62DB\u52DF\u8BA1\u5212",
        tag: "\u9700\u6C42"
      },
      {
        title: "\u5168\u5FC3\u5168\u610F\u793E\u533A\u52A9\u8001\u670D\u52A1\u961F \u62DB\u52DF\u8BA1\u5212",
        tag: "\u9700\u6C42"
      }
    ];
    return {
      value: "",
      onSearch,
      list1,
      list2
    };
  }
};
if (!Array) {
  const _component_van_search = common_vendor.resolveComponent("van-search");
  const _component_van_tag = common_vendor.resolveComponent("van-tag");
  const _component_van_tab = common_vendor.resolveComponent("van-tab");
  const _component_van_tabs = common_vendor.resolveComponent("van-tabs");
  (_component_van_search + _component_van_tag + _component_van_tab + _component_van_tabs)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      value: $data.value,
      placeholder: "\u641C\u7D22",
      search: $data.onSearch
    }),
    b: common_vendor.f($data.list1, (item, index, i0) => {
      return {
        a: "440f9b6e-3-" + i0 + ",440f9b6e-2",
        b: common_vendor.t(item.title),
        c: index
      };
    }),
    c: common_vendor.p({
      type: "danger"
    }),
    d: common_vendor.p({
      title: "\u8FDB\u884C\u4E2D"
    }),
    e: common_vendor.f($data.list2, (item, index, i0) => {
      return {
        a: "440f9b6e-5-" + i0 + ",440f9b6e-4",
        b: common_vendor.t(item.title),
        c: index
      };
    }),
    f: common_vendor.p({
      title: "\u5DF2\u7ED3\u675F"
    }),
    g: common_vendor.p({
      change: _ctx.onChange
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-440f9b6e"], ["__file", "D:/HBuilderProjects/volunService/pages/functions/serveList/serveList.vue"]]);
wx.createPage(MiniProgramPage);
