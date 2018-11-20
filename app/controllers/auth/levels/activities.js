import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    deleteActivity(activity){
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
          activity.destroyRecord();
          window.swal(
            '¡Éxito!',
            'El registro se ha eliminado.',
            'success'
          )
        }
      })
    },
    saveActivity(lesson, activity_type) {
      let newActivity = this.store.createRecord('activity', {
        lesson:lesson,
        activity_type: activity_type
      })
      newActivity.save().then(()=>{
        this.set('selectedType', null);
        window.swal(
          '¡Éxito!',
          'La actividad ha sido registrada.',
          'success'
        ).then(()=>{
          window.location.reload(true);
        })
      })
    }
  }
});
