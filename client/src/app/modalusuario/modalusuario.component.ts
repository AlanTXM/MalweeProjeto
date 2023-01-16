import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from 'src/services/http.service';
import { AddModalUsuarioComponent } from '../add-modal-usuario/add-modal-usuario.component';
import { DialogData } from '../modal/modal.component';

@Component({
  selector: 'app-modalusuario',
  templateUrl: './modalusuario.component.html',
  styleUrls: ['./modalusuario.component.scss']
})

export class ModalusuarioComponent implements OnInit {

  usuarios : Array <any> = [];
  name : string = '';
  username : string = '';
  password : string = '';
  cpassword : string = '';

  constructor(public dialogRef: MatDialogRef<ModalusuarioComponent>, private httpService : HttpService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  async editUsuario(){
    this.usuarios = await this.httpService.put('user', {name : this.name, username : this.username, id : this.data.id});
    this.onNoClick();
  }

  async editUsuario2(){
    this.usuarios = await this.httpService.put('user', {password : this.password, cpassword : this.cpassword, id : this.data.id});
    this.onNoClick();
  }

  async usuarioDelete(){
    this.usuarios = await this.httpService.patch(`user/${this.data.id}`,{});
    this.onNoClick();
  }
  
}
