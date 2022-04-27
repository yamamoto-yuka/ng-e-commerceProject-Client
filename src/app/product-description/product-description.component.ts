import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interfaces/products.interface';
import { NodeserviceService } from '../services/nodeservice.service';

@Component({
  selector: 'product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss'],
})
export class ProductDescriptionComponent implements OnInit {
  product: Product;
  constructor(
    private param: ActivatedRoute,
    private service: NodeserviceService
  ) {}

  ngOnInit(): void {
    console.log(this.param.snapshot.paramMap.get('id'));
    let productID: any = this.param.snapshot.paramMap.get('id');
    this.service.getProductDetails(productID).subscribe((product) => {
      console.log(product.id);
      this.product = product;
    });
  }
}
