"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    function onSearch() {
    }
    let list = [
      "\u4F53\u80B2\u670D\u52A1",
      "\u5BB6\u653F\u670D\u52A1",
      "\u6C9F\u901A\u80FD\u529B",
      "\u6280\u672F\u670D\u52A1",
      "\u533B\u7597\u670D\u52A1"
    ];
    function goPointBoard() {
      common_vendor.index.navigateTo({
        url: "/pages/events/pointBoard/pointBoard"
      });
    }
    function goAnnounce() {
      common_vendor.index.navigateTo({
        url: "/pages/events/announce/announce"
      });
    }
    return {
      onSearch,
      value: "",
      list,
      goPointBoard,
      goAnnounce
    };
  }
};
if (!Array) {
  const _component_van_search = common_vendor.resolveComponent("van-search");
  const _easycom_stickTitle2 = common_vendor.resolveComponent("stickTitle");
  const _easycom_volunteer2 = common_vendor.resolveComponent("volunteer");
  const _component_van_tab = common_vendor.resolveComponent("van-tab");
  const _component_van_tabs = common_vendor.resolveComponent("van-tabs");
  (_component_van_search + _easycom_stickTitle2 + _easycom_volunteer2 + _component_van_tab + _component_van_tabs)();
}
const _easycom_stickTitle = () => "../../components/stickTitle/stickTitle.js";
const _easycom_volunteer = () => "../../components/volunteer/volunteer.js";
if (!Math) {
  (_easycom_stickTitle + _easycom_volunteer)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      value: $data.value,
      placeholder: "\u641C\u7D22\u5FD7\u613F\u8005",
      search: $data.onSearch
    }),
    b: common_vendor.o((...args) => $data.goPointBoard && $data.goPointBoard(...args)),
    c: common_vendor.o((...args) => $data.goAnnounce && $data.goAnnounce(...args)),
    d: common_vendor.p({
      title: "\u670D\u52A1\u6280\u80FD\u5E05\u9009"
    }),
    e: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: "4fafbfa6-4-" + i0 + "," + ("4fafbfa6-3-" + i0),
        b: common_vendor.f(10, (item2, k1, i1) => {
          return {
            a: item2,
            b: "4fafbfa6-5-" + i0 + "-" + i1 + "," + ("4fafbfa6-3-" + i0)
          };
        }),
        c: index,
        d: "4fafbfa6-3-" + i0 + ",4fafbfa6-2",
        e: common_vendor.p({
          title: item
        })
      };
    }),
    f: common_vendor.p({
      title: "\u4E3A\u60A8\u63A8\u8350"
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4fafbfa6"], ["__file", "D:/HBuilderProjects/volunService/pages/events/events.vue"]]);
wx.createPage(MiniProgramPage);
