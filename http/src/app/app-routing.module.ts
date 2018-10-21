import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PedidosComponent } from './pedidos/pedidos';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesDetailsComponent } from './clientes-details/clientes-details.component';
import { AuthGuardComponent } from './auth-guard/auth-guard.component';



const routes: Routes = [
  // { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
  { path: 'hello-world', component: HelloWorldComponent },
  { path: 'clientes', component: ClientesComponent, pathMatch: 'full' },
  { path: 'clientes-details', component: ClientesDetailsComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
