import { Component, OnInit } from '@angular/core';
import { NodeserviceService } from '../services/nodeservice.service';
import { Product } from '../interfaces/products.interface';

@Component({
  selector: 'products-description',
  templateUrl: './products.html',
  styleUrls: ['./products.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: NodeserviceService) {}

  ngOnInit(): void {
    this.productService.getProductFromMyNodeServer().subscribe((products) => {
      console.log(products);
      this.products = products;
    });
  }
}
