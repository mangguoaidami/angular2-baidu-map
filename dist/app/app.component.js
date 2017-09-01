"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("./../src/index");
var AppComponent = (function () {
    function AppComponent() {
        this.center1 = {
            longitude: 120.195567,
            latitude: 30.184510
        };
        this.markers1 = [
            {
                longitude: 120.195677,
                latitude: 30.184529,
                title: 'I am here',
                content: 'hellow word',
                autoDisplayInfoWindow: true,
                icon: 'app/assets/img/favicon.ico',
                width: 32,
                height: 32
            },
            {
                longitude: 120.193777,
                latitude: 30.184620,
                title: 'Where2',
                content: 'Put description here2',
                autoDisplayInfoWindow: false,
                icon: 'app/assets/img/favicon.ico',
                width: 32,
                height: 32 //marker图标大小
            }
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.opts = {
            center: this.center1,
            zoom: 17,
            markers: this.markers1,
            geolocationCtrl: {
                anchor: index_1.ControlAnchor.BMAP_ANCHOR_BOTTOM_RIGHT
            },
            scaleCtrl: {
                anchor: index_1.ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT
            },
            overviewCtrl: {
                isOpen: true
            },
            navCtrl: {
                type: index_1.NavigationControlType.BMAP_NAVIGATION_CONTROL_LARGE
            }
        };
        this.offlineOpts = {
            retryInterval: 5000,
            txt: 'NO-NETWORK'
        };
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <div class=\"jumbotron text-center\">\n      <h1>angular2-baidu-map!</h1>\n      <p>{{ message }}</p>\n    </div>\n    <baidu-map ak=\"kh5SVFonv5WexjP2KjLRWIZ64C3DYGlR\" [options]=\"opts\" [offline]=\"offlineOpts\"></baidu-map>\n  ",
        styles: ["\n      baidu-map{\n          width: 100%;\n          height: 600px;\n          display: block;\n      }\n    "]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map