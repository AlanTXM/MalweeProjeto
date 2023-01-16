import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpService } from 'src/services/http.service';

@Component({
  selector: 'app-add-modal-colection',
  templateUrl: './add-modal-colection.component.html',
  styleUrls: ['./add-modal-colection.component.scss']
})
export class AddModalColectionComponent implements OnInit {
 
  description: string = '';
  id : number =0;
  colection: Array<any>= [];
  constructor(public dialogRef: MatDialogRef<AddModalColectionComponent>, private httpService : HttpService) { }

  ngOnInit(): void {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  async postcolection(){
    this.colection = await this.httpService.post('colection', { description: this.description});
    this.dialogRef.close();
  }
}
