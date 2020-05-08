import { Component, OnInit, Input } from '@angular/core';
import { control } from 'openlayers';
import { MapComponent } from '../map.component';

declare const ContextMenu: any;

export interface ContextMenuItem {
  text: string;
  classname?: string;
  icon?: string;
  callback?: Function;
  items?: ContextMenuItem[];
};

@Component({
  selector: 'aol-control-contextmenu',
  template: ``,
})
export class ControlContextMenuComponent implements OnInit {
  public componentType: string = 'control';
  instance: control.Control;

  @Input()
  width: number = 170;

  @Input()
  defaultItems: boolean = false;

  @Input()
  menus: any[];

  constructor(
    private map: MapComponent
  ) { }

  ngOnInit(): void {
    this.instance = new ContextMenu({
      width: 170,
      defaultItems: true, // defaultItems are (for now) Zoom In/Zoom Out
      items: [
        {
          text: 'Center map here',
          // callback: center // `center` is your callback function
        },
        {
          text: 'Add a Marker',
          icon: 'img/marker.png',  // this can be relative or absolute
          // callback: marker
        },
        '-' // this is a separator
      ]
    });
    this.map.instance.addControl(this.instance);
  }
}
