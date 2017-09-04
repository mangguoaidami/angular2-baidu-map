"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import {ControlAnchor} from '../enum/ControlAnchor';
// import {Size} from '../interfaces/Size';
// import {NavigationControlType} from '../enum/NavigationControlType';
exports.setpolylineCtrl = function (map, opts) {
    var BMap = window['BMap'];
    //enable NavigationControl
    var polylineOpts = {};
    if (typeof opts.polyCtrl !== 'boolean') {
        var ctrl = opts.polyCtrl;
        // if (ctrl.setPath) {
        //     polylineOpts.setPath = ctrl.setPath;
        // }
        if (ctrl.setStrokeColor) {
            polylineOpts.setStrokeColor = ctrl.setStrokeColor;
        }
        if (typeof ctrl.setStrokeOpacity !== 'undefined') {
            polylineOpts.type = ctrl.setStrokeOpacity;
        }
        if (typeof ctrl.setStrokeWeight !== 'undefined') {
            polylineOpts.showZoomInfo = ctrl.setStrokeWeight;
        }
        if (typeof ctrl.setStrokeStyle !== 'undefined') {
            polylineOpts.enableGeolocation = ctrl.setStrokeStyle;
        }
        map.addOverlay(new BMap.Polyline([
            new BMap.Point(120.195677, 30.184529),
            new BMap.Point(120.193777, 30.184620),
        ], ctrl));
        // console.log(ctrl)
    }
    else if (opts.polyCtrl) {
        map.addOverlay(new BMap.Polyline());
    }
};
//# sourceMappingURL=PolylineControl.js.map