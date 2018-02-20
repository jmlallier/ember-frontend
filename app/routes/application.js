import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return [{
			name: 'John-Michael',
			age: 26
		}, {name: 'Angelique', age: 30}]
	}
});
