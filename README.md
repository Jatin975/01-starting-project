## Food Order Website

A responsive and interactive food ordering website built using **React.js**. This project demonstrates the implementation of **React Context API** for state management, network calls to a dummy backend, and smooth user navigation through the cart and checkout process.

---

## Features

- **Browse Meals**: Display a list of meals fetched from a dummy backend.
- **Manage Cart**: Add, edit, or remove meals in a shopping cart.
- **Checkout Process**: Navigate to a checkout page to review and submit orders.
- **State Management**: Utilizes **React Context API** to manage:
  - **Cart State**: Tracks items and quantities in the shopping cart.
  - **User Progress State**: Handles navigation between cart modal and checkout portal.
- **Network Requests**:
  - **GET** request to fetch available meals data.
  - **POST** request to submit order data (cart items + customer details).

---

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/food-order-website.git
   cd food-order-website
   
2. Install npm packages 
   ```bash
   npm install
   
3. Start the development server: 
   ```bash
   npm run dev
   
4. Set up the backend:
   ```bash
   cd backend
   node app.js
   
Usage
-----

1.  Browse the meals available on the homepage.
2.  Add meals to the cart by clicking the **Add to Cart** button.
3.  View and manage cart items by opening the cart modal:
    -   Increase or decrease item quantities.
    -   Remove items from the cart.
4.  Proceed to checkout, fill in your details, and submit your order.

Tech Stack
----------

-   **Frontend**: React.js, CSS
-   **State Management**: React Context API
-   **Backend**: Dummy Node.js server for API requests
-   **HTTP Client**: Fetch API

  Key Concepts Practiced
----------------------

-   **React Context API**:

    -   Avoids prop drilling by sharing state across multiple components.
    -   Efficiently manages the shopping cart and user progress states.
-   **HTTP Requests**:

    -   Implements `GET` for fetching data and `POST` for submitting orders.
    -   Handles asynchronous data flows in React components.
-   **Component Composition**:

    -   Breaks down the UI into modular, reusable components for better maintainability.
 
Demo
----
![image](https://github.com/user-attachments/assets/6b358e99-3494-42cd-8d38-b1188926fe2d) 
![image](https://github.com/user-attachments/assets/91d58c2d-63db-4279-8d02-578cac3d9367)
![image](https://github.com/user-attachments/assets/278c823c-65ec-461f-ac0c-ea279422bf76)
![image](https://github.com/user-attachments/assets/577c40ae-aac6-42d4-85d1-e60910d6d1dd)


