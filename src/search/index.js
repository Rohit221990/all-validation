const axios = require('axios');

export class Search {
  constructor() {
  }

  //Get Post Office(s) details search by Postal PIN Code
  byPinCodeIndia(value){
    axios.get('http://postalpincode.in/api/pincode'+value).then((res, error){
      return res;
    }).catch((err) => {
      return err;
    })
  }

  byPostOfficeBrancNameIndia(value){
    axios.get('http://postalpincode.in/api/postoffice'+value).then((res, error){
      return res;
    }).catch((err) => {
      return err;
    })
  }
}
