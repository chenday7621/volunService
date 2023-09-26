"use strict";
var common_vendor = require("../../../common/vendor.js");
var wxcomponents_dist_dialog_dialog = require("../../../wxcomponents/dist/dialog/dialog.js");
const _sfc_main = {
  data() {
    let list = [
      {
        name: "\u5F20\u4E09",
        phone: "12345678909",
        address: "\u5317\u4EAC\u5E02 \u5317\u4EAC\u5E02 \u4E30\u53F0\u533A \u738B\u4F50\u9547\u9B4F\u5404\u5E84\u8DEF27\u53F7\u4E2D\u82F1\u6C11\u65CF\u5927\u5B66"
      },
      {
        name: "\u5F20\u4E09",
        phone: "12345678909",
        address: "\u5317\u4EAC\u5E02 \u5317\u4EAC\u5E02 \u4E30\u53F0\u533A \u738B\u4F50\u9547\u9B4F\u5404\u5E84\u8DEF27\u53F7\u4E2D\u82F1\u6C11\u65CF\u5927\u5B66"
      }
    ];
    function goAdd() {
      common_vendor.index.navigateTo({
        url: "/pages/functions/addAddress/addAddress"
      });
    }
    function change(target) {
      console.log(target);
      common_vendor.index.navigateTo({
        url: "/pages/functions/changeAddress/changeAddress"
      });
    }
    function del(target) {
      console.log(target);
      wxcomponents_dist_dialog_dialog.Dialog.confirm({
        message: "\u786E\u5B9A\u8981\u5220\u9664\u6536\u8D27\u5730\u5740\u5417\uFF1F"
      }).then(() => {
        common_vendor.index.showToast({
          title: "\u5220\u9664\u6210\u529F"
        });
        setTimeout(() => {
          common_vendor.index.hideToast();
        }, 1500);
      }).catch(() => {
      });
    }
    return {
      list,
      goAdd,
      change,
      del
    };
  }
};
if (!Array) {
  const _component_van_button = common_vendor.resolveComponent("van-button");
  const _component_van_dialog = common_vendor.resolveComponent("van-dialog");
  (_component_van_button + _component_van_dialog)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.t(item.phone),
        c: common_vendor.t(item.address),
        d: common_vendor.o(($event) => $data.change(item)),
        e: common_vendor.o(($event) => $data.del(item)),
        f: index
      };
    }),
    b: common_vendor.o($data.goAdd),
    c: common_vendor.p({
      round: true,
      block: true,
      type: "primary",
      color: "#a92c1e"
    }),
    d: common_vendor.p({
      id: "van-dialog"
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/HBuilderProjects/volunService/pages/functions/address/address.vue"]]);
wx.createPage(MiniProgramPage);
