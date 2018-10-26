import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
      delete(subscriber){
        subscriber.destroyRecord();
      },

      saveRecord(subscriber){
        subscriber.save();
      }
  }
});
