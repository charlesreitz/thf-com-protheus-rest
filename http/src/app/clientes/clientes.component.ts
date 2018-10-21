import { Component, ViewChild, OnInit } from '@angular/core';
import { ThfDialogService } from '@totvs/thf-ui/services/thf-dialog/thf-dialog.service';
import { ThfModalComponent } from '@totvs/thf-ui/components/thf-modal/thf-modal.component';
import { ThfTableAction, ThfTableColumn } from '@totvs/thf-ui/components/thf-table';
import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification/thf-notification.service';
import { ClientesService } from './clientes.service';
import { ThfCheckboxGroupOption, ThfRadioGroupOption } from '@totvs/thf-ui/components/thf-field';
import { SA1 } from './SA1';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThfModalAction } from '@totvs/thf-ui/components/thf-modal';
import { ThfBreadcrumb } from '@totvs/thf-ui/components/thf-breadcrumb';
import { ThfPageAction } from '@totvs/thf-ui/components/thf-page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './clientes.component.html',
  providers: [ClientesService]
})

export class ClientesComponent {
  reactiveForm: FormGroup;

  public readonly actions: Array<ThfPageAction> = [
    { label: 'Incluir', action: this.buttonAddCLientes, icon: 'thf-icon thf-icon-plus' }
  ];
 // <a [routerLink]="['/service']"> <button class="btn btn-info"> link to other page </button></a>


  public readonly breadcrumb: ThfBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Clientes', link: '/clientes' }
    ]
  };

  public readonly modalPrimaryAction: ThfModalAction = {
    action: () => this.reactiveFormModal.close(),
    label: 'Close'
  };

  @ViewChild('reactiveFormData') reactiveFormModal: ThfModalComponent;
  @ViewChild(ThfModalComponent) thfModal: ThfModalComponent;

  constructor(
    private router: Router,
    private clienteService: ClientesService,
    private thfNotification: ThfNotificationService,
    private thfDialog: ThfDialogService,
    private fb: FormBuilder) {
    this.createReactiveForm();
  }

  columns: Array<ThfTableColumn> = this.clienteService.getColumns();
  detail: any;
  // clientes: Array<any> = this.getClientes();
  public clientes: Array<SA1> = [];
  primaryAction: ThfModalAction = {
    action: () => {
      this.thfModal.close();
    },
    label: 'Confirm'
  };
  ngOnInit() {
    this.getClientes();
  }

  createReactiveForm() {
    this.reactiveForm = this.fb.group({
      name: ['', Validators.compose([
        Validators.required, Validators.minLength(5), Validators.maxLength(30)
      ])],
      address: ['', Validators.compose([
        Validators.required, Validators.minLength(5), Validators.maxLength(50)
      ])],
      number: ['', Validators.compose([
        Validators.required, Validators.min(1), Validators.max(99999)
      ])],
      email: ['', Validators.required],
      website: ['', Validators.required]
    });
  }

  saveForm() {
    this.reactiveFormModal.open();
    // this.thfDialog.alert({title: 'Totvs Button', message: 'Hello THF World!!!'});
  }

  buttonAddCLientes() {
    this.router.navigate(['/clientes-details']);
  }

  getClientes() {
    this.clienteService.getClientes().subscribe(
      data => { this.clientes = data['clientes']; },
      err => console.error(err),
      () => console.log('done loading foods')
    );
  }



  details(item) {
    this.detail = item;
    this.thfModal.open();
  }





}
