import Ember from 'ember';
import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  parent: Ember.inject.controller('auth'),

  columns: computed(function(){
    return [ {
        title: "Detalle",
        template: "components/models-table/expand-row-cell",
        mayBeHidden: false
      }, {
        propertyName: "classroom",
        title: "Aula",
        filterPlaceholder: 'Búsqueda'
      }, {
        propertyName: "teacher.fullName",
        title: "Profesor",
        filterPlaceholder: 'Búsqueda'
      }, {
        propertyName: "dateString",
        title: "Fecha",
        filterPlaceholder: 'Búsqueda'
      }, {
        propertyName: "scheduleString",
        title: "Horario",
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
      noDataToShow: "Aún no se registran clases."
    }
  }),
  customIcons: computed(function(){
    return {
      'expand-row': 'material-icons expand_more',
      'collapse-row': 'material-icons expand_less',
    }
  }),

  actions: {
      deleteLecture(lecture){
        this.get('parent').send('deleteRecord', lecture);
      },

      editLecture(lecture) {
        this.get('parent').send('editLecture', lecture);
      },
  }
});
