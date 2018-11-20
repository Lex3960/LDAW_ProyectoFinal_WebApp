import Ember from 'ember';
import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  columns: computed(function(){
    return [ {
        title: "Detalle",
        template: "components/models-table/expand-row-cell",
        mayBeHidden: false
      }, {
        propertyName: "name",
        title: "Título de la Lección",
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
      noDataToShow: "Aún no se registran alumnos."
    }
  }),
  customIcons: computed(function(){
    return {
      'expand-row': 'material-icons expand_more',
      'collapse-row': 'material-icons expand_less',
    }
  }),

  actions: {
      editLesson(lesson) {
        this.transitionToRoute('auth.levels.activities', lesson.id);
      },
  }
});
