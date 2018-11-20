import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  school: DS.belongsTo('school'),
  lessons: DS.hasMany('lesson')
});
