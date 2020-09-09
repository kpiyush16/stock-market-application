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
import { ComparisonComponent } from './components/comparison/comparison.component';
import { AddStockComponent } from './components/stock-market/stock/add-stock/add-stock.component';
import { EditStockComponent } from './components/stock-market/stock/edit-stock/edit-stock.component';
import { ExcelUploaderComponent } from './components/stock-market/excel-uploader/excel-uploader.component';
import { AddStockexchangeComponent } from './components/stock-market/stock-exchange/add-stockexchange/add-stockexchange.component';
import { EditStockexchangeComponent } from './components/stock-market/stock-exchange/edit-stockexchange/edit-stockexchange.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path: 'editcontact', component: EditContactComponent, canActivate:[AuthGuard],
    data:{roleCheck:[true]}
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
        children: [
          {path: 'update-stock/:id', component: EditStockComponent},
          {path: 'add-stock', component: AddStockComponent},
          {path: 'upload-excel', component: ExcelUploaderComponent}
        ]
      },
      {
        path: 'stock-exchange', 
        component: StockExchangeComponent,
        children: [
          {path: 'update-stockexchange/:id', component: EditStockexchangeComponent},
          {path: 'add-stockexchange', component: AddStockexchangeComponent},
        ]
      }
    ]
  },
  
  {path: 'company', component: SuperCompanyComponent, canActivate:[AuthGuard]},
  {path: 'company/:id', component: CompanyComponent, canActivate:[AuthGuard]},
  {path: 'view-companies', component: ViewCompaniesComponent, canActivate:[AuthGuard]},
  {path: 'add-company', component: AddCompanyComponent, canActivate:[AuthGuard],data:{roleCheck:[true]}},
  {path: 'update-company/:id', component: UpdateCompanyComponent, canActivate:[AuthGuard],data:{roleCheck:[true]}},
  {path: 'sector/:id', component: SectorComponent, canActivate:[AuthGuard]},
  {path: 'view-sectors', component: ViewSectorsComponent, canActivate:[AuthGuard]},
  {path: 'add-sector', component: AddSectorComponent, canActivate:[AuthGuard],data:{roleCheck:[true]}},
  {path: 'add-company-sector/:id', component: AddCompanySectorComponent, canActivate:[AuthGuard],data:{roleCheck:[true]}},
  {path: 'delete-company-sector/:id', component: DeleteCompanySectorComponent, canActivate:[AuthGuard],data:{roleCheck:[true]}},
  {path: 'update-sector/:id', component: UpdateSectorComponent, canActivate:[AuthGuard],data:{roleCheck:[true]}},
  {path: 'add-company-bod/:id', component: AddCompanyBodComponent, canActivate:[AuthGuard],data:{roleCheck:[true]}},
  {path: 'delete-company-bod/:id', component: DeleteCompanyBodComponent, canActivate:[AuthGuard],data:{roleCheck:[true]}},
  {path: 'view-company-stock-exchange/:id', component: ViewCompanyStockExchangeComponent, canActivate:[AuthGuard]},
  {path: 'add-company-stock-exchange/:id', component: AddCompanyStockExchangeComponent, canActivate:[AuthGuard],data:{roleCheck:[true]}},
  {path: 'delete-company-stock-exchange/:id', component: DeleteCompanyStockExchangeComponent, canActivate:[AuthGuard],data:{roleCheck:[true]}},
  {path: 'comparisonCharts', component: ComparisonComponent, canActivate:[AuthGuard]},

  {path: '**', pathMatch: 'full',redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
