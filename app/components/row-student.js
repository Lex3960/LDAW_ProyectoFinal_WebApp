import Component from '@ember/component';
import { computed } from '@ember/object';
import {inject as service} from '@ember/service';
export default Component.extend({
  store: service(),
  recordID: null,

  studentContracts: computed('recordID', function(){
    return this.get('store').query('student_contract', {student_id: this.get('record.id')});
  }),

  init() {
    this._super(...arguments);
    this.set('recordID', this.get('record.id'));
  },
});
