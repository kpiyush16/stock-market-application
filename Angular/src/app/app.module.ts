import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { UiSwitchModule } from 'ngx-toggle-switch';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { StockMarketComponent } from './components/stock-market/stock-market.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CompanyComponent } from './components/company/company.component';
import { UserComponent } from './components/user/user.component';
import { ComparisonComponent } from './components/comparison/comparison.component';
import { IpoManageComponent } from './components/ipo-manage/ipo-manage.component';
import { StockExchangeService } from './services/stock-exchange.service';
import { UserService } from "./services/user.service";
import { CompanyService } from "./services/company.service";
import { StockComponent } from './components/stock-market/stock/stock.component';
import { StockExchangeComponent } from './components/stock-market/stock-exchange/stock-exchange.component';
import { AddEditComponent } from './components/stock-market/stock/add-edit/add-edit.component';
import { ListComponent } from './components/stock-market/stock/list/list.component';
import {JwtInterceptor} from './helper/http-interceptor';
import {ErrorInterceptor} from './helper/error-interceptor';
import { AuthenticationService } from './services/authentication.service';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    StockMarketComponent,
    DashboardComponent,
    CompanyComponent,
    UserComponent,
    ComparisonComponent,
    IpoManageComponent,
    StockComponent,
    StockExchangeComponent,
    AddEditComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    // BrowserAnimationsModule,
    // UiSwitchModule
  ],
  // exports: [
  //   MatSidenavModule
  // ],
  providers: [
    StockExchangeService,
    UserService,
    CompanyService,
    AuthenticationService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
