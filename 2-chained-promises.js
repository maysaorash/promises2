// Syncronous
console.log('Wlcome to iShop.')
console.log('Please create an account to login.')

const getFirstName = function() {
  return new Promise(function(resolve, reject){
    let name = prompt('Enter your name');
    setTimeout(function() {
      if(name.trim() === "") {
        reject('Enter a value for first name');
      } else {
        resolve(name);
      }
    }, Math.random()*3000);
  })
}

// const firstNamePromise = getFirstName();
  
const getLastName = function(firstName) {
  return new Promise(function(resolve, reject){
    let lastName = prompt('Enter your last name');
    setTimeout(function() {
      if(lastName.trim() === "") {
        reject('Enter a value for last name');
      } else {
        resolve(firstName + ' ' + lastName);
      }
    }, Math.random()*3000);
  })
}
  

// const lastNamePromise = getLastName();

const getEmailAddress = function(fullName) {
  return new Promise(function(resolve, reject){
    let emailAddress = prompt('Enter your email address');
    setTimeout(function() {
      if(emailAddress.trim() === "") {
        reject('Enter a value for email address');
      } else {
        resolve([fullName, emailAddress]);
      }
    }, Math.random()*3000);
  })
}

const getPassword = function(userInfoArray) {
  return new Promise(function(resolve, reject){
    let password = prompt('Enter your password');
    setTimeout(function() {
      if(password.trim() === "") {
        reject('Enter a value for password');
      } else {
        resolve({
          fullName: userInfoArray[0],
          emailAddress: userInfoArray[1],
          password: password
        });
      }
    }, Math.random()*3000);
  })
}

getFirstName().then(resolvedValue => {
  return getLastName(resolvedValue)
}).then(resolvedValue2 => {
  return getEmailAddress(resolvedValue2)
}).then(function(resolvedValue3) {
  return getPassword(resolvedValue3)
}).then(function(resolvedValue4){
  console.log(resolvedValue4)
}).catch((rejectionValue)=>{
  console.log(rejectionValue);
})

// prom.then().catch()

// Web Services
// Databases