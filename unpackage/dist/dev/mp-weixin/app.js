"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/events/events.js";
  "./pages/market/market.js";
  "./pages/home/home.js";
  "./pages/login/login.js";
  "./pages/signin/signin.js";
  "./pages/functions/myInfo/myInfo.js";
  "./pages/functions/changePwd/changePwd.js";
  "./pages/functions/message/message.js";
  "./pages/points/pointsInfo/pointsInfo.js";
  "./pages/points/pointsExchange/pointsExchange.js";
  "./pages/functions/address/address.js";
  "./pages/functions/addAddress/addAddress.js";
  "./pages/functions/changeAddress/changeAddress.js";
  "./pages/functions/serveList/serveList.js";
  "./pages/events/pointBoard/pointBoard.js";
  "./pages/events/announce/announce.js";
  "./pages/functions/tissue/tissue.js";
  "./pages/functions/tissue/communityApply/communityApply.js";
  "./pages/functions/tissue/createTeam/createTeam.js";
  "./pages/functions/tissue/teamInfo/teamInfo.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
    {
      common_vendor.index.switchTab({
        url: "pages/index/index"
      });
    }
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
var App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/HBuilderProjects/volunService/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
