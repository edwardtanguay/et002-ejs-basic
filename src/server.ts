import express from 'express';
import path from 'path';

const app = express();
const __dirname = path.resolve(path.dirname(''));
const port = 3944;

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './public/views'));

const appTitle = 'The Tech Book Site';

app.get('/', (req: express.Request, res: express.Response) => {
	res.render('index', { appTitle });
});

app.get('/info', (req: express.Request, res: express.Response) => {
	res.render('info', { appTitle });
});

app.listen(port, () => {
	console.log(`now listening on http://localhost:${port}`);
});