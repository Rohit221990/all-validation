var _ = require('lodash');
import {commonObj, postalObj, errorPostalObj, objIP} from './common'

export class Validation {
  constructor() {
  }

  emailValidate(email, required){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(required || required == undefined){
      return re.test(String(email).toLowerCase())
    }else{
      return "*Email is Required"
    }
  }

  passwordValidate(value, min, max, required){
    if(required || required == undefined){
      var pattern=  new RegExp("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{" + min +"," +max+ "}")
      if(value.match(pattern)){
        return true;
      }else{
        return false;
      }
    }else{
      return "*Password is Required"
    }
  }

  passwordValidate(value, pattern, required){
    if(required || required == undefined){
      var validatePattern=  new RegExp(pattern)
      if(value.match(validatePattern)){
        return true;
      }else{
        return false;
      }
    }else{
      return "*Password is Required"
    }
  }

  passportValidate(value, length, required){
    if(required || required == undefined){
      var validatePassport = new RegExp("[a-zA-Z]{2}[0-9]{"+length+"}")
      if(value.match(validatePassport)){
        return true;
      }else{
        return false;
      }
    }else{
      return "Passport is required";
    }
  }

  panCardValidate(value, required){
    if(required || required == undefined){
      var validatePan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/
      if(value.match(validatePan)){
        return true;
      }else{
        return false;
      }
    }else{
      return "Passport is required";
    }
  }

  pinCodeValidate(value, place, required){
    if(required || required == undefined){
      var validatePin = postalObj[place]
      if(value.test(validatePin)){
        return true;
      }else{
        return false;
      }
    }else{
      return errorPostalObj[place];
    }
  }

  phoneNumberValidate(value, country, required){
    if(required || required == undefined){
      var reg = commonObj['country'];
      if(reg.test(value)){
        return true;
      }else{
        return false;
      }
    }else{
      return "Phone Number is Required";
    }
  }

  validateIP(value, type, required){
    if(required || required == undefined){
      var reg = objIP[type];
      if(value.test(reg)){
        return true;
      } else{
        return false
      }
    }else{
      return type + "is Required";
    }
  }

  validateDomain(value, required){
    if(required || required == undefined){
      let reg = /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/
      if(value.test(reg)){
        return true;
      }else{
        return false;
      }
    }
    else{
      return "Domain field is required";
    }
  }

  validatePrice(value, required){
    if(required, required == undefined){
      let reg = /\d+(\.\d{2})?/
      if(value.test(reg)){
        return true;
      }else{
        return false;
      }
    }else{
      return "Price is Required";
    }
  }


}
