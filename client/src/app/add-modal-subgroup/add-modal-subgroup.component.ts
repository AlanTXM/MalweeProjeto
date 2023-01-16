import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpService } from 'src/services/http.service';

@Component({
  selector: 'app-add-modal-subgroup',
  templateUrl: './add-modal-subgroup.component.html',
  styleUrls: ['./add-modal-subgroup.component.scss']
})

export class AddModalSubgroupComponent implements OnInit {

  description: string = '';
  idGroup: number | undefined;
  subGroup: Array<any>= [];
  selectedGroup : number = 0;
  groups : string = "";
  public subgroup : Array <any> = [];
  
  constructor(public dialogRef: MatDialogRef<AddModalSubgroupComponent>, private httpService : HttpService) { }

  async ngOnInit(): Promise<void> {
    await this.getGroup();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public async getGroup(){
    this.subgroup = await this.httpService.get('group');
  }

  async postsubgroup(){
    this.subgroup = await this.httpService.post('subgroup', { description: this.description, fkGroup: this.selectedGroup});
    this.onNoClick();
  }
}
