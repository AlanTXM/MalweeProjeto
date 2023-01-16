import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from 'src/services/http.service';
import { DialogDataClient } from '../user/user.component';

@Component({
  selector: 'app-modal-edit-client',
  templateUrl: './modal-edit-client.component.html',
  styleUrls: ['./modal-edit-client.component.scss']
})
export class ModalEditClientComponent implements OnInit {

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

  constructor(public dialogRef: MatDialogRef<ModalEditClientComponent>, private httpService : HttpService,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataClient) { }

  ngOnInit(): void {
    this.clients.push(this.data.client);
  }

  onNoClick() {
    this.dialogRef.close();
  }

  async editAddress(){
    this.address = await this.httpService.put('client',{rua : this.rua, bairro : this.bairro, cidade : this.cidade, estado : this.estado, cep : this.cep, numero : this.numero, complemento : this.complemento, pReferencia : this.pReferencia, fkClients : this.selectedClient});
    this.onNoClick();
  }

  async deleteAddress(){
    this.address = await this.httpService.patch(`address/${this.data.id}`,{});
    this.onNoClick();
  }

}
