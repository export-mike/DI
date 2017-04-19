const EmailService = require('./EmailService');
const UserModel = require('./UserModel');
const di = require('./di');
const getHandler = require('./getHandler');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = 3000;

const container = { EmailService, UserModel };
const consumers = { getHandler };

const instance = di({ container, consumers })

app.use(bodyParser.json());
app.get('/', instance.getHandler);

app.listen(PORT, (err) => {
	if (err) {
		console.log('Server failed to start', err);
		return process.exit(1);
	}
	console.log('Server Running on Port: ', PORT)
})
