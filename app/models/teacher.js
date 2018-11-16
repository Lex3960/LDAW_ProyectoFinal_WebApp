import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  name: DS.attr('string'),
  last_name: DS.attr('string'),
  fullName: computed('name', 'last_name', function(){
    return `${this.get('name')} ${this.get('last_name')}`;
  }),
  phone: DS.attr('string'),
  mail: DS.attr('string')
});
