import express from 'express';
import path from 'path';
import fetch from 'node-fetch';
const app = express();
const __dirname = path.resolve(path.dirname(''));
const port = 3944;
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './public/views'));
const url = 'https://edwardtanguay.vercel.app/share/techBooks.json';
const books = await (await fetch(url)).json();
// const response = await fetch(url);
// const books = await response.json();
const siteData = {
    appTitle: 'Tech Book Club',
    pages: [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Info',
            path: '/info'
        }
    ],
    books
};
app.get('/', (req, res) => {
    res.render('index', { siteData, currentPath: '/' });
});
app.get('/info', (req, res) => {
    res.render('info', { siteData, currentPath: '/info' });
});
app.listen(port, () => {
    console.log(`now listening on http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map