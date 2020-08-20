import {Routes, RouterModule} from '@angular/router';
import { ProductsComponent} from './Products/products.component';
import { ContactComponent } from './Contact/contact.component';
import { AboutComponent} from './About/about.component';
import {AppComponent} from './app.component';


const arr: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: AppComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'products', component: ProductsComponent}
];

export const routing = RouterModule.forRoot(arr);
