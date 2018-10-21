
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ThfModule } from '@totvs/thf-ui';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { AppRoutingModule } from './app-routing.module';
import { ClientesComponent } from './clientes/clientes.component';

import { PedidosComponent } from './pedidos/pedidos';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientesDetailsComponent } from './clientes-details/clientes-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardComponent } from './auth-guard/auth-guard.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';




@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ClientesComponent,
    PedidosComponent,
    DashboardComponent,
    ClientesDetailsComponent,
    PageNotFoundComponent,
    LoginComponent,
    ToolBarComponent
  ],
  imports: [
    BrowserModule,
    ThfModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // providers: [ClientesService],
   providers: [AuthGuardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
