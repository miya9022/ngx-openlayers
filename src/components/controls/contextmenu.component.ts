import { Component, OnInit, Input } from '@angular/core';
import { control } from 'openlayers';
import { MapComponent } from '../map.component';

declare var ContextMenu: any;

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
      width: this.width,
      defaultItems: this.defaultItems,
      items: this.menus
    });
    this.map.instance.addControl(this.instance);
  }
}
