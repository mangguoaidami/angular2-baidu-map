"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MapStatus_1 = require("./enum/MapStatus");
exports.loader = function (ak, offlineOpts, callback, protocol) {
    var realProtocol = protocol || location.protocol;
    var MAP_URL = realProtocol + "//api.map.baidu.com/api?v=2.0&ak=" + ak + "&callback=baidumapinit&s=" + (realProtocol === 'https:' ? 1 : 0);
    var win = window;
    var baiduMap = win['baiduMap'];
    if (baiduMap && baiduMap.status === MapStatus_1.MapStatus.LOADING) {
        return baiduMap.callbacks.push(callback);
    }
    if (baiduMap && baiduMap.status === MapStatus_1.MapStatus.LOADED) {
        return callback();
    }
    win['baiduMap'] = { status: MapStatus_1.MapStatus.LOADING, callbacks: [] };
    win['baidumapinit'] = function () {
        win['baiduMap'].status = MapStatus_1.MapStatus.LOADED;
        callback();
        win['baiduMap'].callbacks.forEach(function (cb) { return cb(); });
        win['baiduMap'].callbacks = [];
    };
    var createTag = function () {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = MAP_URL;
        script.onerror = function () {
            Array.prototype
                .slice
                .call(document.querySelectorAll('baidu-map div'))
                .forEach(function (node) {
                node.style.opacity = 1;
            });
            document.body.removeChild(script);
            setTimeout(createTag, offlineOpts.retryInterval);
        };
        document.body.appendChild(script);
    };
    createTag();
};
//# sourceMappingURL=Loader.js.map