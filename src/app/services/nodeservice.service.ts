import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/products.interface';
@Injectable({
  providedIn: 'root',
})
export class NodeserviceService {
  private productUrl = 'http://localhost:4400/products'; //APIs or End Points
  // End point is a URL that when acccessed will give you a URL
  private contactUrl = 'http://localhost:4400/contact';
  private aboutUsUrl = 'http://localhost:4400/about-us';
  private p_url = 'http://localhost:4400/product';

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

  getProductDetails(productID: number) {
    return this.nodehttp.get<Product>(this.p_url + '/' + productID);
  }
}
