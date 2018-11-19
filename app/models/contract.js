import DS from 'ember-data';
import { computed } from '@ember/object';
import moment from 'moment';

export default DS.Model.extend({
  contract_signature_date: DS.attr('string'),
  startDateString: computed('contract_signature_date', function(){
    return moment.unix(this.get('contract_signature_date')).format("DD/MM/YYYY, hh:mm A");
  }),
  endDateString: computed('contract_signature_date', function(){
    return moment.unix(this.get('contract_signature_date')).add(1, 'y').format("DD/MM/YYYY, hh:mm A");
  }),

  subscriber: DS.belongsTo('subscriber'),
  student_contracts: DS.hasMany('student-contract')
});
