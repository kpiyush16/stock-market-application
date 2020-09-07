import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { StockMarketComponent } from './components/stock-market/stock-market.component';
import { StockComponent } from './components/stock-market/stock/stock.component';
import { StockExchangeComponent } from './components/stock-market/stock-exchange/stock-exchange.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { AuthGuard } from './helper/auth-guard';
import { CompanyComponent } from './components/company/company.component';
import { AddCompanyComponent } from './components/add-company/add-company.component';
import { UpdateCompanyComponent } from './components/update-company/update-company.component';
import { ViewCompaniesComponent } from './components/view-companies/view-companies.component';
import { SectorComponent } from './components/sector/sector.component';
import { ViewSectorsComponent } from './components/view-sectors/view-sectors.component';
import { AddSectorComponent } from './components/add-sector/add-sector.component';
import { UpdateSectorComponent } from './components/update-sector/update-sector.component';
import { AddCompanySectorComponent } from './components/add-company-sector/add-company-sector.component';
import { DeleteCompanySectorComponent } from './components/delete-company-sector/delete-company-sector.component';
import { AddCompanyBodComponent } from './components/add-company-bod/add-company-bod.component';
import { DeleteCompanyBodComponent } from './components/delete-company-bod/delete-company-bod.component';
import { ViewCompanyStockExchangeComponent } from './components/view-company-stock-exchange/view-company-stock-exchange.component';
import { AddCompanyStockExchangeComponent } from './components/add-company-stock-exchange/add-company-stock-exchange.component';
import { DeleteCompanyStockExchangeComponent } from './components/delete-company-stock-exchange/delete-company-stock-exchange.component';
import { SuperCompanyComponent } from './components/super-company/super-company.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path: 'editcontact', component: EditContactComponent, canActivate:[AuthGuard],
    data:{isAdmin:[true]}
  },
//   {path: 'profile', component: ProfileComponent, canActivate:[AuthGuard],
//   children:[
//     {path: 'editcontact', component: EditContactComponent, canActivate:[AuthGuard]}
//   ]
// },
  {path: 'stock-market', 
    component: StockMarketComponent, canActivate:[AuthGuard],
    children: [
      {
        path: "stock", 
        component: StockComponent,
        // children: [
        //   {path:"", component: ListComponent},
        //   {path:"add", component: AddEditComponent},
        //   {path:"edit/:id", component: AddEditComponent}
        // ]
      },
      {path: 'stock-exchange', component: StockExchangeComponent}
    ]
  },
  {path: 'company', component: SuperCompanyComponent},
  {path: 'company/:id', component: CompanyComponent},
  {path: 'view-companies', component: ViewCompaniesComponent},
  {path: 'add-company', component: AddCompanyComponent},
  {path: 'update-company/:id', component: UpdateCompanyComponent},
  {path: 'sector/:id', component: SectorComponent},
  {path: 'view-sectors', component: ViewSectorsComponent},
  {path: 'add-sector', component: AddSectorComponent},
  {path: 'add-company-sector/:id', component: AddCompanySectorComponent},
  {path: 'delete-company-sector/:id', component: DeleteCompanySectorComponent},
  {path: 'update-sector/:id', component: UpdateSectorComponent},
  {path: 'add-company-bod/:id', component: AddCompanyBodComponent},
  {path: 'delete-company-bod/:id', component: DeleteCompanyBodComponent},
  {path: 'view-company-stock-exchange/:id', component: ViewCompanyStockExchangeComponent},
  {path: 'add-company-stock-exchange/:id', component: AddCompanyStockExchangeComponent},
  {path: 'delete-company-stock-exchange/:id', component: DeleteCompanyStockExchangeComponent},
  {path: '**', pathMatch: 'full',redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
