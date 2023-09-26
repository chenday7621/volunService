"use strict";
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    function onSearch() {
    }
    function onChange(e) {
    }
    let value = common_vendor.ref("");
    let communities = [
      {
        text: "\u65B0\u5317\u82D1\u793E\u533A",
        num: 4
      },
      {
        text: "\u65B0\u5317\u82D1\u793E\u533A",
        num: 4
      },
      {
        text: "\u65B0\u5317\u82D1\u793E\u533A",
        num: 4
      },
      {
        text: "\u65B0\u5317\u82D1\u793E\u533A",
        num: 4
      }
    ];
    return {
      onSearch,
      value,
      onChange,
      communities
    };
  }
};
if (!Array) {
  const _component_van_search = common_vendor.resolveComponent("van-search");
  const _component_van_button = common_vendor.resolveComponent("van-button");
  (_component_van_search + _component_van_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      value: $data.value,
      placeholder: "\u641C\u7D22",
      search: $data.onSearch
    }),
    b: common_vendor.f($data.communities, (item, index, i0) => {
      return {
        a: common_vendor.t(item.text),
        b: "4cdd145c-1-" + i0,
        c: index
      };
    }),
    c: common_vendor.o(() => {
    }),
    d: common_vendor.p({
      block: true,
      type: "primary",
      size: "small",
      color: "#a92c1e"
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4cdd145c"], ["__file", "D:/HBuilderProjects/volunService/pages/functions/tissue/communityApply/communityApply.vue"]]);
wx.createPage(MiniProgramPage);
