import { Component } from '@angular/core';
import { OfflineOptions, ControlAnchor, NavigationControlType } from './../src/index';

@Component({
  selector: 'my-app',
  template: `
    <div class="jumbotron text-center">
      <h1>angular2-baidu-map!</h1>
      <p>{{ message }}</p>
    </div>
    <baidu-map ak="kh5SVFonv5WexjP2KjLRWIZ64C3DYGlR" [options]="opts" [offline]="offlineOpts"></baidu-map>
  `,
    styles: [`
      baidu-map{
          width: 100%;
          height: 600px;
          display: block;
      }
    `]
})

export class AppComponent {
  opts: any;
  offlineOpts: OfflineOptions;
  private center1 = {       //30.184510, 120.195567
    longitude: 120.195567,
    latitude: 30.184510
  };

  poly1 = [120.195677, 30.184529];
  poly2 = [120.193777, 30.184620]

  private markers1 = [
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
          longitude: 120.193777,    //30.184620, 120.193777
          latitude: 30.184620,
          title: 'Where2',
          content: 'Put description here2',
          autoDisplayInfoWindow: false,   //是否默认显示文本信息
          icon: 'app/assets/img/favicon.ico',//marker图标资源
          width: 32, //marker图标大小
          height: 32 //marker图标大小
      }
  ];

  ngOnInit() {
      this.opts = {
          center: this.center1,
          zoom: 17,
          markers: this.markers1,
          geolocationCtrl: {
              anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_RIGHT
          },
          scaleCtrl: {
              anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT
          },
          overviewCtrl: {
              isOpen: true
          },
          navCtrl: {
              type: NavigationControlType.BMAP_NAVIGATION_CONTROL_LARGE
          },
          polyCtrl : {
            strokeColor:"red",
             strokeWeight:5,
              strokeOpacity:0.5
          }
      };

      this.offlineOpts = {
          retryInterval: 5000,
          txt: 'NO-NETWORK'
      };
  }
}