import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  name: DS.attr('string'),
  last_name: DS.attr('string'),
  fullName: computed('name', 'last_name', function(){
    return `${this.get('name')} ${this.get('last_name')}`;
  }),
  phone: DS.attr('string'),
  email: DS.attr('string'),
  current_activity: DS.belongsTo('reservation'),
  student_contracts: DS.hasMany('student-contract'),
  reservations: DS.hasMany('reservation')
});
