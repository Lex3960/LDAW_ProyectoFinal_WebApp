import DS from 'ember-data';

export default DS.Model.extend({
  start_date: DS.attr('string'),
  contract: DS.belongsTo('contract'),
  student: DS.belongsTo('student')
});
