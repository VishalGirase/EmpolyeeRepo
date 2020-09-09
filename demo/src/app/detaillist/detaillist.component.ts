import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from './../Emplyee';
import { NgserviceService } from './../ngservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detaillist',
  templateUrl: './detaillist.component.html',
  styleUrls: ['./detaillist.component.css']
})
export class DetaillistComponent implements OnInit {
  employee:Employee = new Employee();
  list: Employee[];
  emp:Employee;
  
  constructor(private employeeService: NgserviceService,private router:Router,private activeRoute:ActivatedRoute) { }

  ngOnInit() {
    this.employeeService.getEmployeeDetails().subscribe(data => 
      {
        console.log(data);
        this.list = data;
      }, 
      error => console.log(error));   
    }
  
    goToEdit(emp:Employee){
    
      // this.employeeService.getEmployeeDetailsById(this.emp.id).subscribe(data =>{
      //   this.employee = data;
      //   console.log(data);
        this.router.navigate(['/getEdit/',emp.id]);
      // },
      // error => console.log(error));
     
    }

    goToDelete(){

    }

}
