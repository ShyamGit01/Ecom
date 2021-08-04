import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatagoryInerface } from 'src/app/site-layout/catagory-inerface';
import { ProductInerface } from '../product-inerface';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-view-product-by-catagory',
  templateUrl: './view-product-by-catagory.component.html',
  styleUrls: ['./view-product-by-catagory.component.css']
})
export class ViewProductByCatagoryComponent implements OnInit {

  searchCategory= 0;
  productList: ProductInerface | any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductServiceService) { }

  ngOnInit(): void {
  this.activatedRoute.params.subscribe(data => {
    this.searchCategory = data.catagoryid;
    
    this.productsService.searchCatagoryProduct(this.searchCategory).subscribe(categoryData => {
      this.productList = categoryData;
    });
  });

  }

}
