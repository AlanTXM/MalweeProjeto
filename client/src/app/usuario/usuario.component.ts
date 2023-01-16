import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpService } from 'src/services/http.service';
import { AddModalUsuarioComponent } from '../add-modal-usuario/add-modal-usuario.component';
import { ModalusuarioComponent } from '../modalusuario/modalusuario.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})

export class UsuarioComponent implements OnInit {

  usuarios : Array <any> = [];
  search : string = '';

  constructor(private router : Router, private httpService : HttpService, public dialog : MatDialog) { }

  ngOnInit(): void {
    this.getUsuario();
  }
  postGroupModal(): void {
    const ref = this.dialog.open(AddModalUsuarioComponent, {
      width : '550px'
    });
    ref.afterClosed().subscribe(result => {
      this.getUsuario();
    })
  }

  editUsuarioModal(usuario : any, id : any): void {
    const ref = this.dialog.open(ModalusuarioComponent, {
      width : '600px',
      height : '550px',
      data : {usuario : usuario, id : id}
    });
    ref.afterClosed().subscribe(result => {
      this.getUsuario();
    })
  }

  async patchUsuario(usuario : any){
    this.usuarios = await this.httpService.patch('user/' + usuario.id,{});
    this.getUsuario();
  }

  async getUsuario(){
    this.usuarios = await this.httpService.get('user');
  }
  
}
