import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(params){
    return RSVP.hash({
      level: this.store.findRecord('level', params.id),
      lessons: this.store.query('lesson', {level_id: params.id})
    })
  }
});
