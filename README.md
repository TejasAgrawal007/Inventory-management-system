# Microservices-Based Inventory Management System

## User Service
Handles authentication and user management.

### Installation
```bash
cd user-service
npm install
node index.js
```

### Endpoints

#### 1️⃣ Register a User
**POST** `/register`
- **Body:**
  ```json
  {
      "username": "adminuser",
      "password": "password123",
      "role": "ADMIN"
  }
  ```
- **Response:**
  ```json
  { "message": "User registered successfully" }
  ```

#### 2️⃣ Login to Get JWT Token
**POST** `/login`
- **Body:**
  ```json
  {
      "username": "adminuser",
      "password": "password123"
  }
  ```
- **Response:**
  ```json
  { "token": "your_generated_jwt_token" }
  ```

---

## Inventory Service
Handles inventory CRUD operations.

### Installation
```bash
cd inventory-service
npm install
node index.js
```

### Authentication
For all inventory requests, add the following **Header** in Postman:
```
Key: Authorization
Value: Bearer your_generated_jwt_token
```

### Endpoints

#### 1️⃣ Create a Product (Admin Only)
**POST** `/product`
- **Body:**
  ```json
  {
      "name": "Laptop",
      "price": 1200,
      "quantity": 10
  }
  ```
- **Response:**
  ```json
  {
      "_id": "product_id",
      "name": "Laptop",
      "price": 1200,
      "quantity": 10
  }
  ```

#### 2️⃣ Get All Products (Admin & User)
**GET** `/product`
- **Response:**
  ```json
  [
      {
          "_id": "product_id",
          "name": "Laptop",
          "price": 1200,
          "quantity": 10
      }
  ]
  ```

#### 3️⃣ Update a Product (Admin Only)
**PUT** `/product/{product_id}`
- **Body:**
  ```json
  {
      "price": 1000
  }
  ```
- **Response:** `{ "message": "Product updated successfully" }`

#### 4️⃣ Delete a Product (Admin Only)
**DELETE** `/product/{product_id}`
- **Response:** `{ "message": "Product deleted" }`

#### 5️⃣ Get a Product by ID (Admin & User)
**GET** `/product/{product_id}`
- **Response:**
  ```json
  {
      "_id": "product_id",
      "name": "Laptop",
      "price": 1000,
      "quantity": 10
  }
  ```

---

## Expected Errors
- If you **don’t send a token**, you'll get:
  ```json
  { "message": "Access Denied" }
  ```
- If a **USER tries to create, update, or delete a product**, they’ll get:
  ```json
  { "message": "Access Forbidden" }
  ```

---

