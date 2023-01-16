import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpService } from 'src/services/http.service';
import { AddModalRequestComponent } from '../add-modal-request/add-modal-request.component';
import { ModalEditRequestComponent } from '../modal-edit-request/modal-edit-request.component';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})

export class RequestComponent implements OnInit {
  fkClient : number = 0;
  selectedClient : number =0;
  fkAddress : number = 0;
  selectedAddress: number = 0;
  issuanceDate : number = 0;
  deliveryDate : number = 0;
  total : number = 0;
  public clients : Array <any> = [];
  search: string = '';
  public requests : Array<any> = [];
  public address : Array <any> = [];

  constructor(private router : Router, private httpService : HttpService, public dialog : MatDialog) { }

  async ngOnInit(): Promise<void> {
    await this.getClient();
    await this.getRequest();
    await this.getAddress();
  }
  
  async getRequest(){
    this.requests = await this.httpService.get('request');
  }

  async getClient(){
    this.clients = await this.httpService.get('client');
  }
  async getAddress(){
    this.address = await this.httpService.get('client');
  }

  postRequestModal(): void {
    const ref = this.dialog.open(AddModalRequestComponent, {
      minWidth : '600px',
      height  : '700px'
    });
    ref.afterClosed().subscribe(result => {
      this.getRequest();
    })
  }

  editRequestModal(pedido: any, id: any, fkClient : any, fkAddress : any, issuanceDate : any, deliveryDate : any, total : any): void {
    const ref = this.dialog.open(ModalEditRequestComponent, {
      minWidth : '800px',
      data : {pedido : pedido ,id : id, fkClient : fkClient, fkAddress : fkAddress, issuanceDate : issuanceDate, deliveryDate : deliveryDate, total : total}
    });
    ref.afterClosed().subscribe(result => {
      this.getRequest();
    })
  }

}
