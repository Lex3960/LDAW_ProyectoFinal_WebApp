import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(params){
    return RSVP.hash({
      subscribers: this.store.findAll('subscriber'),
      students: this.store.findAll('student'),
      contract: this.store.findRecord('contract', params.id),
      studentContracts: this.store.query('student_contract', {contract_id: params.id})
    })
  }
});
