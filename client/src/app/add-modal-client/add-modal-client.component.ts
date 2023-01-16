import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpService } from 'src/services/http.service';

@Component({
  selector: 'app-add-modal-client',
  templateUrl: './add-modal-client.component.html',
  styleUrls: ['./add-modal-client.component.scss']
})
export class AddModalClientComponent implements OnInit {

  public client: Array <any> = [];
  public address: Array <any>=[];
  fantasyName: string ='';
  cnpj: string = '';
  socialreason: string = '';
  startDate : Date = new Date(2022, 0, 1);
  complemento: string = '';
  pReferencia:string = '';
  bairro: string ='';
  rua: string ='';
  numero: number | undefined;
  cep: string ='';
  cidade: string ='';
  estado: string =''; 
  search : string = '';
  selectedClient : number = 0;

  constructor(public dialogRef: MatDialogRef<AddModalClientComponent>, private httpService : HttpService) { }

  ngOnInit(): void {
    this.getClient();
    this.getAddress();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

    async postClient() {
      this.client = await this.httpService.post('client', { fantasyName: this.fantasyName, cnpj: this.cnpj, socialreason: this.socialreason, customersince: this.startDate});
      this.onNoClick();
    }

    async postAddress(){
      this.address = await this.httpService.post('address',{rua : this.rua, bairro : this.bairro, cidade : this.cidade, estado : this.estado, cep : this.cep, numero : this.numero, complemento : this.complemento, pReferencia : this.pReferencia, fkClient : this.selectedClient})
      this.onNoClick();
    }

    async getClient(){
      this.client = await this.httpService.get('client');
      console.log(this.client);
    }
    
    async getAddress(){
      this.address = await this.httpService.get('address');
      console.log(this.address);
    }
}
