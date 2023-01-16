import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpService } from 'src/services/http.service';

@Component({
  selector: 'app-add-modal-product',
  templateUrl: './add-modal-product.component.html',
  styleUrls: ['./add-modal-product.component.scss']
})

export class AddModalProductComponent implements OnInit {

  product: Array <any>=[];
  description: string | undefined;
  salePrice: number | undefined;
  selectedGroup: number = 0;
  selectedSubgroup: number = 0;
  selectedColection: number = 0; 
  public group : Array <any> = [];
  public subgroup: Array <any> = [];
  public colection : Array <any> = [];

  constructor(public dialogRef: MatDialogRef<AddModalProductComponent>, private httpService : HttpService) { }

  async ngOnInit(): Promise<void> {
    await this.getGroup();
    await this.getSubgroup();
    await this.getColection();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public async getGroup(){
    this.group = await this.httpService.get('group');
  }

  public async getSubgroup(){
    this.subgroup = await this.httpService.get('subgroup');
  }

  public async getColection(){
    this.colection = await this.httpService.get('colection');
  }

  async postProduct(){
    this.product = await this.httpService.post('product/',{description: this.description, fkGroup: this.selectedGroup, fkSubGroup: this.selectedSubgroup, fkCollection: this.selectedColection, salePrice: this.salePrice});
    this.dialogRef.close();
  }

}
