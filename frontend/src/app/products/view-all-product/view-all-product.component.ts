import { Component, OnInit } from '@angular/core';
import { ProductInerface } from '../product-inerface';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {

  productList: ProductInerface | any;
  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
    this.productService.viewProduct().subscribe(data => {
      this.productList = data;
    })
  }

}
