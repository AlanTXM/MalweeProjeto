import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from 'src/services/http.service';


export interface DialogDataRequest {
  client : Array <any>;
  id: number;
}

@Component({
  selector: 'app-add-modal-request',
  templateUrl: './add-modal-request.component.html',
  styleUrls: ['./add-modal-request.component.scss']
})

export class AddModalRequestComponent implements OnInit {
  public product : Array<any> = [];
  public client: Array <any> = [];
  public address: Array <any> = [];
  request : Array <any> = [];
  requestProduct : Array<any> = [];
  selectedProduct: number = 0;
  selectedAddress : number = 0;
  selectedClient : number = 0;
  selectedRequest : number = 0;
  issuanceDate : number = 0;
  deliveryDate : number = 0;
  startDate : Date = new Date();
  fantasyName: string ='';
  description : string = '';
  rua : string = '';
  id : number | undefined;
  quantity : number = 0;
  unitaryValue : number = 0;
  discount: number = 0;
  addition: number = 0;
  fkClient : number = 0;
  fkAddress: number = 0;
  fkRequest : number = 0;
  fkProduct : number = 0;
  total : number = 0;
  
  
  onNoClick() {
    this.dialogRef.close();
  }

   constructor(public dialogRef: MatDialogRef<AddModalRequestComponent>, private httpService : HttpService, @Inject(MAT_DIALOG_DATA) public data: DialogDataRequest) {}

    async ngOnInit(): Promise<void> {
      await this.getClient();
      await this.getProduct();
      await this.getAddress();
      await this.getRequest();
      await this.getRequestProduct();
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
    this.requestProduct = await this.httpService.get(`requestProduct/${this.id}`);
  }

  async getRequest(){
    this.request = await this.httpService.get('request');
  }

  async postRequest() {
    this.request = await this.httpService.post('request', {fkClient : this.selectedClient, fkAddress : this.selectedAddress, issuanceDate : this.issuanceDate, deliveryDate : this.deliveryDate, total : this.total})
    this.onNoClick();
  }

   async postRequestProduct(){
    this.requestProduct = await this.httpService.post('requestProduct', {fkRequest : this.selectedClient, fkProduct : this.selectedProduct, quantity : this.quantity, unitaryValue : this.unitaryValue, discount : this.discount, addition : this.addition , total : this.total})
   }

}
