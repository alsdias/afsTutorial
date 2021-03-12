/* @FROM: Angular documentation:
https://angular.io/guide/built-in-directives#ngModel
https://angular.io/generated/zips/built-in-directives/built-in-directives.zip
*/

import { Component, OnInit } from '@angular/core';
import { Item } from '../item-detail/item';

@Component({
  selector: 'app-child-ng',
  templateUrl: './child-ng.component.html',
  styleUrls: ['./child-ng.component.css']
})
export class ChildNgComponent implements OnInit {

  canSave =  true;
  isSpecial = true;
  isUnchanged = true;

  isActive = true;
  nullCustomer = null;
  currentCustomer = {
    name: 'Laura'
  };

  item: Item; // defined to demonstrate template context precedence
  items: Item[];

  currentItem: Item;

  // trackBy change counting
  itemsNoTrackByCount   = 0;
  itemsWithTrackByCount = 0;
  itemsWithTrackByCountReset = 0;
  itemIdIncrement = 1;

  currentClasses: {};
  currentStyles: {};

  constructor() { }

  ngOnInit(): void {
    this.resetItems();
    this.setCurrentClasses();
    this.setCurrentStyles();
    this.itemsNoTrackByCount = 0;
  }

  setUppercaseName(name: string): void {
    this.currentItem.name = name.toUpperCase();
  }

  setCurrentClasses(): void {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses =  {
      saveable: this.canSave,
      modified: !this.isUnchanged,
      special:  this.isSpecial
    };
  }

  setCurrentStyles(): void {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style':  this.canSave      ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
      'font-size':   this.isSpecial    ? '24px'   : '12px'
    };
  }

  isActiveToggle(): void {
    this.isActive = !this.isActive;
  }

  giveNullCustomerValue(): void {
    this.nullCustomer = 'Kelly';
  }

  resetItems(): void {
    this.items = Item.items.map(item => item.clone());
    this.currentItem = this.items[0];
    this.item = this.currentItem;
  }

  resetList(): void {
    this.resetItems();
    this.itemsWithTrackByCountReset = 0;
    this.itemsNoTrackByCount = ++this.itemsNoTrackByCount;
  }

  changeIds(): void {
    this.items.forEach(i => i.id += 1 * this.itemIdIncrement);
    this.itemsWithTrackByCountReset = -1;
    this.itemsNoTrackByCount = ++this.itemsNoTrackByCount;
    this.itemsWithTrackByCount = ++this.itemsWithTrackByCount;
  }

  clearTrackByCounts(): void {
    this.resetItems();
    this.itemsNoTrackByCount = 0;
    this.itemsWithTrackByCount = 0;
    this.itemIdIncrement = 1;
  }
  trackByItems(index: number, item: Item): number { return item.id; }

  trackById(index: number, item: any): number { return item.id; }

  getValue(target: EventTarget): string {
    return (target as HTMLInputElement).value;
  }

}
