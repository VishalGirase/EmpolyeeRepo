import { NgForm } from '@angular/forms';
import { NgserviceService } from './../ngservice.service';
import { Employee } from './../Emplyee';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-showdetails',
  templateUrl: './showdetails.component.html',
  styleUrls: ['./showdetails.component.css']
})
export class ShowdetailsComponent implements OnInit {

  employee:Employee = new Employee();
  // employeeService: NgserviceService

  constructor(private router:Router,private employeeService: NgserviceService) { }

  ngOnInit(): void {
  }

  
  goToPage():void{
    this.router.navigate(['/vish']);
  }

    onSubmit(){
    this.save();
    
  }

  save(){
    this.employeeService.saveEmployeeDetails(this.employee).subscribe(data => 
    {
      console.log(data)
      this.router.navigate(['/get']);
    }, 
    error => console.log(error));
    
    
  }

}
