import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any = [];

  constructor(private userDataService: UserdataService) { }

  ngOnInit(){

    this.userDataService.users().subscribe((data:any)=>{
      this.users = data;
      console.log(data);
    });


    this.userDataService.users().subscribe((data)=>{

    });


  }
  
  
  deleteUser(data:any){
    console.log(data);

    //this.users.shift();
    this.users.splice(data, 1);

  }


}
