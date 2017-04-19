module.exports = ({ EmailService, UserModel }) => {
	return function (req, res, next) {
		EmailService.send();
		UserModel.find();
		res.json({
			message: 'hi',
		}).status(200);
	}
};
