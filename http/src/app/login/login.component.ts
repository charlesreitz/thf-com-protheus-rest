import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

// import { Subscription } from 'rxjs';

import { ThfDialogService } from '@totvs/thf-ui/services/thf-dialog/thf-dialog.service';
// import { ThfI18nService } from '@totvs/thf-ui/services/thf-i18n';
import { ThfPageLoginCustomField, ThfPageLoginLiterals } from '@totvs/thf-ui/components/thf-page';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnDestroy, OnInit {

  // literalsI18n: ThfPageLoginLiterals;
  loading = false;

  // private i18nSubscription: Subscription;

  constructor(
    private thfDialog: ThfDialogService,
    private router: Router) { }

  ngOnDestroy() {
  }

  ngOnInit() {
  }

  checkLogin(formData) {
    this.loading = true;

    // setTimeout(() => {
      if (formData.login === 'dev' && formData.password === '1989') {
        // this.thfDialog.alert({
        //  ok: () => this.loading = false,
        //  title: 'Access released',
        //  message: 'You are on vacation, take time to rest.'
        // });
        localStorage['token'] = 'xptoh26410x5=50';
        this.router.navigate(['/dashboard']);
        // this.router.navigate(['/clientes-details']);

      } else {
        this.thfDialog.alert({
          ok: () => this.loading = false,
          title: 'Acesso Negado',
          message: 'Informações inválidas para o Login, informa um usuário e senha váido'

        });
      }
    // }, 3000);

  }

}