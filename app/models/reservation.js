import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  status: DS.attr('boolean'),
  grade: DS.attr('number'),
  attendance: computed('status', function(){
    let status = this.get('status');
    return (status) ? 'Presente': 'Ausente';
  }),
  activity: DS.belongsTo('activity'),
  class: DS.belongsTo('lecture'),
  student: DS.belongsTo('student')
});
