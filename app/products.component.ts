import { ProductService } from './product.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Product } from './product';


import { OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.css']

})
export class ProductsComponent implements OnInit {

  constructor(private router: Router, private productService: ProductService) {

  }
  selectedProduct: Product;
  products: Product[];
  getProducts(): void {
    this.productService.getProducts().then(products => this.products = products);
  }
  ngOnInit(): void {
    this.getProducts();
  }
  onSelect(product: Product): void {
    this.selectedProduct = product;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedProduct.id]);
  }
}
