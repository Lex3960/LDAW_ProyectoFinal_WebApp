import Controller from '@ember/controller';

export default Controller.extend({
  parent: Ember.inject.controller('auth'),

  columns: [ {
      propertyName: "name",
      title: "Nombre",
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
    noDataToShow: "Aún no se registran suscriptores."
  },

  actions: {
      deleteSubscriber(subscriber){
        this.get('parent').send('deleteRecord', subscriber);
      },

      editSubscriber(subscriber) {
        this.get('parent').send('editSubscriber', subscriber);
      },
  }
});
