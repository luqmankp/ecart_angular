import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {

  pid: any

  constructor(private ar: ActivatedRoute, private ps: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.ar.params.subscribe((data: any) => {

      this.pid = data["id"]

      this.ps.DeleteProduct(this.pid).subscribe((item: any) => {
        alert("product deleted")

        this.router.navigateByUrl("products")

      })
    })

  }

}
