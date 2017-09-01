"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var map_1 = require("./components/map");
var BaiduMapModule = (function () {
    function BaiduMapModule() {
    }
    return BaiduMapModule;
}());
BaiduMapModule = __decorate([
    core_1.NgModule({
        declarations: [
            map_1.BaiduMap
        ],
        exports: [
            map_1.BaiduMap
        ]
    })
], BaiduMapModule);
exports.BaiduMapModule = BaiduMapModule;
var ControlAnchor_1 = require("./enum/ControlAnchor");
exports.ControlAnchor = ControlAnchor_1.ControlAnchor;
__export(require("./enum/NavigationControlType"));
var MapStatus_1 = require("./enum/MapStatus");
exports.MapStatus = MapStatus_1.MapStatus;
//# sourceMappingURL=index.js.map