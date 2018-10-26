import DS from 'ember-data';

export default DS.Model.extend({
  contract_signature_date: DS.attr('string'),
  subscriber_id: DS.attr('number')
});
