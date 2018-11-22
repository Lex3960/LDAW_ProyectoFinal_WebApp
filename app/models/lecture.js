import DS from 'ember-data';
import { computed } from '@ember/object';
import moment from 'moment';

export default DS.Model.extend({
  classroom: DS.attr('string'),
  school: DS.belongsTo('school'),
  start_date: DS.attr('string'),
  dateString: computed('start_date', function(){
    return moment.unix(this.get('start_date')).format("DD/MM/YYYY");
  }),
  scheduleString: computed('start_date', function(){
    return `${moment.unix(this.get('start_date')).format("HH:mm")} - ${moment.unix(this.get('start_date')).add(1, 'h').format("HH:mm")}`;
  }),

  teacher: DS.belongsTo('teacher'),
  reservations: DS.hasMany('reservation')
});
