import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/services/http.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  
  clientes : Array<any> = [];
  salvaEndereco : Array<any> = [];
  search : string = '';
  id : number = 0;
  fantasyName : string = '';
  cnpj : string = '';
  socialreason : string = '';
  customersince : string = '';
  cep : string = '';
  endereco : string = '';
  numero : number = 0;
  complemento : string = '';
  cidade : string = '';
  bairro : string = '';
  estado : string = '';
  mostrar : boolean = false;
  mostrar2 : boolean = false;
  mostrar3 : boolean = false;

  constructor(private router  : Router, private httpService : HttpService) { }

  ngOnInit(): void {
    this.getclient();
  }

  toggle(){
    this.mostrar = !this.mostrar;
  }
  toggle2(){
    this.mostrar2 = !this.mostrar2;
  }
  toggle3(){
    this.mostrar3 = !this.mostrar3;
  }

  async salvar(){
    this.mostrar3 = !this.mostrar3;
    this.salvaEndereco = await this.httpService.post('client', {fantasyName : this.fantasyName, cnpj : this.cnpj, socialreason : this.socialreason, customersince : this.customersince});
  }
  async postclient(){
    this.clientes = await this.httpService.post('client', {fantasyName : this.fantasyName, cnpj : this.cnpj, socialreason : this.socialreason, customersince : this.customersince});
  }
  async postaddress(){
    this.endereco = await this.httpService.post('address', {cep : this.cep, estado : this.estado, cidade : this.cidade, bairro : this.bairro, endereco : this.endereco, complemento : this.complemento, numero : this.numero});
  }
  async getclient(){
    this.clientes = await this.httpService.get('client');
  }
  async patchclient(cliente : any){
    this.clientes = await this.httpService.patch('client/' + cliente.id, {});
  }
  async putclient(){
    this.clientes = await this.httpService.put('client',{id : this.id ,fantasyName : this.fantasyName, cnpj : this.cnpj, socialreason : this.socialreason, customersince : this.customersince})
  }

  
}