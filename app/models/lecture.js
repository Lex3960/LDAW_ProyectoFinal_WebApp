import DS from 'ember-data';

export default DS.Model.extend({
  classroom: DS.attr('string'),
  school_id: DS.attr('number'),
  start_date: DS.attr('string'),
  teacher_id: DS.attr('number')
});
