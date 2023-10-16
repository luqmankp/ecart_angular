import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  prodId: any
  productdata: any

  constructor(private ps: ProductService, private ar: ActivatedRoute) { }

  ngOnInit(): void {
    this.ar.params.subscribe((data: any) => {

      this.prodId = data["id"]
      // console.log(this.prodId)
      this.ps.viewProduct(this.prodId).subscribe((data: any) => {
        this.productdata = data
      })

    })
  }

}
