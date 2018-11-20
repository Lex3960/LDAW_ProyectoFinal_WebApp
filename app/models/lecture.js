import DS from 'ember-data';

export default DS.Model.extend({
  classroom: DS.attr('string'),
  school: DS.belongsTo('school'),
  start_date: DS.attr('string'),
  teacher: DS.belongsTo('teacher'),
  reservations: DS.hasMany('reservation')
});
