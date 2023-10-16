import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  pid: any
  pdata: any

  constructor(private ar: ActivatedRoute, private ps: ProductService, private router: Router) { }

  ngOnInit(): void {

    this.ar.params.subscribe((data: any) => {
      this.pid = data["id"]

    })

    this.ps.viewProduct(this.pid).subscribe((data: any) => {
      this.pdata = data
      // console.log(this.pdata);

    })

  }

  updateProduct(form: any) {
    this.ps.updateProduct(this.pid, this.pdata).subscribe((item: any) => {

      alert("Product updated")
      this.router.navigateByUrl("products/view_product/" + this.pid)
    })
  }


}
