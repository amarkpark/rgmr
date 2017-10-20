import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addReview: function(){
      var title = this.get('title');
      var releaseYear = this.get('releaseYear');
      var rating = this.get('rating');
      var review = this.get('review')
      // alert(title + ' ' + releaseYear + ' ' + rating + ' ' + review);

      //Create new movie record
      var newMovie = this.store.createRecord('movie', {
        title: title,
        releaseYear: releaseYear,
        rating: rating,
        review: review
      });

      //Save to Firebase
      newMovie.save();

      //Clear Form
      this.setProperties({
        title: '',
        releaseYear: '',
        rating: '',
        review: ''
      });
    }
  }
});
