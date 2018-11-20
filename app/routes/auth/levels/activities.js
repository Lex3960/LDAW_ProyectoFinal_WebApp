import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(params){
    return RSVP.hash({
      lesson: this.store.findRecord('lesson', params.id),
      activities: this.store.query('activity', {lesson_id: params.id}),
      types: this.store.query('lesson_type', {lesson_id: params.id})
    })
  }
});
