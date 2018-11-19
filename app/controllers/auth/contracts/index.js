import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { all } from 'rsvp';

export default Controller.extend({
  columns: computed(function(){
    return [ {
        propertyName: "subscriber.fullName",
        title: "Subscriptor",
        filterPlaceholder: 'Búsqueda'
      }, {
        title: "Fecha de Inicio",
        propertyName: "startDateString",
        filterPlaceholder: 'Búsqueda'
      }, {
        title: "Fecha de Término",
        propertyName: "endDateString",
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
      noDataToShow: "Aún no se registran contratos."
    }
  }),

  actions: {
    deleteContract(contract){
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
          contract.get('student_contracts').then((studentContracts)=>{
            return all(
              studentContracts.map((studentContract)=>{
                return studentContract.destroyRecord();
              })
            ).then(()=>{
              contract.destroyRecord();
              window.swal(
                '¡Éxito!',
                'El registro se ha eliminado.',
                'success'
              );
            });
          });
        }
      });
    },

    editContract(contract) {
      this.transitionToRoute('auth.contracts.edit', contract.id);
    }
  }

});
