import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/products.interface';
@Injectable({
  providedIn: 'root',
})
export class NodeserviceService {
  private productUrl = 'http://localhost:4400/products';
  private contactUrl = 'http://localhost:4400/contact';
  private aboutUsUrl = 'http://localhost:4400/about-us';

  constructor(private nodehttp: HttpClient) {}

  getProductFromMyNodeServer() {
    return this.nodehttp.get<Product[]>(this.productUrl);
  }

  getContactDataFromMyNodeServer() {
    return this.nodehttp.get<any[]>(this.contactUrl);
  }

  getAboutUsDataFromMyNodeServer() {
    return this.nodehttp.get<any[]>(this.aboutUsUrl);
  }
}
