import DS from 'ember-data';

export default DS.Model.extend({
  max_students: DS.attr('string'),
  school_id: DS.attr('number'),
});
