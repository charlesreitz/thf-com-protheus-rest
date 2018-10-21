import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ThfBreadcrumb } from '@totvs/thf-ui/components/thf-breadcrumb';
import { ThfDialogService } from '@totvs/thf-ui/services/thf-dialog/thf-dialog.service';
import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification/thf-notification.service';
import { SA1 } from '../clientes/SA1';
 import { ClientesService } from '../clientes/clientes.service';


@Component({
  selector: 'app-clientes-details',
  templateUrl: './clientes-details.component.html',
  providers: [ClientesService]
})
export class ClientesDetailsComponent implements OnInit {

  public readonly breadcrumb: ThfBreadcrumb = {
    items: [
      { label: 'Home', action: this.beforeRedirect.bind(this) },
      { label: 'Clientes', link: '/clientes' },
      { label: 'Incluir Clientes', link: '/clientes-details' }
    ]
  };

  A1_COD = '010101';
  A1_LOJA = '01';
  A1_NOME = 'KAJSDFHAKJSHFKJHASKJHFA';
  A1_NREDUZ = 'KJASDKFJHASKJDHFKAJSHFKLJAHSDFKJ';
  A1_CGC = '063245429699993';

  @ViewChild('formEditCliente') formEditCliente: NgForm;

  constructor(
    private route: Router,
    private thfDialog: ThfDialogService,
    private thfNotification: ThfNotificationService,
    private clientesService: ClientesService
  ) { }

  ngOnInit() {
    this.initialize();
  }

  cancel() {
    this.thfDialog.confirm({
      title: `Confirmar`,
      message: `O formuário não foi salvo, tem certeza que deseja cancelar?`,
      confirm: () => this.route.navigate(['/'])
    });
    // this.beforeRedirect.bind(this)
    // this.router.navigate(['/clientes-details']);
    // this.initialize();
  }

  initialize() {
    //this.A1_COD = '010101';
    //this.A1_LOJA = '01';
    // this.birthDate = new Date(1978, 11, 26);
    // this.email = 'john.doe@totvs.com.br';
    // this.fathersName = 'Mike Doe';
    // this.genre = 'male';
    // this.graduation = 'College Degree';
    // this.mothersName = 'Jane Doe';
    // this.name = 'John Doe';
    // this.nationality = 'USA';
    // this.nickname = 'John';
    // this.placeOfBirth = 'Colorado';
    // this.userId = 122635;
  }

  save() {
    console.log(this.formEditCliente);
    this.thfNotification.success(`Salvo`);
    //this.clientesService.putClientes(newHero).subscribe(clientes => this.clientes.push(hero));
    //this.clientesService.putClientes(this.formEditCliente).subscribe(clientes => clientes.push(clientes));
    this.clientesService.putClientes(this.formEditCliente);
  }

  private beforeRedirect(itemBreadcrumbLabel) {

    if (this.formEditCliente.valid) {
      this.route.navigate(['/']);
    } else {

      this.thfDialog.confirm({
        title: `Confirmar saida para ${itemBreadcrumbLabel}`,
        message: `O formuário não foi salvo, tem certeza que deseja cancelar?`,
        confirm: () => this.route.navigate(['/'])
      });

    }

  }

}