package com.employee.resource;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.employee.model.Employee;
import com.employee.service.EmployeeService;

@RestController
@RequestMapping("/api/v1")
public class EmployeeController {

	@Autowired
	EmployeeService mongoService;

	
	@PostMapping("/createEmployeeDetails")
	@CrossOrigin(origins = "http://localhost:4200")
	public Employee saveDetails(@RequestBody Employee employee) {
		Employee employee1= mongoService.saveEmployeeDetails(employee);
		return employee1;
	}
	
	@GetMapping("/getEmployeeDetails")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Employee> getDetails() {
		List<Employee> employee1= mongoService.getEmpolyeeDetails();
		return employee1;
	}
	
	@GetMapping("/getEmployeeById/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public Optional<Employee> getEmployeeById(@PathVariable("id") String id) {
		Optional<Employee> employee1= mongoService.getEmpolyeeDetailsById(id);
		return employee1;
	}
	
	@DeleteMapping("/deleteEmployeeById/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public void deleteByEmployeeById(@PathVariable("id") String id) {
		 mongoService.deleteById(id);
	}
}
