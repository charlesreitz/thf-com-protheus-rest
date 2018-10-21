import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ThfBreadcrumb } from '@totvs/thf-ui/components/thf-breadcrumb';
import { ThfDonutChartSeries, ThfPieChartSeries } from '@totvs/thf-ui/components/thf-chart';
import { ThfModalAction } from '@totvs/thf-ui/components/thf-modal';
import { ThfModalComponent } from '@totvs/thf-ui/components/thf-modal/thf-modal.component';
import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification/thf-notification.service';
import { ThfPageAction } from '@totvs/thf-ui/components/thf-page';
import { ThfTableColumn } from '@totvs/thf-ui/components/thf-table';

import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  providers: [ DashboardService ]
})
export class DashboardComponent {

  bestSellers: Array<ThfPieChartSeries> = [{ data: this.DashboardService.getBestSellers() }];
  columns: Array<ThfTableColumn> = this.DashboardService.getColumns();
  email: string = undefined;
  isSubscribed: boolean = false;
  itemsPurchased: Array<ThfDonutChartSeries> = [{ data: this.DashboardService.getItemsPurchased() }];
  products: Array<object> = this.DashboardService.getItems();

  public readonly actions: Array<ThfPageAction> = [
    { label: 'Share', action: this.modalOpen, icon: 'thf-icon-share' },
    { label: 'Enable notification', icon: 'thf-icon-notification', action: this.enableNotification, disabled: () => this.isSubscribed },
  ];

  public readonly breadcrumb: ThfBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Dashboard' }
    ]
  };

  public readonly cancelAction: ThfModalAction = {
    action: () => {
      this.modalClose();
    },
    label: 'Cancel'
  };

  public readonly shareAction: ThfModalAction = {
    action: () => {
      this.share();
    },
    label: 'Share'
  };

  @ViewChild('formShare') formShare: FormControl;
  @ViewChild(ThfModalComponent) thfModal: ThfModalComponent;

  constructor(
    private DashboardService: DashboardService,
    private thfNotification: ThfNotificationService) { }

  modalClose() {
    this.thfModal.close();
    this.formShare.reset();
  }

  modalOpen() {
    this.thfModal.open();
  }

  share() {
    if (this.formShare.valid) {
      this.thfNotification.success(`Dashboard shared successfully to: ${this.email}.`);
    } else {
      this.thfNotification.error(`Email invalid.`);
    }
    this.modalClose();
  }

  private enableNotification() {
    this.isSubscribed = true;
  }

}