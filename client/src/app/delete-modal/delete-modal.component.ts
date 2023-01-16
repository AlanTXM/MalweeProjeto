import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from 'src/services/http.service';
import { DialogDataClient } from '../user/user.component';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})

export class DeleteModalComponent implements OnInit {

  public client: Array <any>=[];
  public address: Array <any>=[];
  public clients : Array <any> = [];
  id : number = 0;

  constructor(public dialogRef: MatDialogRef<DeleteModalComponent>, private httpService : HttpService,  public dialog : MatDialog, 
    @Inject(MAT_DIALOG_DATA) public data: DialogDataClient) { }

  ngOnInit(): void {
    this.clients.push(this.data.client);
    this.listAddress();
  }

  onNoClick() {
    this.dialogRef.close();
  }

  async listAddress(){
    this.address = await this.httpService.get(`client/${this.data.id}`);
    console.log();
  }

  async patchclient(cliente : any){
    this.clients = await this.httpService.patch('client/' + cliente.id, {});
  }
}
