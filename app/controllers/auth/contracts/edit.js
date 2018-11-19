import Controller from '@ember/controller';
import { all } from 'rsvp';
import moment from 'moment';

export default Controller.extend({
  selectedStudents: null,
  
  actions: {
    saveContract(contract, students){
      contract.set('contract_signature_date', moment().unix());
      contract.save().then(()=>{
        return all(
          students.map((student)=>{
            return contract.get('student_contracts').createRecord({
              start_date: contract.get('contract_signature_date'),
              student: student,
              contract: contract
            }).save().then(()=>{
              return student.save()
            })
          })
        ).then(()=>{
          this.set('selectedStudents', null);
          contract.save().then(()=>{
            window.swal(
              '¡Éxito!',
              'El contrato se ha registrado.',
              'success'
            ).then(()=>{
              this.transitionToRoute('auth.contracts');
            })
          })
        })
      })
    }
  }
});
