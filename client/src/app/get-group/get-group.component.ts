import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/services/http.service';

@Component({
  selector: 'app-get-group',
  templateUrl: './get-group.component.html',
  styleUrls: ['./get-group.component.scss']
})
export class GetGroupComponent implements OnInit {

  grupos : Array<any> = [];
  search : string = '';

  constructor(private httpService : HttpService) { }

  ngOnInit(): void {
    
  }

  async getgroup(){
    this.grupos = await this.httpService.get('group');
  }

}
