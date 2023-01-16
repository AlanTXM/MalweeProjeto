import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpService } from 'src/services/http.service';

@Component({
  selector: 'app-add-modal-group',
  templateUrl: './add-modal-group.component.html',
  styleUrls: ['./add-modal-group.component.scss']
})
export class AddModalGroupComponent implements OnInit {
  
  description: string = '';
  id : number =0;
  group: Array<any>= [];
  
  constructor(public dialogRef: MatDialogRef<AddModalGroupComponent>, private httpService : HttpService) { }

  ngOnInit(): void {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  async postgroup(){
    this.group= await this.httpService.post('group', { description: this.description});
    this.onNoClick();
  }
  
}
