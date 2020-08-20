import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ProductsComponent} from './Products/products.component';
import {ContactComponent} from './Contact/contact.component';
import {AboutComponent} from './About/about.component';
import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
