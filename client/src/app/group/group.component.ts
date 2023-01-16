import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpService } from 'src/services/http.service';
import { AddModalGroupComponent } from '../add-modal-group/add-modal-group.component';
import { GetGroupComponent } from '../get-group/get-group.component';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})

export class GroupComponent implements OnInit{
  
  description : string = '';
  search : string = '';
  grupos : Array<any> = [];
  public subGroup : Array<any> = [];
  id : number | undefined;
  html : number = 0;
  mostrar : boolean = false;
  mostrar2 : boolean = false;
  mostrar3 : boolean = false;

  constructor(private router : Router, private httpService : HttpService, public dialog : MatDialog) { }

  ngOnInit(): void {
    this.getgroup();
  }
  async getgroup(){
    this.grupos = await this.httpService.get('group');
  }
  async patchgroup(grupo : any){
    this.grupos = await this.httpService.patch('group/' + grupo.id,{});
    this.getgroup();
  }

  postGroupModal(): void {
    const ref = this.dialog.open(AddModalGroupComponent, {
      minWidth : '550px'
    });
    ref.afterClosed().subscribe(result => {
      this.getgroup();
    })
  }

  editGroupModal(grupo : any, id : any): void {
    const ref = this.dialog.open(ModalComponent, {
      width : '550px',
      height : '350px',
      data : {grupo : grupo, id : id}
    });
    ref.afterClosed().subscribe(result => {
      this.getgroup();
    })
  }

  getGroupModal(): void {
    const ref = this.dialog.open(GetGroupComponent,{
      width : '500px'
    });
    ref.afterClosed().subscribe(result => {
      this.getgroup();
    })
  }
}