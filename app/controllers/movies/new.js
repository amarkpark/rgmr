import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addReview: function(){
      var title = this.get('title');
      alert(title);
    }
  }
});
