import { Component, Input, Output, OnInit } from '@angular/core';

@Component({
    selector: 'map-presentation',
    template: `
        
    `
})
export class MainApp implements OnInit {

    opts: any;

    ngOnInit() {}

    /**
     * the map will be pointed to
     * new coordinate once click
     * the button
     */
    // updateCoordinate(e: MouseEvent){
    //     this.opts = {
    //         center: {
    //             longitude: 121.500885,
    //             latitude: 31.190032
    //         }
    //     };
    // }
}