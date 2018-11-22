import Component from '@ember/component';
import { computed } from '@ember/object';
import {inject as service} from '@ember/service';
export default Component.extend({
  store: service(),
  recordID: null,

  lessonTypes: computed('recordID', function(){
    return this.get('store').query('lesson-type', {lesson_id: this.get('record.id')});
  }),

  activities: computed('recordID', function(){
    return this.get('store').query('activity', {lesson_id: this.get('record.id')});
  }),

  init() {
    this._super(...arguments);
    this.set('recordID', this.get('record.id'));
  },
});
