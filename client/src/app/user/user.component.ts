import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpService } from 'src/services/http.service';
import { AddModalClientComponent } from '../add-modal-client/add-modal-client.component';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { ModalEditClientComponent } from '../modal-edit-client/modal-edit-client.component';
import { ModalclientComponent } from '../modalclient/modalclient.component';

export interface DialogDataClient {
  client : Array <any>;
  id: number;
  socialreason: string;
  fantasyName: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {

  search: string ='';
  clients : Array<any>= [];
  id : number = 0;
  add: any;

  constructor(private router : Router, private httpService : HttpService, public dialog : MatDialog) { }

  ngOnInit(): void {
    this.getClient();
  }

  modalPostClient(): void {
    const ref = this.dialog.open(AddModalClientComponent, {
      width: '600px',
    });
    ref.afterClosed().subscribe(result => {
      this.getClient();
    })
  }

  public modalEditClient(client: any, id: any, socialreason: any, fantasyName: any) {
    const ref = this.dialog.open(ModalclientComponent, {
      width : '900px',
      data: {client: client, id : id, razaoSocial: socialreason, fantasyName: fantasyName}

    });

    ref.afterClosed().subscribe(result => {
      this.getClient();
    })

    }

  async getClient(){
    this.clients = await this.httpService.get('client');
    console.log(this.clients);
  }

  async patchclient(){
    this.clients = await this.httpService.patch(`client/${this.id}`, {});
  }

}