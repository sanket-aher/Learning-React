# JSXRules-ReactFragment

This repository demonstrates key JSX rules in React and the use of **React Fragments** to structure a simple React application. The project highlights best practices when working with JSX and showcases how to use React components and fragments effectively.

## Project Overview

The **JSXRules-ReactFragment** project focuses on:
- Enforcing JSX rules such as using a single root element, closing all tags, and using camelCase attributes.
- Utilizing **React Fragments** to avoid unnecessary wrapper elements in the DOM.
- Creating reusable components like `Title` and rendering them multiple times.

## Key Concepts Covered

### 1. **JSX Rules**
   - **Single Root Element**: React components must return a single root element. In this project, components are wrapped using React Fragments to prevent adding extra DOM nodes.
   - **Closing Tags**: All tags, whether self-closing (like `<img />`) or wrapping tags (like `<h1></h1>`), must be properly closed in JSX.
   - **camelCase Attributes**: HTML attributes such as `class` must be written as `className` in JSX due to reserved keywords in JavaScript.

### 2. **React Fragments**
   - React Fragments (`<> </>`) are used to group multiple elements without adding extra nodes to the DOM, making the code cleaner and more efficient.

### Components Used

#### 1. **App Component**
   - The root component that demonstrates the use of JSX rules and renders the `Title` component multiple times within a React Fragment.

#### 2. **Title Component**
   - A simple reusable functional component that displays a heading with the text "I am the Title!".

## File Structure

- **App.jsx**: The root component that applies JSX rules and renders the `Title` component multiple times within a React Fragment.
- **Title.jsx**: A simple functional component that renders an `<h1>` element.

## How It Works

- The `App` component renders the `Title` component multiple times, demonstrating component reuse.
- JSX rules are followed, such as returning a single root element and closing all tags correctly.
- React Fragments (`<> </>`) are used to wrap the elements in the `App` component, avoiding unnecessary DOM elements.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **JSX**: A syntax extension that allows writing HTML inside JavaScript.

---

Thank you for exploring the **JSXRules-ReactFragment** project! 😊