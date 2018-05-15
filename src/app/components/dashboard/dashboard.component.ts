import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 index:String;
    constructor(private router: Router) { }
  ngOnInit() {
  }
  title='dashboard';

selectedIndia(){
this.index='India';
}
selectedUS()
{
  this.index='US';
}

selectedIndex(){
  if(this.index=='India')
  {return true;}
  else {return false;}
}

}
