import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from 'src/services/http.service';
import { ModalEditClientComponent } from '../modal-edit-client/modal-edit-client.component';
import { DialogData } from '../modal/modal.component';

export interface DialogDataClient {
  client : Array <any>;
  id: number;
}

@Component({
  selector: 'app-modalclient',
  templateUrl: './modalclient.component.html',
  styleUrls: ['./modalclient.component.scss']
})
export class ModalclientComponent implements OnInit {

  public client: Array <any>=[];
  public address: Array <any>=[];
  public clients : Array <any> = [];
  search : string = '';
  fantasyName: string ='';
  cnpj: string ='';
  socialreason: string ='';
  startDate : Date = new Date(2022, 0, 1);
  complemento: string ='';
  pReferencia:string ='';
  bairro: string ='';
  rua: string ='';
  numero: number | undefined;
  cep: string ='';
  cidade: string ='';
  estado: string ='';
  selectedClient : number = 0;
  
  constructor(public dialogRef: MatDialogRef<ModalclientComponent>, private httpService : HttpService,  public dialog : MatDialog, 
    @Inject(MAT_DIALOG_DATA) public data: DialogDataClient) { }

  ngOnInit(): void {
    this.clients.push(this.data.client);
    this.listAddress();
  }

  onNoClick() {
    this.dialogRef.close();
  }

  async editClient(){
      this.clients = await this.httpService.put('client',{fantasyName : this.fantasyName, cnpj : this.cnpj, socialreason : this.socialreason , customersince : this.startDate, id : this.data.id});
      this.dialogRef.close();
  }

  async deleteAddress(){
    this.address = await this.httpService.patch(`address/${this.data.id}`,{});
    this.onNoClick();
  } 

  async deleteClient(cliente : any){
    this.clients = await this.httpService.patch(`client/${this.data.id}`,{});
    this.dialogRef.close();
  }

  async postAddress(){
    this.address = await this.httpService.post('address', {rua : this.rua, bairro : this.bairro, cidade : this.cidade, estado : this.estado, cep : this.cep, numero : this.numero, complemento : this.complemento, pReferencia : this.pReferencia, fkClients : this.selectedClient});
    this.onNoClick();
  }

  async listAddress(){
    this.address = await this.httpService.get(`client/${this.data.id}`);
    console.log();
  }

  async getClient(){
    this.clients = await this.httpService.get(`client/${this.data.id}`);
    console.log();
  }

  public modalEditAddress(rua : any, bairro : any, cidade : any, estado : any, cep : any, numero : any, complemento : any, pReferencia : any) {
    const ref = this.dialog.open(ModalEditClientComponent, {
      width : '1000px',
      height : '500px', 
      data: {rua : rua, bairro : bairro, cidade : cidade, estado : estado, cep : cep, numero : numero, complemento : complemento, pReferencia : pReferencia}

    });
    ref.afterClosed().subscribe(result => {
      this.listAddress();
    })
    }
 
}
