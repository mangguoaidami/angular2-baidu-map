# Angular 2 Baidu Map

angular2-baidu-map插件应用

###百度地图可用API：

- Protocol            协议，你想指定如何加载百度地图。 可选择： <code  >http:</code>, <code  >https:</code>
- options           用于绘制地图的选项

- offline               在无网络可用时应用的选项
- onMapLoaded           表达式在回调时进行评估，（Event对象可用作map实例）
- onMarkerClicked       Expression在回调时进行评估，（Event对象可用作标记实例）
- onClicked         表达式来评估回调，（事件对象是地图点击的事件实例）

## About

- **Transpiling ES6**: TypeScript compiled via npm script
    + Compiled from the `app/` folder to the `dist/` folder
- **Loading Imports**: SystemJS is the loader server

## Requirements

- [node and npm](https://nodejs.org)

## Installation

- Clone the repo: `git clone git@github.com:scotch-io/angular2-starter-basic`
- Choose the new directory: `cd angular2-starter-basic`
- Install dependencies: `npm install`
- Start the app: `npm start`
- View the app: <http://localhost:3000>

## Usage

###有两种可以在你的angular2项目中引入：
- 第一种：
- 1、 $ npm install
- 2、 在你的app.module.ts中添加：
-         import { BaiduMapModule } from 'angular2-baidu-map'
-         并且添加
-         imports: [ BaiduMapModule ]
- 3、 最后配置component组件完成：$ npm start 
- 第二种：
- 1、 $ npm install
- 2、 复制node_moduels/angular2-baidu-map/src到你的根目录下
- 4、 在你的app.module.ts中添加：
-         import { BaiduMapModule } from './../src/index';
-         并且添加
-         imports: [ BaiduMapModule ]
- 5、 最后配置component组件完成：$ npm start 