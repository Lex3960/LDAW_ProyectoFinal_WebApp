import Ember from 'ember';
import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  parent: Ember.inject.controller('auth'),

  columns: computed(function(){
    return [{
      propertyName: "fullName",
      title: "Nombre Completo",
      filterPlaceholder: 'Búsqueda'
    }, {
      propertyName: "phone",
      title: "Teléfono",
      filterPlaceholder: 'Búsqueda'
    }, {
      propertyName: "mail",
      title: "Email",
      filterPlaceholder: 'Búsqueda'
    }, {
      title: "Acciones",
      template: "cells/table-actions"
    }]
  }),
  customMessages: computed(function(){
    return {
      searchLabel: 'Búqueda rápida',
      tableSummary: "Mostrando %@ - %@ de %@",
      noDataToShow: "Aún no se registran profesores."
    }
  }),

  actions: {
      deleteTeacher(teacher){
        this.get('parent').send('deleteRecord', teacher);
      },

      editTeacher(teacher) {
        this.get('parent').send('editTeacher', teacher);
      },
  }
});
