import DS from 'ember-data';

export default DS.Model.extend({
  start_date: DS.attr('string'),
  contract_id: DS.attr('string'),
  student_id: DS.attr('number')
});
