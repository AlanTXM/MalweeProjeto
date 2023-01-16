import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Data, Router } from '@angular/router';
import { HttpService } from 'src/services/http.service';
import { AddModalColectionComponent } from '../add-modal-colection/add-modal-colection.component';
import { AddModalProductComponent } from '../add-modal-product/add-modal-product.component';
import { ModalproductComponent } from '../modalproduct/modalproduct.component';

export interface DialogDataProducts {
  products : Array <any>;
  id : number;
  description : string;
  salePrice : number;
  fkGroup : number;
  fkSubgroup : number;
  fkCollection : number;
}

@Component({
  selector : 'app-product',
  templateUrl : './product.component.html',
  styleUrls : ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  add : any;
  products : Array<any> = [];
  search : string = '';

  constructor(private router : Router, private httpService : HttpService, public dialog : MatDialog) { }

  ngOnInit(): void {
    this.getProduct();
  }

  async patchProduct(product : any){
    this.products = await this.httpService.patch('product/' + product.id,{});
    this.getProduct();
  }
  
  postProduct() {
    const ref = this.dialog.open(AddModalProductComponent, {
      width: '600px'
    });
    ref.afterClosed().subscribe(result => {
      this.getProduct();
    })
    }
  
  editProduct(product: any, id: any, fkGroup : any, fkSubgroup : any, fkCollection : any) {
    const ref = this.dialog.open(ModalproductComponent, {
      minWidth: '600px',
      data: {products: product, id : id, fkGroup: fkGroup, fkSubgroup: fkSubgroup, fkCollection : fkCollection}
      
    });
    ref.afterClosed().subscribe(result => {
      this.getProduct();
    })

    }

    async getProduct(){
      this.products= await this.httpService.get('product');
    }
}
