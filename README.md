# Super Tiny Destructuring Dependency Injection

What is it?

> dependency injection is a technique whereby one object supplies the dependencies of another object. A dependency is an object that can be used (a service). An injection is the passing of a dependency to a dependent object (a client) that would use it.
> https://en.wikipedia.org/wiki/Dependency_injection

Why?

## Reduce 'Coupling' 
>In software engineering, coupling is the degree of interdependence between software modules; a measure of how closely connected two routines or modules are; the strength of the relationships between modules.
>https://en.wikipedia.org/wiki/Coupling_(computer_programming)
>

### Example:

The below handler for express is decoupled from EmailService and UserModel.

```js
	module.exports = ({ EmailService, UserModel }) => {
		return function (req, res, next) {
			EmailService.send();
			UserModel.find();
			res.json({
				message: 'hi',
			}).status(200);
		}
	};

```


Say you are a module that depends on something with a certain shape. You don't care how it works as long as it behaves as expected thats all you care about as a module. When that module changes its implementation details say it changes from being require('a') to require('b') but the exposing interface is the same. To update you are required to update every single place where 'a' is used. 

This is a super tiny implementation that wraps up our modules into containing object which is passed into our consumers.

This is by no means a full implementation in comparision to full DI systems. We can go further with the implementation and allow it to support a graph of dependencies.

This is just an Idea and is more about having a conversation about "decoupled-code". 

### Testable

Your code can become easier to test.


```js
// __tests__/getHandler.spec.js

const request = require('supertest');
const express = require('express');
const getHandler = require('../getHandler')

let app;
before(() => {
	app = express();
	app.use(bodyParser.json());
});

test('getHandler Should return message', () => {
	const EmailService = { send: jest.fn(); };
	const UserModel = { find: jest.fn(); };
	
	app.get('/', getHandler({ EmailService, UserModel }))
	return request(app)
	.get('/')
	.expect(200)
	.expect('Content-Type', /json/)
	.then(response => {
		expect(response.body).toEqual({ message: 'hi' });
		expect(EmailService.send.mock.calls.length).toBe(1);
		expect(UserModel.find.mock.calls.length).toBe(1);
	});

});

```


Clone it and have a play, give feedback, PR's welcome.

