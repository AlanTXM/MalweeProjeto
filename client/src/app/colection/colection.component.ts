import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpService } from 'src/services/http.service';
import { AddModalColectionComponent } from '../add-modal-colection/add-modal-colection.component';
import { ModalcolectionComponent } from '../modalcolection/modalcolection.component';

@Component({
  selector: 'app-colection',
  templateUrl: './colection.component.html',
  styleUrls: ['./colection.component.scss']
})
export class ColectionComponent implements OnInit {

  description : string = '';
  colections : Array<any> = [];
  id : number | undefined;
  search : string = '';
  mostrar : boolean = false;
  mostrar2 : boolean = false;
  mostrar3 : boolean = false;
  
  constructor(private router : Router, private httpService : HttpService,  public dialog : MatDialog) { }

  ngOnInit(): void {
    this.getcolection();
  }
  
  async postcolection(){
    this.colections = await this.httpService.post('colection', {description : this.description});
  }
  async getcolection(){
    this.colections = await this.httpService.get('colection');
  }
  async patchcolection(colection : any){
    this.colections = await this.httpService.patch('colection/' + colection.id,{});
    this.getcolection();
  }

  postColectionModal(): void {
    const ref = this.dialog.open(AddModalColectionComponent, {
      width : '550px'
    });
    
    ref.afterClosed().subscribe(result => {
      this.getcolection();
    })
  }

  editColectionModal(grupo : any, id : any): void {
    const ref = this.dialog.open(ModalcolectionComponent, {
      width : '550px',
      data : {grupo : grupo, id : id}
    });

    ref.afterClosed().subscribe(result => {
      this.getcolection();
    })
  }
}