import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  level: DS.belongsTo('level'),
  activities: DS.hasMany('activity')
});
