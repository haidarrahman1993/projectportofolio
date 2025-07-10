// app.js (located in PORTFOLIO_PROJECT/scripts/)

import express from 'express';
import path from 'path'; // Make sure path module is imported
import { fileURLToPath } from 'url'; // For ES Modules __dirname

const app = express();
const port = 3000;

// --- IMPORTANT: Correctly derive __dirname for ES Modules ---
// This part remains crucial for getting the directory of the current script file.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// --- End of __dirname setup ---


// Middleware to parse URL-encoded bodies (for form data)
app.use(express.urlencoded({ extended: true }));

// --- ADJUSTMENT 1: Set EJS views directory ---
// Your views are now in 'PORTFOLIO_PROJECT/scripts/views'
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// --- ADJUSTMENT 2: Serve static files ---
// You have two places for static files based on your structure:
// 1. `PORTFOLIO_PROJECT/scripts/public` (standard place for assets directly served)
// 2. `PORTFOLIO_PROJECT/styles` (for your main CSS)
// 3. `PORTFOLIO_PROJECT/assets` (for images, etc.)

// Serve files from 'scripts/public' under the root '/' path
app.use(express.static(path.join(__dirname, 'public')));

// Serve files from 'styles' folder under the '/styles' path
// This means CSS files will be accessed like http://localhost:3000/styles/style.css
app.use('/styles', express.static(path.join(__dirname, '..', 'styles'))); // '..' goes up one level from 'scripts'

// Serve files from 'assets' folder under the '/assets' path
// This means image files will be accessed like http://localhost:3000/assets/image.png
app.use('/assets', express.static(path.join(__dirname, '..', 'assets')));


// In-memory "database" for posts
let posts = [
  {
    title: 'First Post',
    content: 'This is the content of the first post.',
    createdAt: new Date('2025-07-09T10:00:00Z')
  },
  {
    title: 'Second Post',
    content: 'Here\'s some more interesting stuff.',
    createdAt: new Date('2025-07-09T14:30:00Z')
  }
];

// --- IMPORTANT NOTE REGARDING YOUR 'pages' folder HTML files ---
// Your app.js is responsible for serving content.
// If you have `index.html` in `pages/index.html`, and you also have `app.get('/')`
// rendering `index.ejs`, you need to decide which one takes precedence or if they
// serve different purposes.
// For now, I'll assume your EJS routes are primary for blog posts.
// If you want to serve your static HTML files, you'd add more static middleware
// or specific routes for them. For example:
// app.use(express.static(path.join(__dirname, '..', 'pages'))); // This would serve them all directly.
// OR specific routes:
// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'pages', 'About_Me.html'));
// });


// Route for the homepage - displays all posts
app.get('/', (req, res) => {
  posts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  res.render('index', { posts: posts }); // This will render scripts/views/index.ejs
});

// Route to display the new post form
app.get('/new', (req, res) => {
  res.render('new-post'); // This will render scripts/views/new-post.ejs
});

// Route to handle new post submission
app.post('/new', (req, res) => {
  const newPost = {
    title: req.body.title,
    content: req.body.content,
    createdAt: new Date()
  };
  posts.push(newPost);
  res.redirect('/');
});


// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});