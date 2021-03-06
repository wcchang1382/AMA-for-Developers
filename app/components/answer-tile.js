import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(answer) {
      if (confirm('Are you sure you want to delete this response?')) {
        this.sendAction('destroyAnswer', review);
      }
    }
  }
});
