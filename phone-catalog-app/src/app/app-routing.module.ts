import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/phones',
    pathMatch: 'full'
  },
  {
    path: 'phones',
    loadChildren: './pages/phones/phones.module#PhonesModule'
  },
  {
    path: 'phones/:id',
    loadChildren: './pages/phone/phone.module#PhoneModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
