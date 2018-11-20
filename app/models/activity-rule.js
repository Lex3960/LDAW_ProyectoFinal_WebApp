import DS from 'ember-data';

export default DS.Model.extend({
  capacity: DS.attr('number'),
  activity_type: DS.belongsTo('activity-type'),
  rule: DS.belongsTo('rule'),
});
