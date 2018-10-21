import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThfDialogService } from '@totvs/thf-ui/services/thf-dialog/thf-dialog.service';
import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification/thf-notification.service';
import { ThfToolbarAction, ThfToolbarProfile } from '@totvs/thf-ui/components/thf-toolbar';

@Component({
  selector: 'app-toolbar',
  templateUrl: './tool-bar.component.html',
  providers: [ThfNotificationService]
})
export class ToolBarComponent {
  notificationActions: Array<ThfToolbarAction> = [
    // { icon: 'thf-icon-totvs', label: 'THF news, stay tuned!', type: 'danger', action: item => this.onClickNotification(item) },
    // { icon: 'thf-icon-message', label: 'New message', type: 'danger', action: item => this.openDialog(item) },
    ];

  profile: ThfToolbarProfile = {
    avatar: 'https://thf.totvs.com.br/assets/graphics/logo-thf.png',
    subtitle: 'dev@totvs.com.br',
    title: 'Mr. Dev Totvs'
  };

  profileActions: Array<ThfToolbarAction> = [
    { icon: 'thf-icon-user', label: 'User data', action: item => this.showAction(item) },
    { icon: 'thf-icon-company', label: 'Company data', action: item => this.showAction(item) },
    { icon: 'thf-icon-settings', label: 'Settings', action: item => this.showAction(item) },
    { icon: 'thf-icon-exit', label: 'Exit', type: 'danger', separator: true, action: item => this.showAction(item) }
  ];

  title: string = '';

  constructor(private thfDialog: ThfDialogService,
     private thfNotification: ThfNotificationService,
     private router: Router) { }

  getNotificationNumber() {
    return this.notificationActions.filter(not => not.type === 'danger').length;
  }

  onClickNotification(item: ThfToolbarAction) {
    window.open('https://thf.totvs.com.br/dev', '_blank');

    item.type = 'default';
  }

  openDialog(item: ThfToolbarAction) {
    this.thfDialog.alert({
      title: 'Welcome',
      message: `Hello Mr. Dev! Congratulations, you are a TOTVER!`,
      ok: undefined
    });

    item.type = 'default';
  }

  showAction(item: ThfToolbarAction): void {
    // this.thfNotification.success(`Action clicked: ${item.label}`);
    // localStorage.clear();
    this.router.navigate(['/login']);
  }
}