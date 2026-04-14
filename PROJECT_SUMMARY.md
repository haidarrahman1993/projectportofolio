# Project Summary: Portfolio Project - Antigravity

## 🛠️ Overview
This project is a personal portfolio website for **Haidar Rahman, S.T., M.S.**, a researcher and engineer based in Yogyakarta. The site showcases his academic background, research publications, and professional focus in Power Systems, Energy Modelling, and Artificial Intelligence (Data Science).

## 📂 Project Structure

### 1. `pages/` (Static Frontend)
Contains the core static HTML pages:
- **`index.html`**: The main landing page featuring a "Nikola Tesla" quote, academic highlights (NSYS University), and links to research papers.
- **`About_Me.html`**: Detailed background and profile information.
- **`Other_Project.html`**: Showcase of additional projects.
- **`post.html`**: A placeholder or dedicated page for post interactions.

### 2. `scripts/` (Backend & Logic)
This directory contains a Node.js/Express backend integration, which is unusual for a static site but provides dynamic capabilities:
- **`app.js`**: An Express server that handles routing, static file serving (for styles and assets), and a simple in-memory blog system.
- **`views/`**: Contains EJS (Embedded JavaScript) templates for dynamic content rendering (e.g., blog posts).
- **`package.json`**: Lists dependencies including `express` and `ejs`.

### 3. `styles/` (Styling)
- **`solution.css`**: The primary stylesheet used by the landing page (incorporates Bootstrap and custom design).
- **`style.css`**: Secondary or global styles.

### 4. `assets/` (Media)
- **`images/`**: Contains logos for tools (Python, MATLAB, TensorFlow), profile pictures, and project thumbnails (`solar.webp`, `wind.webp`, `hybrid.webp`).

### 5. `requirements.txt`
- An empty file, likely intended for Python-related research dependencies but currently unused by the web project.

## 🚀 Key Features
- **Responsive Design**: Utilizes Bootstrap 5 for layout and sections.
- **Dynamic Content**: Includes a basic Node.js backend capable of managing "Posts" with an in-memory database.
- **Research Showcase**: Integrated links to academic journals (UTY, IOP Science).
- **Professional Identity**: Strong emphasis on technical skills (Data Science, Energy Engineering).

## 📝 Observations
- The project structure suggests a migration or hybrid setup between a purely static HTML site (in `pages/`) and a dynamic Node.js application (in `scripts/`).
- `app.js` is configured to serve static files from the parent directories (`../styles` and `../assets`), allowing the Express server to function as the unified entry point.
