import DS from 'ember-data';

export default DS.Model.extend({
  lesson: DS.belongsTo('lesson'),
  activity_type: DS.belongsTo('activity-type')
});
