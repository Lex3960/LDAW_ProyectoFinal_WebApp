import Controller from '@ember/controller';
// import { isBlank } from '@ember/utils';

export default Controller.extend({
  actions: {
    saveSubscriber(subscriber){
      subscriber.save().then(()=>{
        swal(
          'Éxito',
          'Subscriptor Guardado!',
          'success'
        )
      })
    }
  }
});
