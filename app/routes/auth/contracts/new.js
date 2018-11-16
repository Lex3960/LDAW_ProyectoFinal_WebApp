import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(){
    return RSVP.hash({
      subscribers: this.store.findAll('subscriber'),
      students: this.store.findAll('student'),
      contract: this.store.createRecord('contract')
    })
  }
});
