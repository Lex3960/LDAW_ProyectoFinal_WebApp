import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  school_id: DS.attr('number'),
});
