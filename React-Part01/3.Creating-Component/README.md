# Creating Component in React

This repository demonstrates the basics of creating and using functional components in React. Components are the building blocks of a React application, and this project showcases how to create simple, reusable components like a title and description.

## Project Overview

In this project, we create two basic functional components:
- **Title**: A component that renders a title.
- **Description**: A component that renders a description.

The main `App` component brings them together, showing how components can be reused multiple times in a single component tree.

## Components

### 1. **Title Component**
   - A simple functional component that returns an `<h1>` element with a text title.

### 2. **Description Component**
   - A functional component that returns an `<h3>` element with a text description.

### 3. **App Component**
   - The root component of the project. It renders the `Title` and `Description` components multiple times within a `div` container.
   - Demonstrates that a React component must return a single root element.

## Key Concepts

- **Functional Components**: The `Title` and `Description` components are functional components, which are simple JavaScript functions that return JSX.
- **Reusability**: Components can be reused multiple times in the UI, as shown by rendering the `Title` and `Description` components more than once.
- **Single Root Element**: The `App` component wraps all elements inside a single `div`, following React's rule that every component must return a single root element.

## How It Works

- The `App` component returns a `div` containing two `Title` and two `Description` components.
- React renders these components on the page, and the UI displays the text "I am the Title!" and "I am the Description!" in the correct order.
- The project demonstrates basic component structure and reuse, which are essential to building scalable React applications.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **CSS**: Basic styling applied through `App.css`.

---

Thank you for exploring the Creating Component project!