import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  releaseYear: DS.attr('number'),
  rating: DS.attr('number'),
  review: DS.attr('string'),
  created: DS.attr('string', {
    defaultValue: function(){
      return new Date();
    }
  })
});

