import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/products.interface';
import { NodeserviceService } from '../services/nodeservice.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  constructor(private nodeService: NodeserviceService) {}

  CheckAriacurrent(index: number) {
    if (index === 0) return true;
    else return false;
  }
  ngOnInit(): void {
    this.nodeService.getProductFromMyNodeServer().subscribe((products) => {
      this.products = products;
    });
  }
}
