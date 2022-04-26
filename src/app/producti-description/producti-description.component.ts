import { Component, OnInit } from '@angular/core';
import { NodeserviceService } from '../services/nodeservice.service';
import { Product } from '../interfaces/products.interface';

@Component({
  selector: 'app-producti-description',
  templateUrl: './producti-description.component.html',
  styleUrls: ['./producti-description.component.scss'],
})
export class ProductiDescriptionComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: NodeserviceService) {}

  ngOnInit(): void {
    this.productService.getProductFromMyNodeServer().subscribe((products) => {
      console.log(products);
      this.products = products;
    });
  }
}
