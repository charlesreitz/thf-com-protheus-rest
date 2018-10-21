import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ThfMenuItem } from '@totvs/thf-ui/components/thf-menu';
import { ThfDialogService } from '@totvs/thf-ui/services/thf-dialog/thf-dialog.service';
import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification/thf-notification.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'app';
  menuItemSelected: string;

  menus: Array<ThfMenuItem> = [
    { label: 'Dash Board', link: './dashboard', action: this.printMenuAction},
    { label: 'Hello World', link: './hello-world', action: this.printMenuAction },
    { label: 'Clientes', link: './clientes', action: this.printMenuAction },
    { label: 'Clientes Details', link: './clientes-details', action: this.printMenuAction },
    { label: 'Pedidos', link: './pedidos', icon: 'user', action: this.printMenuAction }
  ];

  constructor(private thfDialog: ThfDialogService,
              private thfNotification: ThfNotificationService,
              private router: Router
    ) { }

  printMenuAction(menu: ThfMenuItem) {
    this.menuItemSelected = menu.label;
  }

}

