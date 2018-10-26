import DS from 'ember-data';

export default DS.Model.extend({
  activity_type_id: DS.attr('number'),
  lesson_id: DS.attr('number')
});
