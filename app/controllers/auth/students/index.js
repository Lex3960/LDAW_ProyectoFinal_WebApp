import Ember from 'ember';
import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  parent: Ember.inject.controller('auth'),

  columns: computed(function(){
    return [ {
      template: "components/models-table/expand-row-cell",
      mayBeHidden: false
      }, {
        propertyName: "fullName",
        title: "Nombre Completo",
        sortedBy: "name",
        filterPlaceholder: 'Búsqueda'
      }, {
        propertyName: "phone",
        title: "Teléfono",
        filterPlaceholder: 'Búsqueda'
      }, {
        propertyName: "email",
        title: "Email",
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
      deleteStudent(student){
        this.get('parent').send('deleteRecord', student);
      },

      editStudent(student) {
        this.get('parent').send('editStudent', student);
      },
  }
});
