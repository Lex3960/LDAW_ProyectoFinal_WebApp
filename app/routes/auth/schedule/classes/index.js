import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(params){
    return RSVP.hash({
      lecture: this.store.findRecord('lecture', params.id),
      reservations: this.get('store').query('reservation', {class_id: params.id}),
      activities: this.store.findAll('activity'),
      students: this.store.findAll('student')
    })
  }
});
