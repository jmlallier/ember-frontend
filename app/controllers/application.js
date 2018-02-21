import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		toggleActive(language) {
			language.toggleProperty('active');
			language.save();
		}
	}
});
