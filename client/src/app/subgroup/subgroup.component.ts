
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpService } from 'src/services/http.service';
import { AddModalSubgroupComponent } from '../add-modal-subgroup/add-modal-subgroup.component';
import { ModalsubgrupoComponent } from '../modalsubgrupo/modalsubgrupo.component';

export interface DialogDataSubGroup {
  subgroup: Array<any>;
  id: number;
  fkGroup : number;
}

@Component({
  selector: 'app-subgroup',
  templateUrl: './subgroup.component.html',
  styleUrls: ['./subgroup.component.scss']
})
export class SubgroupComponent implements OnInit {
edit: any;
subGroup: Array<any> = [];
search: string = '';
id: number = 0;
description: string = '';
fkGroup: number = 0;
add: any;

  constructor(private router : Router, private httpService: HttpService, public dialog : MatDialog) { }

  ngOnInit(): void {
    this.getsubgroup();
  }

  EditSubgroupModal(subgroup:any,id:any,fkGroup:any): void {
    const ref = this.dialog.open(ModalsubgrupoComponent, {
      width: '600px',
      data:{subgroup:subgroup, id : id,fkGroup:fkGroup}
    });
    ref.afterClosed().subscribe(result => {
      this.getsubgroup();
    })
  }

  PostSubgroupModal(): void {
    const ref = this.dialog.open(AddModalSubgroupComponent, {
      width: '600px',
    });
    ref.afterClosed().subscribe(result => {
      this.getsubgroup();
    })
  }


  async getsubgroup(){
    this.subGroup= await this.httpService.get('subgroup');

  }

  async patchsubgroup(subgrupo : any){
    this.subGroup = await this.httpService.patch('subgroup/' + subgrupo.id,{});
    this.getsubgroup();
  }
}
