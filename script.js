document.addEventListener('click', function(event){
  if(event.target.id == "trial-claim-button"){
    displayErrorWarningIfEmpty();
  }
});

function displayErrorWarningIfEmpty(){
  removeElementsByClass("error-text");

  let allElements = document.getElementsByClassName('new-user-data');
  
  for(let element of allElements){
    if (element.value.length == "0" && element.id !='E-mail address'){
      element.insertAdjacentHTML('afterend', '<p class="error-text">' + element.id + ' cannot be empty</p>')
      element.classList.add("error-inputbox");
    } else if (element.id == 'E-mail address' && !validateEmail(element.value)){
      element.insertAdjacentHTML('afterend', '<p class="error-text">Looks like this is not an email</p>')
      element.classList.add("error-inputbox");
    }
    else {
      element.classList.remove("error-inputbox");
    }
  }
}

function removeElementsByClass(className){
  const elements = document.getElementsByClassName(className);

  while(elements.length > 0){
      elements[0].remove();
  }
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
