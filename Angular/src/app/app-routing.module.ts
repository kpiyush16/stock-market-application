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

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path: 'profile/editcontact', component: EditContactComponent, canActivate:[AuthGuard]},
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
  {path: '**', pathMatch: 'full',redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
