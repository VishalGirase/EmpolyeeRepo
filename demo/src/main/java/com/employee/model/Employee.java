package com.employee.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection =  "Employee")
public class Employee {

@Id
String id;
String email;
String info;

public Employee(String id, String email, String info) {
	super();
	this.id = id;
	this.email = email;
	this.info = info;
}

public String getId() {
	return id;
}

public void setId(String id) {
	this.id = id;
}

public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}

public String getInfo() {
	return info;
}

public void setInfo(String info) {
	this.info = info;
}

@Override
public String toString() {
	return "Employee [id=" + id + ", email=" + email + ", info=" + info + "]";
}


}
