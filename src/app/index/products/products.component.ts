import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
  }

  public OpenCamera(): void{
 

    this._router.navigate(['index/camera']);
  }

}
