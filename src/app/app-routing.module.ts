import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent} from './Products/products.component';
import { ContactComponent } from './Contact/contact.component';
import { AboutComponent} from './About/about.component';

const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: '',
  redirectTo: '/products',
  pathMatch: 'full'},
  {path: 'contact', component: ContactComponent},
  {path: '',
  redirectTo: '/contact',
  pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: '',
  redirectTo: '/about',
  pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
