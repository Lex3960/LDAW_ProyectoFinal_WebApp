import DS from 'ember-data';

export default DS.Model.extend({
  activity_type: DS.belongsTo('activity-type'),
  reservations: DS.hasMany('reservation'),
  lesson: DS.belongsTo('lesson')
});
