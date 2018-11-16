import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(){
    // return RSVP.hash({
    //   subscribers: this.store.findAll('subscriber'),
    //   contract: this.store.createRecord('contract')
    // })
    return this.store.findAll('subscriber')
  }
});
