"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    let isAccount = common_vendor.ref(true);
    const goSignin = () => {
      console.log(1);
      common_vendor.index.reLaunch({
        url: "/pages/signin/signin"
      });
    };
    function goAccount() {
      isAccount.value = true;
      console.log(isAccount.value);
    }
    function goPwd() {
      isAccount.value = false;
      console.log(isAccount);
    }
    return {
      isAccount,
      goPwd,
      goAccount,
      goSignin
    };
  }
};
if (!Array) {
  const _easycom_loginByAccount2 = common_vendor.resolveComponent("loginByAccount");
  const _easycom_loginByPhone2 = common_vendor.resolveComponent("loginByPhone");
  (_easycom_loginByAccount2 + _easycom_loginByPhone2)();
}
const _easycom_loginByAccount = () => "../../components/loginByAccount/loginByAccount.js";
const _easycom_loginByPhone = () => "../../components/loginByPhone/loginByPhone.js";
if (!Math) {
  (_easycom_loginByAccount + _easycom_loginByPhone)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.isAccount,
    b: !$data.isAccount,
    c: common_vendor.o((...args) => $data.goSignin && $data.goSignin(...args)),
    d: $data.isAccount,
    e: common_vendor.o((...args) => $data.goAccount && $data.goAccount(...args)),
    f: !$data.isAccount,
    g: common_vendor.o((...args) => $data.goPwd && $data.goPwd(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b237504c"], ["__file", "D:/HBuilderProjects/volunService/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
