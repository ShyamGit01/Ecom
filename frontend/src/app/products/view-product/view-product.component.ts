import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInerface } from '../product-inerface';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  productID = 0; 
  productDetails: ProductInerface | any;
  constructor(private activatedRoute: ActivatedRoute,
    private productService: ProductServiceService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any) => {
      this.productID = data.id;
      
      this.productService.viewSelectProduct(this.productID).subscribe(productdata => {
        this.productDetails = productdata;
        console.log(productdata);
      })
      
    })
  }

}
