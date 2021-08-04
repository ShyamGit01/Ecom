import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { FormControl,  FormGroup,  Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProductForm = new FormGroup({
        id: new FormControl("11"),
        categoryId: new FormControl("", [Validators.required]),
        productName: new FormControl("", [Validators.required]),
        description: new FormControl("", [Validators.required]),
        rating: new FormControl("", [Validators.required]),
        price: new FormControl("", [Validators.required]),
        productImg: new FormControl(""),
        isAvailable: new FormControl("1"),
        color: new FormControl("", [Validators.required]),
        reviews: new FormControl("", [Validators.required]),
  });
  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
    // Ngform = NgForm;
  }

  addNewProduct(){
    if(this.addProductForm.valid){
      this.productService.createProduct(this.addProductForm.value).subscribe(data => {
        this.addProductForm.reset();
    });
  }
  }
}
