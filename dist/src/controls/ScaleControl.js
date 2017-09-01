"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setScaleCtrl = function (map, opts) {
    var BMap = window['BMap'];
    //enable ScaleControl
    var scaleOpts = {};
    if (typeof opts.scaleCtrl !== 'boolean') {
        var ctrl = opts.scaleCtrl;
        if (ctrl.anchor) {
            scaleOpts.anchor = ctrl.anchor;
        }
        if (ctrl.offset) {
            scaleOpts.offset = new BMap.Size(ctrl.offset.width, ctrl.offset.height);
        }
        map.addControl(new BMap.ScaleControl(scaleOpts));
    }
    else if (opts.scaleCtrl) {
        map.addControl(new BMap.ScaleControl());
    }
};
//# sourceMappingURL=ScaleControl.js.map