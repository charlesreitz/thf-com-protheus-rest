import { Component, ViewChild, OnInit } from '@angular/core';

import { ThfDialogService } from '@totvs/thf-ui/services/thf-dialog/thf-dialog.service';
import { ThfModalComponent } from '@totvs/thf-ui/components/thf-modal/thf-modal.component';
import { ThfTableAction, ThfTableColumn } from '@totvs/thf-ui/components/thf-table';
import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification/thf-notification.service';

import { PedidosService } from './pedidos.service';


@Component({
  selector: 'app-pedidos',  
  templateUrl: './pedidos.component.html',
  providers: [ PedidosService ]
})

 export class PedidosComponent {

  actions: Array<ThfTableAction> = [
    { action: this.details.bind(this), label: 'Details' },
    { action: this.discount.bind(this), label: 'Apply Discount', disabled: this.validateDiscount.bind(this) },
  ];
  columns: Array<ThfTableColumn> = this.sampleAirfare.getColumns();
  detail: any;
  items: Array<any> = this.sampleAirfare.getItems();

  @ViewChild(ThfModalComponent) thfModal: ThfModalComponent;

  constructor(
    private sampleAirfare: PedidosService,
    private thfNotification: ThfNotificationService,
    private thfDialog: ThfDialogService) { }
    
    

  addToCart() {
    const selectedItems = this.items.filter(item => item.$selected);

    if (selectedItems.length > 0) {
      this.thfDialog.confirm({
        title: 'Add to cart' ,
        message: `Would you like to add ${selectedItems.length} items to cart?`,
        confirm: () => this.confirmItems(selectedItems),
        cancel: () => {}
      });
    }
  }

  confirmItems(selectedItems: Array<any>) {
    selectedItems.forEach(item => {
      switch (item.status) {
        case 'available':
          this.thfNotification.success(`${this.getDescription(item)} added succesfully`);
          break;
        case 'reserve':
          this.thfNotification.warning(`${this.getDescription(item)} added succesfully, verify your e-mail to complete reservation`);
          break;
        case 'closed':
          this.thfNotification.error(`${this.getDescription(item)} is closed and not available anymore`);
          break;
      }
    });
    this.items.forEach(item => item.$selected = false);
  }

  details(item) {
    this.detail = item;
    this.thfModal.open();
  }

  discount(item) {
    if (!item.disableDiscount) {
      item.value = item.value - (item.value * 0.2);
      item.disableDiscount = true;
    }
  }

  private getDescription(item: any) {
    return `Airfare to ${item.destination} - ${item.initials}`;
  }

  private validateDiscount(item) {
    return item.disableDiscount;
  }

}
