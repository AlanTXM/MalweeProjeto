import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpService } from 'src/services/http.service';

@Component({
  selector: 'app-add-modal-usuario',
  templateUrl: './add-modal-usuario.component.html',
  styleUrls: ['./add-modal-usuario.component.scss']
})
export class AddModalUsuarioComponent implements OnInit {

  usuarios : Array <any> = [];
  name : string = '';
  username : string = '';
  password : string = '';
  cpassword : string = '';

  constructor(public dialogRef: MatDialogRef<AddModalUsuarioComponent>, private httpService : HttpService) { }

  ngOnInit(): void {

  }

 onNoClick(): void {
    this.dialogRef.close();
  }

  async postUsuario(){
    this.usuarios = await this.httpService.post('user', { name : this.name, username : this.username, password : this.password, cpassword : this.cpassword});
    this.dialogRef.close();
  }
  
}
