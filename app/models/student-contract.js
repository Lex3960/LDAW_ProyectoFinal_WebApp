import DS from 'ember-data';
import { computed } from '@ember/object';
import moment from 'moment';

export default DS.Model.extend({
  start_date: DS.attr('string'),
  startDateString: computed('start_date', function(){
    return moment.unix(this.get('start_date')).format("DD/MM/YYYY, hh:mm A");
  }),
  contract: DS.belongsTo('contract'),
  student: DS.belongsTo('student')
});
