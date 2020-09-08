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
import { JwtInterceptor } from './helper/http-interceptor';
import { ErrorInterceptor } from './helper/error-interceptor';
import { AuthenticationService } from './services/authentication.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MAT_DATE_LOCALE} from '@angular/material/core';
// import {MatMomentDateModule} from '@angular/material/';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS} from '@angular/material/radio';
import { ProfileComponent } from './components/profile/profile.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { UpdateCompanyComponent } from './components/update-company/update-company.component';
import { ViewCompaniesComponent } from './components/view-companies/view-companies.component';
import { ViewSectorsComponent } from './components/view-sectors/view-sectors.component';
import { AddSectorComponent } from './components/add-sector/add-sector.component';
import { SectorComponent } from './components/sector/sector.component';
import { UpdateSectorComponent } from './components/update-sector/update-sector.component';
import { AddCompanySectorComponent } from './components/add-company-sector/add-company-sector.component';
import { DeleteCompanySectorComponent } from './components/delete-company-sector/delete-company-sector.component';
import { AddCompanyBodComponent } from './components/add-company-bod/add-company-bod.component';
import { DeleteCompanyBodComponent } from './components/delete-company-bod/delete-company-bod.component';
import { ViewCompanyStockExchangeComponent } from './components/view-company-stock-exchange/view-company-stock-exchange.component';
import { AddCompanyStockExchangeComponent } from './components/add-company-stock-exchange/add-company-stock-exchange.component';
import { DeleteCompanyStockExchangeComponent } from './components/delete-company-stock-exchange/delete-company-stock-exchange.component';
import { SuperCompanyComponent } from './components/super-company/super-company.component';
import { ChartsModule } from 'ng2-charts';
import { DatePipe } from '@angular/common';

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
    ProfileComponent,
    EditContactComponent,
    AddCompanyComponent,
    UpdateCompanyComponent,
    ViewCompaniesComponent,
    ViewSectorsComponent,
    AddSectorComponent,
    SectorComponent,
    UpdateSectorComponent,
    AddCompanySectorComponent,
    DeleteCompanySectorComponent,
    AddCompanyBodComponent,
    DeleteCompanyBodComponent,
    ViewCompanyStockExchangeComponent,
    AddCompanyStockExchangeComponent,
    DeleteCompanyStockExchangeComponent,
    SuperCompanyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatListModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatRadioModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    ChartsModule,
    // UiSwitchModule
  ],
  providers: [
    StockExchangeService,
    UserService,
    CompanyService,
    AuthenticationService,
    DatePipe,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
