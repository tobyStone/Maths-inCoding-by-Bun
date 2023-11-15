const app = express();
const port = 3000;

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
	res.render('structure.ejs');
});

app.listen(port, () => {
	console.log('Sever is running on port ${port}');
'use strict';

console.log('Hello world');



