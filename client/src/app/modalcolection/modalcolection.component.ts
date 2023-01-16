import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from 'src/services/http.service';
import { DialogData } from '../modal/modal.component';

@Component({
  selector: 'app-modalcolection',
  templateUrl: './modalcolection.component.html',
  styleUrls: ['./modalcolection.component.scss']
})
export class ModalcolectionComponent implements OnInit {
  
  description: string = '';
  id : number = 0;
  colections: Array<any>= [];

  constructor(public dialogRef: MatDialogRef<ModalcolectionComponent>, private httpService : HttpService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
    this.colections.push(this.data.grupos);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  async editColection(){
    this.colections = await this.httpService.put(`colection`,{description:this.description, id : this.data.id});
    this.onNoClick();
  }

  async deleteColection(){
    this.colections = await this.httpService.patch(`colection/${this.data.id}`,{});
    this.onNoClick();
  }
}
