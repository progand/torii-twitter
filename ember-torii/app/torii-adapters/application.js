import Ember from 'ember';

export default Ember.Object.extend({
  fetch () {
    return Ember.$.getJSON('http://local.com:3000/me?callback=?').then(user => {
      return {
        currentUser: user
      };
    });
  }
});
