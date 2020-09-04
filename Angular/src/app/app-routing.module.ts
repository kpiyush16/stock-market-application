import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { StockMarketComponent } from './components/stock-market/stock-market.component';
import { StockComponent } from './components/stock-market/stock/stock.component';
import { StockExchangeComponent } from './components/stock-market/stock-exchange/stock-exchange.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {
    path: 'stock-market', 
    component: StockMarketComponent,
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
