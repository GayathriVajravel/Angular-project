import{AbstractControl, ValidatorFn} from '@angular/forms'

export function passwordValidator(control:AbstractControl):{[key:string]:any} |null{
     const password=control.get('password');
     const confirmpassword=control.get('confirmpassword');
     if(password.pristine ||confirmpassword.pristine)
     return null;
     return  password && confirmpassword && password.value!=confirmpassword.value?{'mismatch':true}:null;
     }