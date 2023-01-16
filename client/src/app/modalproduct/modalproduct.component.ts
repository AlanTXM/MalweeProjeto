import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from 'src/services/http.service';
import { DialogData } from '../modal/modal.component';

export interface DialogDataProducts {
  products :Array <any>;
  id: number;
  fkGroup: number;
  fkSubgroup: number;
  fkCollection: number;
}

@Component({
  selector: 'app-modalproduct',
  templateUrl: './modalproduct.component.html',
  styleUrls: ['./modalproduct.component.scss']
})

export class ModalproductComponent implements OnInit {

  product: Array <any>=[];
  group: Array <any>=[];
  subgroup: Array <any>=[];
  colection: Array <any>=[];
  description: string ='';
  salePrice: number | undefined;

  constructor(public dialogRef: MatDialogRef<ModalproductComponent>, private httpService : HttpService,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataProducts) { }

  ngOnInit(): void {
    this.product.push(this.data.products);
    this.getGroup();
    this.getSubgroup();
    this.getColection();
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  async getGroup(){
    this.group= await this.httpService.get(`group/${this.data.fkGroup}`);
  }

  async getSubgroup(){
    this.subgroup= await this.httpService.get(`subgroup/${this.data.fkSubgroup}`);
  }

  async getColection(){
    this.colection= await this.httpService.get(`colection/${this.data.fkCollection}`);
  }

  async editProduct(){
    this.product = await this.httpService.put('product',{id: this.data.id,description: this.description, salePrice: this.salePrice});
    this.onNoClick();
  }
  
  async deleteProduct(){
    this.product = await this.httpService.patch(`product/${this.data.id}`,{});
    this.onNoClick();
  }
}
