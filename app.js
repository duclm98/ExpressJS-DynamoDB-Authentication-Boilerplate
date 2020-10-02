const express = require('express');
const createError = require('http-errors');
require('express-async-errors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const authRouter = require('./src/auth/auth.routes');
const userRouter = require('./src/users/users.routes');

const app = express();

// Cấu hình cho phép sử dụng biến môi trường
if (process.env && process.env.NODE_ENV === 'development') {
	console.log('ENVIRONMENT: Development');
	console.log('ENV FILE: .env.development');
	dotenv.config({
		path: 'env/.env.development',
	});
} else if (process.env && process.env.NODE_ENV === 'staging') {
	console.log('ENVIRONMENT: Staging');
	console.log('ENV FILE: .env.staging');
	dotenv.config({
		path: 'env/.env.staging',
	});
} else {
	console.log('ENVIRONMENT: Production');
	console.log('ENV FILE: .env.production');
	dotenv.config({
		path: 'env/.env.production',
	});
}

app.use(morgan('dev'));
app.use(
	bodyParser.urlencoded({
		extended: false,
	}),
);
app.use(bodyParser.json());
app.use(
	cors({
		origin: process.env.ACCESS_CONTROL_ALLOW_ORIGIN,
		maxAge: 600,
		credentials: true,
		allowedHeaders: [
			'Origin',
			'X-Requested-With',
			'Content-Type',
			'Accept',
			'X-Access-Token',
			'Authorization',
		],
		methods: 'GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS',
	}),
);

app.get('/', (req, res) => {
	res.send('APP IS RUNNING');
});
app.use('/auth', authRouter);
app.use('/users', userRouter);

app.use((req, res, next) => {
	next(createError(404));
});

app.use((err, req, res) => {
	console.log(err.stack);
	res.status(err.status || 500).send(err.message);
});

const server = app.listen(process.env.PORT, () => {
	console.log(`Express running → PORT ${server.address().port}`);
});
