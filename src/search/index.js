const axios = require('axios');

export class Search {
  constructor() {
  }

  //Get Post Office(s) details search by Postal PIN Code
  byPinCodeIndia(value){
    return new Promise(function(resolve, reject) {
      byPinCodeIndia((res) => {
        return res;
      })
    });
  }

  //Get Post Office(s) details search by Postal PIN Code
  byPostOfficeBrancNameIndia(value){
    return new Promise(function(resolve, reject) {
      byPostOfficeBrancNameIndia((res) => {
        return res;
      })
    });
  }
}
