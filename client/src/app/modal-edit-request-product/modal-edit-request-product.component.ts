import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpService } from 'src/services/http.service';
import { DialogDataRequest } from '../add-modal-request/add-modal-request.component';

@Component({
  selector: 'app-modal-edit-request-product',
  templateUrl: './modal-edit-request-product.component.html',
  styleUrls: ['./modal-edit-request-product.component.scss']
})
export class ModalEditRequestProductComponent implements OnInit {

  public requestProduct : Array<any> = [];
  public requests : Array<any> = [];
  public clients : Array <any> = [];
  public client: Array <any> = [];
  public product : Array<any> = [];
  public address : Array <any> = [];
  selectedProduct: number = 0;
  selectedAddress : number = 0;
  selectedClient : number = 0;
  selectedRequest : number = 0;
  startDate : Date = new Date();
  issuanceDate : number = 0;
  deliveryDate : number = 0;
  request : Array <any> = [];
  id : number | undefined;
  fantasyName: string ='';
  description : string = '';
  rua : string = '';
  quantity : number = 0;
  unitaryValue : number = 0;
  discount: number = 0;
  addition: number = 0;
  fkClient : number = 0;
  fkAddress: number = 0;
  fkRequest : number = 0;
  fkProduct : number = 0;
  total : number = 0;

  constructor(public dialogRef: MatDialogRef<ModalEditRequestProductComponent>, private router : Router, private httpService : HttpService, public dialog : MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataRequest) { }

  async ngOnInit(): Promise<void> {
    await this.getClient();
    await this.getRequest();
    await this.getAddress();
    await this.getProduct();
    await this.getRequestProduct();
  }

  onNoClick() {
    this.dialogRef.close();
  }

  async getRequest(){
    this.request = await this.httpService.get('request');
  }

  async getClient(){
    this.client = await this.httpService.get('client');
  }

  async getAddress(){
    this.address = await this.httpService.get('address');
  }

  async getProduct(){
    this.product = await this.httpService.get('product');
  }

  async getRequestProduct(){
    this.requestProduct = await this.httpService.get(`requestProduct/${this.data.id}`);
  }

  async putRequest(){
    this.request = await this.httpService.put('request', {id : this.data.id, fkClient :this.selectedClient, issuanceDate : this.issuanceDate, deliveryDate : this.deliveryDate, fkAddress : this.selectedAddress, total : this.total})
    this.onNoClick();
  }

  async putRequestProduct(){
    this.requestProduct = await this.httpService.put('requestProduct',{id : this.data.id ,fkRequest : this.selectedRequest, fkProduct : this.selectedProduct, quantity : this.quantity, unitaryValue : this.unitaryValue, discount : this.discount, addition : this.addition, total : this.total});
    this.onNoClick();
  }

  async editRequestProduct(){
    this.requestProduct = await this.httpService.put('requestProduct', {fkRequest : this.fkRequest, quantity : this.quantity, unitaryValue : this.unitaryValue, addition : this.addition, discount : this.discount, fkAddress : this.fkAddress, total : this.total})
  }


 async deleteRequest(){
    this.requests = await this.httpService.patch(`request/${this.data.id}`, {});
  }

}
