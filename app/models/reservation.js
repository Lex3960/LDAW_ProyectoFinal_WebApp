import DS from 'ember-data';

export default DS.Model.extend({
  grade: DS.attr('number'),
  status: DS.attr('boolean'),
  activity: DS.belongsTo('activity'),
  class: DS.belongsTo('lecture'),
  student: DS.belongsTo('student')
});
