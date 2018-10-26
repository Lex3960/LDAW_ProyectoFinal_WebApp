import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  level_id: DS.attr('number')
});
