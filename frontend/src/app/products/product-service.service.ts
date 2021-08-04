import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CatagoryInerface } from '../site-layout/catagory-inerface';
import { ProductInerface }  from './product-inerface';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  productUrl = "http://localhost:3000/products";
  catagoryUrl = "http://localhost:3000/categories";

  constructor(private httpClient: HttpClient) {   }

  createProduct(productBody: any):Observable<ProductInerface>{
    return this.httpClient.post<ProductInerface>(`${this.productUrl}`, productBody);
  }

  viewProduct():Observable<ProductInerface>{
    return this.httpClient.get<ProductInerface>(`${this.productUrl}`);
  }

  viewSelectProduct(productId: any):Observable<ProductInerface>{
    return this.httpClient.get<ProductInerface>(`${this.productUrl}/${productId}`);
  }

  updateProduct(productId: any, productBody: any):Observable<ProductInerface>{
    return this.httpClient.put<ProductInerface>(`${this.productUrl}/${productId}`, productBody);
  }

  deleteProduct(productId: any):Observable<ProductInerface>{
    return this.httpClient.delete<ProductInerface>(`${this.productUrl}/${productId}`);
  }

  searchCatagoryProduct(catagoryId: any):Observable<ProductInerface>{
    return this.httpClient.get<ProductInerface>(`${this.productUrl}/?categoryId=${catagoryId}`);
  }

  searchDateProduct(dateParam: any):Observable<ProductInerface>{
    return this.httpClient.get<ProductInerface>(`${this.productUrl}/date=${dateParam}`);
  }

  getCatagory():Observable<CatagoryInerface>{
    return this.httpClient.get<CatagoryInerface>(this.catagoryUrl);
  }
}
