import DS from 'ember-data';

export default DS.Model.extend({
  max_students: DS.attr('number'),
  school: DS.belongsTo('school'),
  activity_rules: DS.hasMany('activity-rule')
});
