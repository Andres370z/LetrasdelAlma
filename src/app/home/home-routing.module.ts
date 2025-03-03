import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [{path: '', component: HomeComponent},
  {path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule)},
  {path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)},
  {path: 'order', loadChildren: () => import('./order/order.module').then(m => m.OrderModule)},
  {path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule)},
  {path: 'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
