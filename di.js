module.exports = ({ container, consumers }) => {
	return Object.keys(consumers)
	.reduce((acc, k) => {
		if (!k) return acc;
		return Object.assign({}, { [k]: consumers[k](container) }, acc)
	}, {})
};
