# Technical Documentation

## 1. Project Architecture & Structure
The web application is structured with separation of concerns:
* **Markup (`index.html`):** Utilizes semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) to improve code clarity, SEO, and accessibility.
* **Styles (`css/styles.css`):** Built with pure CSS3 without heavy external libraries, keeping page load time fast and performance high.
* **Logic (`js/script.js`):** Modular client-side JavaScript wrapped inside `DOMContentLoaded` to prevent blocking DOM parsing.

## 2. Responsive Design & Layout Strategy
* **CSS Grid:** Applied in the projects section (`grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`) to dynamically reorganize cards between mobile, tablet, and wide desktop screens.
* **Flexbox:** Applied to the navigation bar, project tags, and forms for precise alignment and dynamic spacing.
* **Media Queries:** Configured at `@media (max-width: 640px)` to adapt typography scales and navigation margins on small devices.

## 3. Styling & Theming
* **CSS Custom Properties (Variables):** Theme colors, background layers, and typography colors are centralized in `:root` and toggled using `[data-theme="dark"]`.
* **Transitions:** Smooth color and transform transitions (`0.25s`) enhance the visual feedback when hovering cards or switching modes.

## 4. Interactivity & JavaScript Implementation
* **Dynamic Time Greeting:** Queries `new Date().getHours()` on load to tailor the introductory greeting based on local time (Morning, Afternoon, Evening).
* **Theme Persistence:** Toggles the `data-theme` attribute on the root element and stores the choice in browser `localStorage`, ensuring the theme persists across browser reloads.
* **Form Event Handling:** Captures `submit` events, cancels full page reload via `event.preventDefault()`, validates the input fields, and presents temporary feedback for user confirmation.

## 5. Compatibility 
* Fully compatible with modern evergreen browsers.
