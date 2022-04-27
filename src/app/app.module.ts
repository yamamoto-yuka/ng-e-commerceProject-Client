import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductsComponent } from './products/products';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ContactComponent,
    AboutUsComponent,
    TopNavComponent,
    ProductDescriptionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
