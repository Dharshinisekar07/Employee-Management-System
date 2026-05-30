## Employee Management System (EMS)

A full-stack **Employee Management System** built with **React + Vite** on the frontend and **Java** on the backend — designed to manage employee records with a clean, responsive UI.

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)

![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?style=for-the-badge&logo=vite)

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript)

![Java](https://img.shields.io/badge/Java-Backend-ED8B00?style=for-the-badge&logo=java)



##  Live Demo

<!-- Add your deployed link here -->
[View Live Project](#) &nbsp;|&nbsp; [GitHub Repository](#)


##  Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Database Schema](#database-schema)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Author](#author)


##  About the Project

*EMS Pro* is a full-stack Employee Management System that enables organizations to manage their team members efficiently. It supports adding, editing, deleting, and searching employees — all connected to a MySQL backend via a Spring Boot REST API.

This project was built as a portfolio project to demonstrate skills in *React (Frontend), **Spring Boot (Backend), **REST API design, and **MySQL database management*.



##  Features

- *Employee List* — View all employees in a clean, sortable table with ID, First Name, Last Name, and Email
- *Add Employee* — Add new team members via a dedicated form page
-  *Edit Employee* — Update existing employee details with a pre-filled form
- *Delete Employee* — Remove employees with a single click
- *Real-Time Search* — Search employees by name or email instantly
- *Live Stats* — Total employees count and search result count displayed dynamically
- *Responsive Design* — Works seamlessly across devices



##  Tech Stack

| Layer | Technology |
|---|---|
| *Frontend* | React.js |
| *Backend* | Java Spring Boot |
| *Database* | MySQL |
| *API Style* | REST API |
| *HTTP Client* | Axios |
| *Styling* | CSS / Tailwind CSS |
| *Build Tool* | Maven |



##  Database Schema

Database name: ems

### employees Table

| Column | Type | Description |
|---|---|---|
| id | INT (PK, AUTO_INCREMENT) | Unique employee ID |
| first_name | VARCHAR(50) | Employee's first name |
| last_name | VARCHAR(50) | Employee's last name |
| email | VARCHAR(100) | Employee's email address |

### Sample SQL

sql
-- Create database
CREATE DATABASE ems;

-- Create table
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50),
    email VARCHAR(100) NOT NULL
);

-- View all employees
SELECT * FROM ems.employees;


### Sample Data

| ID | Email | First Name | Last Name |
|---|---|---|---|
| 13 | mani@gmail.com | Manikandan | R |
| 14 | santhosh@gmail.com | Santhosh | Naveen |
| 15 | swetha@gmail.com | Swetha | Lakshmi |
| 16 | baskar@gmail.com | Baskar | D |
| 17 | anu@gmail.com | Anu | Priya |
| 18 | hari@gmail.com | Hari | Raj |
| 19 | sathish@gmail.com | Sathish | K |

---

## Screenshots

| Page | Description |
|---|---|
|  *Employee List* | Table view with total count, search bar, Edit & Delete actions |
| *Add Employee* | Form with First Name, Last Name, Email fields |
| *Update Employee* | Pre-filled form to edit existing employee details |
|  *Database View* | MySQL Workbench showing ems.employees table |



##  Getting Started

### Prerequisites

- Node.js v18+
- Java JDK 17+
- Maven 3.8+
- MySQL 8.0+


##  Backend Setup (Spring Boot)


 1. Clone the repository
  git clone https://github.com/your-username/ems-pro.git

 2. Navigate to backend folder
  cd ems-pro/backend

 3. Configure database in src/main/resources/application.properties
 spring.datasource.url=jdbc:mysql://localhost:3306/ems
 spring.datasource.username=root
 spring.datasource.password=your_password
 spring.jpa.hibernate.ddl-auto=update

 4. Run the Spring Boot application
 mvn spring-boot:run


 Backend runs at: http://localhost:8080



##  Frontend Setup (React)


 1. Navigate to frontend folder
cd ems-pro/frontend

 2. Install dependencies
npm install

 3. Start the React app
npm start


Frontend runs at: http://localhost:3000



##  API Endpoints

Base URL: http://localhost:8080/api

| Method | Endpoint | Description |
|---|---|---|
| GET | /employees | Get all employees |
| GET | /employees/{id} | Get employee by ID |
| POST | /employees | Add new employee |
| PUT | /employees/{id} | Update employee |
| DELETE | /employees/{id} | Delete employee |

### Example Request — Add Employee

json
POST /api/employees
Content-Type: application/json

{
  "firstName": "Dharshini",
  "lastName": "S",
  "email": "dharshini@gmail.com"
}


### Example Response

json
{
  "id": 12,
  "firstName": "Dharshini",
  "lastName": "S",
  "email": "dharshini@gmail.com"
}


## What I Learned

- Building a *REST API* with Spring Boot and connecting it to a React frontend
- Performing full *CRUD operations* across a React + Spring Boot + MySQL stack
- Managing *state and routing* in React for multi-page navigation
- Using *Axios* for HTTP requests and handling API responses
- Designing a clean *relational MySQL schema* and writing SQL queries
- Implementing *real-time search/filter* on the frontend without extra API calls



##  Future Improvements

- [ ] Add department and role fields to employee profiles
- [ ] Implement pagination for large employee lists
- [ ] Add JWT-based authentication and login page
- [ ] Export employee data to CSV / PDF
- [ ] Add employee profile photo upload
- [ ] Dark mode toggle


##  Author

### Dharshini S

**Full Stack Developer**

Skills: HTML,CSS,JavaScript,React.js,Java 

Focus: Frontend Development | Backend Development

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/dharshini0705)

If you found this project helpful! please give it a star!

##  License

This project is open source and available under the [MIT License](LICENSE).
