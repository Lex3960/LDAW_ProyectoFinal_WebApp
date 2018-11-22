import Ember from 'ember';
import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { all } from 'rsvp';

export default Controller.extend({
  parent: Ember.inject.controller('auth'),

  columns: computed(function(){
    return [ {
        propertyName: "student.fullName",
        title: "Alumno",
        filterPlaceholder: 'Búsqueda'
      }, {
        title: "Actividad",
        propertyName: "activity.activity_type.name",
        filterPlaceholder: 'Búsqueda'
      }, {
        title: "Asistencia",
        propertyName: "attendance",
        filterWithSelect: true,
    predefinedFilterOptions: [
    'Presente',
      'Ausente'
    ]
      }, {
        title: "Calificación",
        propertyName: "grade",
        filterPlaceholder: 'Búsqueda'
      }, {
        title: "Acciones",
        template: "cells/table-actions"
      }
    ]
  }),
  customMessages: computed(function(){
    return {
      searchLabel: 'Búqueda rápida',
      tableSummary: "Mostrando %@ - %@ de %@",
      noDataToShow: "Aún no se registran reservaciones."
    }
  }),
  rollBackedReservations: Ember.computed('model.reservations', function () {
    return this.get('model.reservations').filter(function (item) {
      return !item.get('isNew');
    });
  }),

  actions: {
    newReservation() {
      let selectedLecture = this.get('model.lecture');
      this.get('parent').set('selectedLecture', selectedLecture);
      this.get('parent').send('createReservation');
    },

    editReservation(reservation) {
      let selectedLecture = this.get('model.lecture');
      this.get('parent').set('selectedLecture', selectedLecture);
      this.get('parent').send('editReservation', reservation);
    },

    deleteReservation(reservation){
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
          reservation.destroyRecord();
          window.swal(
            '¡Éxito!',
            'El registro se ha eliminado.',
            'success'
          );
        }
      });
    },

    editContract(reservation) {
      this.transitionToRoute('auth.schedule.classes.detail', contract.id);
    }
  }

});
