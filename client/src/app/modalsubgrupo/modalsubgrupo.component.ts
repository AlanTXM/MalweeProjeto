import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from 'src/services/http.service';
import { DialogData, ModalComponent } from '../modal/modal.component';
import { DialogDataSubGroup } from '../subgroup/subgroup.component';

@Component({
  selector: 'app-modalsubgrupo',
  templateUrl: './modalsubgrupo.component.html',
  styleUrls: ['./modalsubgrupo.component.scss']
})
export class ModalsubgrupoComponent implements OnInit {
  description: string = '';
  id : number | undefined;
  idGroup: number | undefined;
  subGroup: Array<any>= [];
  group: Array<any>= [];
  
  selectedGroup : number = 0;
  
  constructor(public dialogRef: MatDialogRef<ModalComponent>, private httpService : HttpService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
    this.subGroup.push(this.data.grupos);
    this.getGroup();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  async getGroup(){
    this.group= await this.httpService.get(`group/${this.data.fkGroup}`);

  }
  async postsubgroup(){
    this.subGroup= await this.httpService.post('subgroup', { description: this.description, fkGroup: this.idGroup});
    this.onNoClick();
  }
  async editsubgroup(){
    this.subGroup= await this.httpService.put('subgroup',{description:this.description, id : this.data.id});
    console.log(this.subGroup);
    this.onNoClick();
  }
  async subgroupDelete(){
    this.group = await this.httpService.patch(`subgroup/${this.data.id}`,{});
    this.onNoClick();
  }

}
