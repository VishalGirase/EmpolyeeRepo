package com.employee.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.model.Employee;
import com.employee.repository.EmployeeRepository;

@Service
public class EmployeeService {

	@Autowired
	EmployeeRepository mongoRepository;
	
	public Employee saveEmployeeDetails(Employee employee) {
		return mongoRepository.save(employee);
	}
	
	public Optional<Employee> getEmpolyeeDetailsById(String id) {
		return mongoRepository.findById(id);
	}
	
	public List<Employee> getEmpolyeeDetails() {
		return mongoRepository.findAll();
	}
	
	public void deleteById(String id) {
		mongoRepository.deleteById(id);
	}

	
}
