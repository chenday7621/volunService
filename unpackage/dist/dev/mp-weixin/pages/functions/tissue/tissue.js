"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    function onSearch() {
    }
    function onChange(e) {
    }
    function go(target) {
      common_vendor.index.navigateTo({
        url: `/pages/functions/tissue/${target}/${target}`
      });
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
      }
    ];
    let teams = [
      {
        text: "\u52C7\u5F80\u76F4\u524D",
        point: 0,
        num: 4
      },
      {
        text: "\u6240\u5411\u62AB\u9761",
        point: 50,
        num: 10
      }
    ];
    return {
      onSearch,
      value,
      onChange,
      communities,
      teams,
      go
    };
  }
};
if (!Array) {
  const _component_van_search = common_vendor.resolveComponent("van-search");
  const _component_van_button = common_vendor.resolveComponent("van-button");
  const _component_van_tab = common_vendor.resolveComponent("van-tab");
  const _component_van_tabs = common_vendor.resolveComponent("van-tabs");
  (_component_van_search + _component_van_button + _component_van_tab + _component_van_tabs)();
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
        b: common_vendor.t(item.num),
        c: index
      };
    }),
    c: common_vendor.o(($event) => $data.go("communityApply")),
    d: common_vendor.p({
      round: true,
      block: true,
      type: "primary",
      color: "#a92c1e"
    }),
    e: common_vendor.p({
      title: "\u6211\u7684\u793E\u533A"
    }),
    f: common_vendor.f($data.teams, (item, index, i0) => {
      return {
        a: common_vendor.t(item.text),
        b: common_vendor.t(item.point),
        c: common_vendor.t(item.num),
        d: index,
        e: common_vendor.o(($event) => $data.go("teamInfo"), index)
      };
    }),
    g: common_vendor.o(() => {
    }),
    h: common_vendor.p({
      round: true,
      block: true,
      type: "primary",
      color: "#a92c1e"
    }),
    i: common_vendor.o(($event) => $data.go("createTeam")),
    j: common_vendor.p({
      round: true,
      block: true,
      type: "primary",
      color: "#a92c1e"
    }),
    k: common_vendor.p({
      title: "\u6211\u7684\u5FD7\u613F\u56E2\u961F"
    }),
    l: common_vendor.p({
      change: $data.onChange
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1f7e79f2"], ["__file", "D:/HBuilderProjects/volunService/pages/functions/tissue/tissue.vue"]]);
wx.createPage(MiniProgramPage);
