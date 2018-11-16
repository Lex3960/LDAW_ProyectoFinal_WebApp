import Controller from '@ember/controller';

export default Controller.extend({
  parent: Ember.inject.controller('auth'),

  columns: [ {
      propertyName: "name",
      title: "Nombre",
      sortedBy: "name",
      filterPlaceholder: 'Búsqueda'
    }, {
      propertyName: "last_name",
      title: "Apellidos",
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
    }
  ],
  customMessages: {
    searchLabel: 'Búqueda rápida',
    tableSummary: "Mostrando %@ - %@ de %@",
    noDataToShow: "Aún no se registran alumnos."
  },

  actions: {
      deleteStudent(student){
        this.get('parent').send('deleteRecord', student);
      },

      editStudent(student) {
        this.get('parent').send('editStudent', student);
      },
  }
});
