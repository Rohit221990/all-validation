### Validations
### GitHub Repository https://github.com/Rohit221990/all-validation.git

## Email Validations
```
emailValidate(value, required)

value(Email value)
required(Required field: true, false)

Example:
emailValidate('abc@abc.abc', true) // If field is required
----return bool


emailValidate('abc@abc.abc', false) // If field is not required
----return bool



```


##Password Validation

# Call passwordValidate function with following parameters
```
 var response = passwordValidate(passwordValue, minlength, maxlength, required)
 Example
 passwordValidate('abc123_', 4, 8, true)
----- return bool


```

# # Call passwordValidate function with following parameters
```
 var response =  passwordValidate(passwordValue, patternType, required)
 Example:
 passwordValidate('abc123_', "^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$", true)
---- return bool

 patterns details: http://regexlib.com/Search.aspx?k=Password&AspxAutoDetectCookieSupport=1

```
## Passport validation with given maxlength
```
var response = passportValidate(value, length, required)

Example:
passportValidate('ASWR45G', 7, true)
----- return bool

```


## Indian PAN Card validation
```
var response = panCardValidate(value, required)

Example:
panCardValidate('value', true)
-----return bool

([a-zA-Z]){5} -> Alphabets should be 5 in number.

([0-9]){4} -> Numbers should be 4 in number.

([a-zA-Z]){1} -> Alphabets should be 1 in number.

```

## pin code Validations
```

var response = pinCodeValidate(value, place, required)

Example:
pinCodeValidate('000000','IND', true)
 ------return bool
```


## validate area Phone number validation

```
Any area validation. Example: 'US','IND','IRAN','ITALI','SA','INDONESIA','UK','Other'


var response  = phoneNumberValidate(value, area, required)

Example:
phoneNumberValidate('phone number',area, true)
---return bool

```
## Many validation functions are available:
```
validateIP(value, type, required) // Example: validateIP('192.168.34.56', 'IPv4', true) OR validateIP('IPv6 value', 'IPv6', true)
validateDomain(value, required) // Example validateDomain('www.google.com', true) OR validateDomain('www.google.com', false)
validatePrice(value, required) // Example validatePrice('23:00', true) OR validatePrice('33:00', false)
