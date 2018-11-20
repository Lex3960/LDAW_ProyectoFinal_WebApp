import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  name: DS.attr('string'),
  level: DS.belongsTo('level'),
  activities: DS.hasMany('activity'),
  lesson_types: DS.hasMany('lesson-type'),
});
