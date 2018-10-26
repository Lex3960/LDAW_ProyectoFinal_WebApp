import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  last_name: DS.attr('string'),
  phone: DS.attr('string'),
  email: DS.attr('string'),
  current_activity_id: DS.attr('number'),
});
