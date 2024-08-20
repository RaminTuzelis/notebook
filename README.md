# Notebook Project - Backend Setup

## Prerequisites

Before you start, ensure that you have the following installed on your system:

- Node.js (version 14 or later)
- MySQL server (e.g., MySQL Workbench or XAMPP)
- Git (optional, for cloning the repository)

## Installation and Setup

Follow the steps below to set up the backend:

### 1. Clone the repository

### 2. Install Dependencies
```npm install```

### 3. Configure MySQL Database

```
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password', // Change this to your MySQL root password
  database: 'notebook'
});
```

### 4. Run the Server
```
node server.js
```
You should see: 
```
Server running at http://127.0.0.1:3001/
```
