# Mini-LMS-project
Mini LMS System: This system should support two types of users: Teacher and Student, with both  email/password login
Mini LMS Portal
This project is a Mini Learning Management System (LMS) developed as part of a MERN Stack Internship Assignment.
It includes User Authentication, Role-Based Access, Student Management, and Result Management with a modern React + Bootstrap front-end.

Tech Stack

Frontend
React JS
React Router DOM
Bootstrap 5
Axios

Backend
Node JS
Express JS
MongoDB Atlas
Mongoose
JWT Authentication
Bcrypt Password Hashing
CORS
Dotenv

Dependencies

Backend Runtime Dependencies
Install inside the backend folder:

npm install express
npm install mongoose
npm install mongodb
npm install bcrypt
npm install jsonwebtoken
npm install dotenv
npm install cors
npm install -g nodemon

Backend Runtime Dependencies
Install inside the backend folder:

npm install bootstrap
npm install axios
npm install react-router-dom

Installation & Setup Guide

1.Clone the Repository

git clone <repo-url>
cd Mini_LMS


Backend Setup:
cd backend
npm install
npm run dev

Create .env file:
PORT=5000
MONGO_URI=your_mongodb_atlas_url
JWT_SECRET=your_secret_key

Frontend Setup:
cd frontend
npm install
npm start


Dummy Credentials:

Registration:
Full Name: Teacher One
Teacher Login: teacher@test.com
Teacher Password: 123456

Full Name: Student One
Student Login: student1@test.com
Student Password: 123456



Login:
Teacher Login: teacher@test.com
Teacher Password: 123456

Student Login: teacher@test.com
Student Password: 123456


API Endpoints
Auth Routes
Method	Endpoint	Description
POST	/api/auth/register	Register teacher/student
POST	/api/auth/login	Login & receive token

Teacher Routes
Method	Endpoint	Description
GET	/api/students	View all students
POST	/api/results	Add new result
PUT	/api/results/:id	Update result
GET	/api/results	Get all results

Student Routes
Method	Endpoint	Description
GET	/api/profile	View student profile
GET	/api/results/my	Get student's own results

