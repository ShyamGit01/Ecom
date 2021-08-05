import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductInerface } from '../product-inerface';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnInit {
  productID = 0;
  productDetails: ProductInerface | any;
  updateProductForm = new FormGroup({
    id: new FormControl(''),
    categoryId: new FormControl('', [Validators.required]),
    productName: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    rating: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    productImg: new FormControl(''),
    isAvailable: new FormControl('1'),
    color: new FormControl('', [Validators.required]),
    reviews: new FormControl('', [Validators.required]),
  });
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data: any) => {
      this.productID = data.id;

      this.productService
        .viewSelectProduct(this.productID)
        .subscribe((productdata) => {
          this.productDetails = productdata;
          console.log(productdata);
        });
    });
  }

  updateProduct() {
    this.activatedRoute.params.subscribe((data: any) => {
      this.productID = data.id;
      if (this.updateProductForm.valid) {
        this.productService
          .updateProduct(this.productID, this.updateProductForm.value)
          .subscribe((data) => {
            this.router.navigate(["/products"]);
            
          });
      }
    });
  }
}
