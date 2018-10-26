import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  schedule_start: DS.attr('string'),
  schedule_end: DS.attr('string')
});
