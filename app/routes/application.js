import Route from '@ember/routing/route';
import { inject as service } from "@ember/service";

export default Route.extend({
  moment: service(),
  
  beforeModel() {
    this.get('moment').setLocale('es');
  }
});
