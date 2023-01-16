import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpService } from 'src/services/http.service';

export interface DialogData {
  fkGroup: any;
  grupos: Array <any> ;
  id: number;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  
  description: string = '';
  id : number = 0;
  grupos: Array<any>= [];

  constructor(public dialogRef: MatDialogRef<ModalComponent>, private httpService : HttpService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
    this.grupos.push(this.data.grupos);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  async editGroup(){
    this.grupos = await this.httpService.put(`group`,{description:this.description, id : this.data.id});
    this.grupos= await this.httpService.get(`group/${this.data.id}`);
    this.onNoClick();
  }
  
  async deleteGroup(){
    this.grupos = await this.httpService.patch(`group/${this.data.id}`,{});
    this.onNoClick();
  }
  async patchgroup(grupo : any){
    this.grupos = await this.httpService.patch('group/' + grupo.id,{});
    this.onNoClick();
  }
}
