DROP DATABASE IF EXISTS schema_db;

CREATE DATABASE schema_db;

USE schema_db;

CREATE TABLE department (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    CONSTRAINT FK_DEPARTMENT FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    CONSTRAINT FK_role FOREIGN KEY (role_id) REFERENCES role(id),
    manager_id INT,
    CONSTRAINT FK_manager_id FOREIGN KEY (manager_id) REFERENCES employee(id)
);