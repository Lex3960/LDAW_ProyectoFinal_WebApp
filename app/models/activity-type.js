import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  activities: DS.hasMany('activity'),
  rules: DS.hasMany('activity-rule'),
  lesson_types: DS.hasMany('lesson-type'),
});
