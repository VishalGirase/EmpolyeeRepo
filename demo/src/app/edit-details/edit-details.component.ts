import { Employee } from './../Emplyee';
import { NgserviceService } from './../ngservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {
  [x: string]: any;
  id:String;
  private sub :any;
  employee:Employee = new Employee();
  emp:Employee;
  constructor(private router:Router,private employeeService: NgserviceService,private route: ActivatedRoute) { }

  ngOnInit(): void{
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    })
    this.employeeService.getEmployeeDetailsById(this.id).subscribe(data =>{
      this.employee = data;
      console.log(data);
    },
    error => console.log(error));
  }

  onSave(){
    this.employeeService.saveEmployeeDetails(this.employee).subscribe(data => 
      {
        console.log(data)
        this.router.navigate(['/backToShowDetails']);
      }, 
      error => console.log(error));
  }

}
