import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { RegisterAccountComponent } from './register-account/register-account.component';
import { UpdateAccountComponent } from './update-account/update-account.component';

const routes: Routes = [
  {path : 'cuentas', component:AccountsListComponent},
  {path : '', redirectTo: 'cuentas', pathMatch: 'full'},
  {path: 'cuentas/crear-cuenta', component:RegisterAccountComponent},
  {path : 'cuentas/:id',component : UpdateAccountComponent},
  {path : 'cuentas/:id/detalles',component : AccountDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
