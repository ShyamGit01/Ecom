import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/products/product-service.service';
import { CatagoryInerface } from '../catagory-inerface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  catagoryList: CatagoryInerface | any;
  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
    this.productService.getCatagory().subscribe(data => {
      this.catagoryList = data;
    });
  }

}
