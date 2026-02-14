# Chuks Kitchen – Frontend Implementation
## Project Overview

This project is a frontend implementation of the Chuks Kitchen Food Ordering Interface, built as part of the TrueMinds Innovations internship deliverable.

The goal of this project is to translate the provided Figma UI design into a responsive, structured, and maintainable web application using modern frontend tools.

The application represents a food ordering platform where users can:

* Browse meals

* Explore categories

* View meal details

* Add items to cart

* Proceed through checkout flow

* Sign in and create an account

This implementation focuses strictly on frontend architecture and UI reproduction. No backend, authentication logic, or API integration is included, as stated in the deliverable requirements.

##  Tech Stack Used
1. React 19 + Vite
React was used for component-based architecture and UI composition.
Vite was chosen for fast development build time and optimized production bundling.

2. Tailwind CSS v4
Tailwind was used for styling.
Instead of writing custom CSS files for every component, utility classes were used to:

* Maintain consistent spacing

* Control typography

* Manage layout structure

* Improve responsiveness

Reusable color variables were defined in index.css based on the Figma color palette.

3. React Router DOM (v7)
Used for client-side routing.
The application is structured with:

* UserLayout for main application pages

* AuthLayout for authentication-related screens

* This separation improves maintainability and scalability.

4. Lucide React

Used for clean and lightweight icons such as the mobile menu toggle in the Navbar.

5. ESLint

Configured to enforce code consistency and maintain readable structure.

## Project Structure
src/
│
├── assets/              # Images downloaded from Figma and renamed properly
│
├── components/          # Reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│
├── layouts/             # Layout wrappers
│   ├── AuthLayout.jsx
│   ├── UserLayout.jsx
│
├── pages/
│   ├── auth/            # Authentication-related screens
│   │   ├── SignIn.jsx
│   │   ├── SignUp.jsx
│   │   ├── Welcome.jsx
│   │
│   ├── Home.jsx
│   ├── Explore.jsx
│   ├── Account.jsx
│   ├── Order.jsx
│
├── App.jsx              # Route configuration
├── main.jsx             # Application entry point
├── index.css            # Global styles and theme variables


## Architectural Decisions

Layouts were separated from pages to avoid repeating Navbar and Footer across multiple screens.

Authentication pages are grouped inside pages/auth for better organization.

Shared components are isolated inside components to encourage reuse.

Assets were renamed clearly to avoid confusion and improve maintainability.

This structure allows another developer to quickly understand how routing and layout composition works.

## Design Interpretation

The Figma design was used as the primary reference throughout development.

## Implementation Approach

* The Figma file was kept open during development.

* Required images were downloaded, renamed clearly, and stored inside the assets folder.

* Colors from the design were defined in index.css as reusable theme values.

* Each screen was implemented section by section while comparing spacing, typography, and alignment against the design.

## Navbar Translation and Improvement

The original Figma navbar alignment was not properly structured.
The layout lacked clear separation between:

* Logo, navigation links and login button is scattered and not properly arranged

Instead of replicating that exact misalignment, the navbar was improved for better UI structure and usability:

* Logo aligned left

* Navigation links centered on desktop

* Login button aligned right

* Mobile menu implemented with toggle animation using useState

* Responsive collapse behavior added for smaller screens

This decision maintains design intent while improving visual hierarchy and usability.

## Assumptions Made

* Font weights were approximated where not clearly specified.

* Spacing values were interpreted using Tailwind utilities based on visual comparison.

* Hover states and transitions were added where interaction behavior was not clearly defined.

* Active navigation highlighting was implemented using NavLink.

## Responsiveness

* Basic responsive techniques were applied:

* Flexbox and Grid for layout control

* Tailwind breakpoints (md, lg) for layout adjustments

The navbar includes a mobile dropdown menu triggered by a hamburger icon.

Further screen responsiveness will continue as additional pages are completed.


## Limitations & Improvements
### Current Limitations

* No backend or state persistence

* Cart functionality is static

* No form validation logic implemented yet

### Improvements If Given More Time

* Implement proper state management for cart

* Add animation polish across sections

* Improve performance optimization

* Refine typography scaling across devices

The navbar layout was also improved beyond the Figma structure to enhance alignment consistency and user experience.

## How to Run the Project
npm install
npm run dev

### For production build:
npm run build
npm run preview

