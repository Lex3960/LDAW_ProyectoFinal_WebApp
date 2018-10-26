import DS from 'ember-data';

export default DS.Model.extend({
  grade: DS.attr('number'),
  status: DS.attr('boolean'),
  activity_id: DS.attr('number'),
  class_id: DS.attr('number'),
  student_id: DS.attr('number')
});
