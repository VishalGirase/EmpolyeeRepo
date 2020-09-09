import { Routes, RouterModule, ActivatedRoute, Router, Route } from '@angular/router';
import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'MyEmployee';
  // router: Router;
  // router:RouterModule;
  router:Router;
  // constructor(private activateRouter:ActivatedRoute,private router:Router) { }

  // goToPage():void{
  //   this.router.navigate(['/vish']);
  // }

  // onSubmit(){

  //   console.log('Your form data : ');
  //   this.router.navigate(['/get']);
    
  // }
}
