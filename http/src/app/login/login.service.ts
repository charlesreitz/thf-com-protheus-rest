import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable()
export class LoginService {
  
  constructor(private http: HttpClient) { }
  // https://medium.com/@matheus.mbizutti/angular-httpinterceptor-34f7b7847ab1
  getAuth(x1) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    // this.http.post(this.configUrl, JSON.stringify(clientes), httpOptions).subscribe();
    // this.http.put('http://192.168.56.100/WSCLIENTES/v1', JSON.stringify(clientes), httpOptions).subscribe();
    this.http.post('http://192.168.56.100/TSCAuth/v1', JSON.stringify(x1), httpOptions);
    
  }

}
