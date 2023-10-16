import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './viewallproducts.component.html',
  styleUrls: ['./viewallproducts.component.css']
})
export class ViewAllProductsComponent implements OnInit {

  //variable initialising to store data
  productList: any
  filterProducts: any
  searchkey: any = ""

  constructor(private ps: ProductService) { }

  ngOnInit(): void {

    this.ps.viewAllProducts().subscribe(data => {
      // console.log(data);

      this.productList = data

    })

    this.ps.search.subscribe((value: any) => {
      this.searchkey = value
    })

  }


  filter(category: any) {

    this.filterProducts = this.productList.filter((item: any) => item.categoryId == category || category == "")
  }

}





// import { style } from '@angular/animations';
// import { Component } from '@angular/core';
// import { ProductService } from '../product.service';

// @Component({
//   selector: 'app-viewallproducts',
//   templateUrl: './viewallproducts.component.html',
//   styleUrls: ['./viewallproducts.component.css']
// })
// export class ViewallproductsComponent {

//   productList: any
//   filterProducts: any
//   searchkey: any = ""

//   constructor(private ps: ProductService) { }

//   ngOnInit(): void {

//     this.ps.viewAllProducts().subscribe(data => {
//       console.log(data);

//       this.productList = data

//     })

//   }

//   this.ps.search.subscribe((value: any) => {
//     this.searchkey = value
//   })

// this.ps.search.subscribe((value: any) => {
//   this.searchkey = value
// })

// }
