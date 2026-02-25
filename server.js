import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'dist' directory
// We use /koffy as the base path to match the Vite configuration
app.use('/koffy', express.static(path.join(__dirname, 'dist')));

// For any other request, serve the index.html
// This is important for SPA routing
app.get('/koffy/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Redirect root to /koffy for convenience in the container
app.get('/', (req, res) => {
    res.redirect('/koffy/');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Application available at http://localhost:${PORT}/koffy/`);
});
