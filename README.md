# **Routing with React Router DOM**

This repository demonstrates how to implement routing in a React application using react-router-dom. The following steps will guide you through setting up and configuring routing in your React app.

## **Table of Contents**
- Installation
- Setting Up the Router
- Declaring Routes
- Types of Routes
- Default Route (/)
- Nested Routes
- Dynamic Routes
- Private Routes
- 404 Route (Fallback Route)


## **Installation**
To get started, ensure you have Node.js and npm installed. Then, install the required packages:

###Install React Router DOM:

```bash
npm install react-router-dom
```
Install react-router-dom types for TypeScript (if you're using TypeScript):

```bash
npm install @types/react-router-dom
````
## **Setting Up the Router**
To enable routing in your React app:

Wrap your app in a BrowserRouter in the index.js file (or main.jsx if using Vite).

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

```
## **Declaring Routes**
Define routes in your App.js or a dedicated routing file. Here's an example:

```jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <Routes>
      {/* Default Route */}
      <Route path="/" element={<Home />} />

      {/* Nested Routes */}
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      {/* Dynamic Route */}
      <Route path="/profile/:userId" element={<Profile />} />

      {/* Private Route */}
      <Route
        path="/dashboard"
        element={
          isLoggedIn ? <Dashboard /> : <Navigate to="/" replace />
        }
      />

      {/* 404 Fallback Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;

```
## **Types of Routes**

### **Default Route**
Path: /
This is the root route of your application. It’s usually the landing page.
Example:
```jsx
<Route path="/" element={<Home />} />
```

### **Nested Routes**
Allows creating a parent route with child routes.
Useful for layouts where multiple pages share common components (e.g., navigation bar).
Example:
```jsx
<Route path="/dashboard" element={<DashboardLayout />}>
  <Route path="settings" element={<Settings />} />
  <Route path="profile" element={<UserProfile />} />
</Route>
```

### **Dynamic Routes**
Dynamic segments in the route (:paramName) allow passing data via the URL.
Example:
```jsx
<Route path="/profile/:userId" element={<Profile />} />
```

### **Access dynamic params using useParams():**
```jsx

import { useParams } from "react-router-dom";

const Profile = () => {
  const { userId } = useParams();
  return <h1>User Profile: {userId}</h1>;
};
```
### **Private Routes**
Restricts access to certain routes based on authentication.
Example:
```jsx
<Route
  path="/dashboard"
  element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" replace />}
/>
```
### **404 Route (Fallback Route)**
Matches all undefined paths and renders a "Not Found" page.
Example:
```jsx

<Route path="*" element={<NotFound />} />
```



Feel free to modify the routes and components to fit your needs! If you encounter any issues, check the React Router documentation.
