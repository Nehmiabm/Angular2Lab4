import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, ProductsComponent, ProductDetailComponent, DashboardComponent],
  bootstrap: [AppComponent],
  providers: [ProductService]
})
export class AppModule { }
