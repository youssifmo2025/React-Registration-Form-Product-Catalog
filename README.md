# React Registration Form & Product Catalog

## Overview
A modern, responsive React Single Page Application (SPA) showcasing a robust user registration flow and an interactive product catalog. This project demonstrates proficiency in client-side form validation, state management, component modularity, and responsive web design. It serves as a practical implementation of fundamental and advanced React concepts without relying on external UI libraries for its core logic.

## Live Demo
[Live Demo](TODO_DEPLOYMENT_URL)

## Screenshots
### Desktop
![Desktop Registration Form](TODO_DESKTOP_REGISTRATION_IMAGE_URL)
![Desktop Product Catalog](TODO_DESKTOP_CATALOG_IMAGE_URL)

### Mobile
![Mobile Registration Form](TODO_MOBILE_REGISTRATION_IMAGE_URL)

## Features
- **Client-Side Form Validation:** Real-time evaluation of user input for required fields, email formatting, and password constraints (matching passwords).
- **Interactive Error Handling:** Dynamic error message rendering triggered immediately `onBlur` or `onChange`.
- **Reusable React Components:** Highly modular custom `FormInput` and `Navbar` components.
- **Routing & Navigation:** Seamless client-side routing between the Product Catalog and Registration views.
- **Responsive Layouts:** Fluid, mobile-first design leveraging CSS Grid and Flexbox for optimal viewing on any device.
- **Mock E-Commerce Functionality:** Product listing with dummy data and interactive "Add to Cart" mock actions.

## Tech Stack
- **React 19**
- **JavaScript (ES6+)**
- **HTML5 & Vanilla CSS3**
- **React Router DOM v7** (Client-side routing)
- **Vite** (Build tool and development server)

## React Architecture
- **Component Structure:** The application separates view-level components (`pages/`) from reusable UI blocks (`components/`). 
- **State Management:** Utilizes React's `useState` hook for local component state, particularly for managing controlled inputs, tracking touched fields, and handling validation errors in the registration form.
- **Routing:** Implements `react-router-dom` to manage navigation paths (`/` and `/register`) rendering respective page components.
- **Separation of Concerns:** Core business logic (form validation rules) is entirely decoupled from the UI components and housed within a dedicated utility module (`validators.js`).

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── FormInput.jsx
│   └── Navbar.jsx
├── pages/
│   ├── Home.jsx
│   └── Register.jsx
├── styles/
│   └── Register.css
├── utils/
│   └── validators.js
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

## API Integration
This specific project relies entirely on localized, static mock data. It does not integrate with external REST or GraphQL APIs.
- The `Home` product catalog is populated using dummy JSON arrays directly within the application to simulate fetched data.
- The registration flow simulates a successful payload submission via client-side alerts rather than a backend `POST` request.

## Responsive Design
The application employs a mobile-first approach using native CSS features:
- **Mobile:** Components stack vertically using Flexbox with 100% width properties to accommodate smaller viewports.
- **Tablet & Desktop:** Transitions into multi-column CSS Grid layouts for the product catalog and centers the registration form card elegantly in the viewport.

## Challenges & Solutions
1. **Complex Interdependent Form Validation:** 
   - *Challenge:* Validating the "Confirm Password" field in real-time based on the ever-changing value of the "Password" field.
   - *Solution:* Implemented conditional validation triggers inside the `onChange` handler, ensuring the confirm password validation function receives the most up-to-date form state payload.
2. **Untimely Error Flashes:** 
   - *Challenge:* Preventing error messages from appearing before a user has finished typing or interacting with a specific input field.
   - *Solution:* Tracked a `touched` state dictionary and bound validation displays strictly to the `onBlur` event or post-submission attempts.
3. **Bloated React Components:**
   - *Challenge:* The `Register` component was growing too large due to inline validation regex rules and repetitive HTML input tags.
   - *Solution:* Abstracted the inputs into a reusable `<FormInput />` component and moved all regex and validation logic out to `utils/validators.js`.

## Performance & Code Quality
- **Reusable Components:** Reduces redundant code by rendering multiple form fields dynamically via the `FormInput` abstraction.
- **Separation of Logic & UI:** Ensures validation logic is isolated and highly testable independent of the React component tree.
- **Controlled Inputs:** Provides a single source of truth for form data, avoiding DOM manipulation and ensuring deterministic UI renders.
- **Vite Ecosystem:** Leverages ES modules during development for lightning-fast Hot Module Replacement (HMR).

## Installation

Follow these steps to run the project locally:

```bash
git clone YOUR_REPOSITORY_URL
cd lab-4
npm install
npm run dev
```
Open `http://localhost:5173` (or the port provided by Vite) in your browser.

## Environment Variables
None required for this project.

## Future Improvements
- **Global State Management:** Integrate the Context API or Redux Toolkit to manage a global shopping cart state accessible across the entire application.
- **Backend API Integration:** Replace the mocked form submission with `Axios` or `Fetch` requests to a real authentication server.
- **Authentication Guards:** Implement Protected Routes to prevent unauthorized access to specific dashboard pages post-registration.

## Author
**Frontend React Developer**
Passionate software engineer focused on building clean, accessible, and performant user interfaces. Dedicated to writing maintainable code and solving complex UI/UX challenges using modern web technologies.
