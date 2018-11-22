import Controller from '@ember/controller';
import { inject as service } from "@ember/service";
import { alias } from "@ember/object/computed";
import { computed } from '@ember/object';
import { isEqual } from '@ember/utils';
import moment from 'moment';

export default Controller.extend({
  routing: service('-routing'),
  routeName: alias('routing.currentRouteName'),

  selectedActivity: null,
  selectedLecture: null,
  selectedReservation: null,
  selectedSubscriber: null,
  selectedStudent: null,
  selectedTeacher: null,

  auxTime: null,
  selectedTime: null,
  selectedDate: null,


  modalOptions: computed(function(){
    return {
      dismissible: false
    }
  }),

  activityList: computed(function(){
    return this.store.findAll('activity');
  }),
  lectureList: computed(function(){
    return this.store.findAll('lecture');
  }),
  teacherList: computed(function(){
    return this.store.findAll('teacher');
  }),
  studentList: computed(function(){
    return this.store.findAll('student');
  }),

  actions: {
    changeTime(time) {
      this.set('selectedTime', time);
    },

    createLecture() {
      this.send('newRecord', 'lecture', 'selectedLecture');
      this.send('openModal', 4);
    },
    createStudent() {
      this.send('newRecord', 'student', 'selectedStudent');
      this.send('openModal', 2);
    },
    createReservation() {
      this.send('newRecord', 'reservation', 'selectedReservation');
      this.send('openModal', 5);
    },
    createSubscriber() {
      this.send('newRecord', 'subscriber', 'selectedSubscriber');
      this.send('openModal', 1);
    },
    createTeacher() {
      this.send('newRecord', 'teacher', 'selectedTeacher');
      this.send('openModal', 3);
    },

    editLecture(lecture) {
      this.send('editRecord', lecture, 'selectedLecture');
      lecture.get('teacher').then((teacher)=>{
        this.set('selectedTeacher', teacher);
      }).catch(()=>{
        this.set('selectedTeacher', null);
      }).finally(()=>{
        this.set('auxTime', moment.unix(lecture.get('start_date')).format("hh:mm A"));
        this.set('selected', moment.unix(lecture.get('start_date'))).startOf('day');
        this.set('selectedTime', moment.unix(lecture.get('start_date')));
        this.send('openModal', 4);
      })
    },
    editReservation(reservation) {
      this.send('editRecord', reservation, 'selectedReservation');
      return reservation.get('activity').then((activity)=>{
        this.set('selectedActivity', activity);
        return reservation.get('class').then((lecture)=>{
          this.set('selectedLecture', lecture);
          return reservation.get('student').then((student)=>{
            this.set('selectedStudent', student)
          }).catch(()=>{
            this.set('selectedStudent', null);
          })
        }).catch(()=>{
          this.set('selectedLecture', null);
        })
      }).catch(()=>{
        this.set('selectedActivity', null);
      }).finally(()=>{
        this.send('openModal', 5);
      })
    },
    editStudent(student) {
      this.send('editRecord', student, 'selectedStudent');
      this.send('openModal', 2);
    },
    editSubscriber(subscriber) {
      this.send('editRecord', subscriber, 'selectedSubscriber');
      this.send('openModal', 1);
    },
    editTeacher(teacher) {
      this.send('editRecord', teacher, 'selectedTeacher');
      this.send('openModal', 3);
    },

    editRecord(record, selectedModelVar) {
      this.set(selectedModelVar, record);
    },
    newRecord(modelName, selectedModelVar) {
      let record = this.store.createRecord(modelName);
      this.set(selectedModelVar, record);
    },

    openModal(index) {
			window.$('#modal' + index.toString() + '').modal('open');
		},
    closeModal(index) {
      switch(index) {
          case 4:
              this.set('selectedTime', null);
              this.set('auxTime', null);
              this.set('selectedDate', null);
              this.set('selectedTeacher', null);
              break;
          case 5:
              this.set('selectedActivity', null);
              this.set('selectedStudent', null);
              this.set('selectedLecture', null);
              break;
          default:
              break;
      }
			window.$('#modal' + index.toString() + '').modal('close');
		},

    saveRecord(record, selectedModelVar) {
      switch(selectedModelVar) {
          case 'selectedLecture':
              let selectedTime = this.get('selectedTime');
              let selectedDate = this.get('selected');
              let momentTime = moment(selectedTime, "hh:mm A");
              let momentDate = moment(selectedDate);
              let selectedDateTime = momentDate.add(momentTime.hour(), 'h').add(momentTime.minute(), 'm').unix();
              record.set('start_date', selectedDateTime);
              this.set('selectedTime', null);
              this.set('auxTime', null);
              this.set('selected', null);
              let selectedTeacher = this.get('selectedTeacher');
              record.set('teacher', selectedTeacher);
              this.set('selectedTeacher', null);
              break;
          case 'selectedReservation':
              let selectedActivity = this.get('selectedActivity');
              let selectedStudent = this.get('selectedStudent');
              let selectedLecture = this.get('selectedLecture');
              record.set('activity', selectedActivity);
              record.set('student', selectedStudent);
              record.set('class', selectedLecture);
              this.set('selectedActivity', null);
              this.set('selectedStudent', null);
              this.set('selectedLecture', null);
              break;
          default:
              break;
      }
      record.save().then(()=>{
        this.set(selectedModelVar, null);
        window.swal(
          '¡Éxito!',
          'Los cambios han sido guardados.',
          'success'
        ).then(()=>{
          window.location.reload(true);
        })
      })
    },
    deleteRecord(record){
      window.swal({
        title: 'Confirmación',
        text: "Esta acción no se puede deshacer.",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result) {
          record.destroyRecord();
          window.swal(
            '¡Éxito!',
            'El registro se ha eliminado.',
            'success'
          )
        }
      })
    }
  }
});
