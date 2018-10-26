import Controller from '@ember/controller';
import { inject as service } from "@ember/service";
import { alias } from "@ember/object/computed";

export default Controller.extend({
  routing: service('-routing'),
  routeName: alias('routing.currentRouteName'),

  actions: {
    newRecord(modelName){
      this.store.createRecord(modelName);
    }
  }
});
