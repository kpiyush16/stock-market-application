import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    IpoManageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    StockExchangeService,
    UserService,
    CompanyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
