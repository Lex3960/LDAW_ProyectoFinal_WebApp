import Component from '@ember/component';

export default Component.extend({
  actions: {
    removeStudent(contract_student) {
      window.swal({
        title: 'Confirmación',
        text: "El alumno será eliminado del contrato.",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result) {
          contract_student.destroyRecord();
          window.swal(
            '¡Éxito!',
            'El registro se ha eliminado.',
            'success'
          )
        }
      })
    },
    saveContract() {
      this.saveContract();
    }
  }
});
