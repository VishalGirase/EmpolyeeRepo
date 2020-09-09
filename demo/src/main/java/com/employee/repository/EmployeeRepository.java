package com.employee.repository;

import com.employee.model.Employee;

public interface EmployeeRepository extends org.springframework.data.mongodb.repository.MongoRepository<Employee, String>{

}
