import DS from 'ember-data';

export default DS.Model.extend({
  capacity: DS.attr('number'),
  activity_type_id: DS.attr('number'),
  rule_id: DS.attr('number'),
});
