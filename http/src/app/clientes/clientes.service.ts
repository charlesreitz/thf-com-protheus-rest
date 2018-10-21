import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ThfTableColumn, ThfTableDetail } from '@totvs/thf-ui/components/thf-table';
import { SA1 } from './SA1';
import { ThfBreadcrumb } from '@totvs/thf-ui/components/thf-breadcrumb';
const headers = { 'Content-Type': 'application/json', 'X-Totvs-No-Count-Pending-Requests': 'false', 'X-Totvs-Screen-Lock': 'true' };

@Injectable()
export class ClientesService {
  private configUrl = 'http://192.168.56.100/wsclientes';

  private CLIENTES: SA1[] = [
    {
      A1_COD: '123',
      A1_LOJA: '123',
      A1_NOME: '123',
      A1_NREDUZ: '123',
      A1_CGC: '123',
    },
    {
      A1_COD: '123',
      A1_LOJA: '123',
      A1_NOME: '123',
      A1_NREDUZ: '123',
      A1_CGC: '123',
    }
  ];

  constructor(private http: HttpClient) {}
  getClienMock(): SA1[] {
    return this.CLIENTES;
  }
  getClientes() {
    return this.http.get(this.configUrl, { headers: headers } );
  }

  putClientes(clientes) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    // this.http.post(this.configUrl, JSON.stringify(clientes), httpOptions).subscribe();
    // this.http.put('http://192.168.56.100/WSCLIENTES/v1', JSON.stringify(clientes), httpOptions).subscribe();
    this.http.put('http://192.168.56.100/WSCLIENTES/v1', JSON.stringify(clientes), httpOptions);
  }

  getColumns(): Array<ThfTableColumn> {
    return [
      { column: 'A1_COD',     label: 'Código'},
      { column: 'A1_LOJA',    label: 'Loja' },
      { column: 'A1_NOME',    label: 'Nome' },
      { column: 'A1_NREDUZ',  label: 'Nome Reduzido' },
      { column: 'A1_CGC',     label: 'CNPJ/CPF' }
    ];
  }
}
