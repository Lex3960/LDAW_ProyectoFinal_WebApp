import Controller from '@ember/controller';
import { inject as service } from "@ember/service";
import { alias } from "@ember/object/computed";
import { computed } from '@ember/object';

export default Controller.extend({
  routing: service('-routing'),
  routeName: alias('routing.currentRouteName'),

  selectedLecture: null,
  selectedSubscriber: null,
  selectedStudent: null,
  selectedTeacher: null,

  modalOptions: computed(function(){
    return {
      dismissible: false
    }
  }),

  actions: {
    createLecture() {
      this.send('newRecord', 'lecture', 'selectedLecture');
      this.send('openModal', 4);
    },
    createStudent() {
      this.send('newRecord', 'student', 'selectedStudent');
      this.send('openModal', 2);
    },
    createSubscriber() {
      this.send('newRecord', 'subscriber', 'selectedSubscriber');
      this.send('openModal', 1);
    },
    createTeacher() {
      this.send('newRecord', 'teacher', 'selectedTeacher');
      this.send('openModal', 3);
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

    saveRecord(record, selectedModelVar) {
      record.save().then(()=>{
        this.set(selectedModelVar, null);
        window.swal(
          '¡Éxito!',
          'Los cambios han sido guardados.',
          'success'
        )
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
