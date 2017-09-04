import {MapOptions} from '../interfaces/Options';

import {ControlAnchor} from '../enum/ControlAnchor';
import {Size} from '../interfaces/Size';
import {NavigationControlType} from '../enum/NavigationControlType';

export const setNavigationCtrl = function(map: any, opts: MapOptions) {
    var BMap: any = (<any>window)['BMap'];
    //enable NavigationControl
    var navOpts: any = {};
    if (typeof opts.navCtrl !== 'boolean') {
        var ctrl = <NavigationControlOptions>opts.navCtrl;
        if (ctrl.anchor) {
            navOpts.anchor = ctrl.anchor;
        }
        if (ctrl.offset) {
            navOpts.offset = new BMap.Size(ctrl.offset.width, ctrl.offset.height);
        }
        if (typeof ctrl.type !== 'undefined') {
            navOpts.type = ctrl.type;
        }
        if (typeof ctrl.showZoomInfo !== 'undefined') {
            navOpts.showZoomInfo = ctrl.showZoomInfo;
        }
        if (typeof ctrl.enableGeolocation !== 'undefined') {
            navOpts.enableGeolocation = ctrl.enableGeolocation;
        }
        map.addControl(new BMap.NavigationControl(navOpts));
    } else if (opts.navCtrl) {
        map.addControl(new BMap.NavigationControl());
    }
};

export interface NavigationControlOptions {
    anchor?: ControlAnchor;     //控件的停靠位置
    offset?: Size;      //控件的水平偏移值
    type?: NavigationControlType;       //平移缩放控件的类型
    showZoomInfo?: boolean;     //是否显示级别提示信息
    enableGeolocation?: boolean;   //控件是否集成定位功能，默认为false
    
};
