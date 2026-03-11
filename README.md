# DreamHome Property Management System

## 📌 Overview
This project is a combined innovative task for **Information Management (IM)** and **Web Systems and Technologies (WebSys)**.  
It implements the **DreamHome case study** as a full-stack system with:
- **PostgreSQL database** (ERD, schema, functions, procedures, triggers, concurrency control)  
- **React frontend** (HTML, CSS, JavaScript) for user interaction and reporting  

The system manages branch offices, staff, properties, renters, leases, and inspections.

---

## 🎯 Objectives
- Model DreamHome operations in a relational database (PostgreSQL).  
- Build a web-based system to interact with the database.  
- Demonstrate integration of **database design** and **web technologies**.  

---

## 🏗 Deliverables
- **ERD**: Entity-relationship diagram of DreamHome.  
- **Database**: PostgreSQL schema, sample data.  
- **Functions & Procedures**: Business logic (e.g., lease duration, staff property limits).  
- **Triggers**: Enforce constraints (e.g., max 20 properties per staff).  
- **Concurrency Control**: Transactions and isolation levels.  
- **Frontend System**: React-based interface with forms, tables, dashboards.  

---

## ⚙️ Tech Stack
- **Frontend**: React, HTML, CSS, JavaScript  
- **Backend/API**: Node.js 
- **Database**: PostgreSQL  

---

## 🚀 Setup Instructions
1. Clone the repo:
   ```bash
   git clone https://github.com/Jedlouies/dreamhome.git
   cd dreamhome
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure database in .env:
   ```
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=your_user
   DB_PASS=your_password
   DB_NAME=dreamhome
   ```
4. Run migrations and seed data:
   ```bash
   npm run migrate
   npm run seed
   ```
5. Start the development server:
   ```bash
   npm start
   ```
---

## 👥 Team Roles
- Database Architect: ERD, schema, triggers, procedures.
- Backend Developer: API endpoints, DB integration.
- Frontend Developer: React components, routing, state management.
- UI/UX Designer: Styling, layout, accessibility.
- Integrator: QA, documentation, deployment.

## 📊 Case Study Reference
- Branch offices
- Staff and supervisors
- Properties for rent
- Renters and requirements
- Lease agreements
- Property inspections
