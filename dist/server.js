import express from 'express';
import path from 'path';
const app = express();
const __dirname = path.resolve(path.dirname(''));
const port = 3944;
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './public/views'));
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/info', (req, res) => {
    res.render('info');
});
app.listen(port, () => {
    console.log(`now listening on http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map