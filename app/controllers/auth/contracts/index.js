import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  columns: [ {
      propertyName: "subscriber.fullName",
      title: "Subscriptor",
      sortedBy: "name",
      filterPlaceholder: 'Búsqueda'
    }, {
      title: "Fecha de Inicio",
      template: 'cells/date'
    }
    /*, {
      title: "Acciones",
      template: "cells/table-actions"
    }*/
  ],
  customMessages: computed(function(){
    return {
      searchLabel: 'Búqueda rápida',
      tableSummary: "Mostrando %@ - %@ de %@",
      noDataToShow: "Aún no se registran alumnos."
    }
  }),

});
