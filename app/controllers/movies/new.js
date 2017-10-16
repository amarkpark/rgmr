import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addReview: function(){
      let title = this.get('title');
      let releaseYear = this.get('releaseYear');
      let rating = this.get('rating');
      let review = this.get('review')
      alert(title + ' ' + releaseYear + ' ' + rating + ' ' + review);
    }
  }
});
