// Syncronous
console.log('Wlcome to iShop.')
console.log('Please create an account to login.')

const user = {}

const getFirstName = function() {
  return new Promise(function(resolve, reject){
    let name = prompt('Enter your name');
    setTimeout(function() {
      if(name.trim() === "") {
        reject('Enter a value for first name');
      } else {
        user.firstName = name;
        resolve('First Name is successfully recorded');
      }
    }, Math.random()*1000);
  })
}

// const firstNamePromise = getFirstName();
  
const getLastName = function() {
  return new Promise(function(resolve, reject){
    let lastName = prompt('Enter your last name');
    setTimeout(function() {
      if(lastName.trim() === "") {
        reject('Enter a value for last name');
      } else {
        user.lastName = lastName;
        resolve('Last Name is successfully recorded');
      }
    }, Math.random()*1000);
  })
}
  

// const lastNamePromise = getLastName();

const getEmailAddress = function() {
  return new Promise(function(resolve, reject){
    let emailAddress = prompt('Enter your email address');
    setTimeout(function() {
      if(emailAddress.trim() === "") {
        reject('Enter a value for email address');
      } else {
        user.emailAddress = emailAddress;
        resolve('Email address is successfully recorded');
      }
    }, Math.random()*1000);
  })
}

const getPassword = function() {
  return new Promise(function(resolve, reject){
    let password = prompt('Enter your password');
    setTimeout(function() {
      if(password.trim() === "") {
        reject('Enter a value for password');
      } else {
        user.password = password;
        resolve('Password is successfully recorded');
      }
    }, Math.random()*1000);
  })
}

const allPromises = Promise.all([getFirstName(), getLastName(), getEmailAddress(), getPassword()])

allPromises.then(resolvedValue => {
  console.log(user)
}).catch((rejectionValue)=>{
  console.log(rejectionValue);
})

// prom.then().catch()

// Web Services
// Databases