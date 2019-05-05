module.exports = byPinCodeIndia(value){
  axios.get('http://postalpincode.in/api/pincode'+value).then((res)=>{
    return res;
  }).catch((err) => {
    return err;
  })
}

module.exports = byPostOfficeBrancNameIndia(value){
  axios.get('http://postalpincode.in/api/postoffice'+value).then((res, error)=>{
    return res;
  }).catch((err) => {
    return err;
  })
}
