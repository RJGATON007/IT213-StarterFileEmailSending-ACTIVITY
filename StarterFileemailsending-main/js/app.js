// VARIABLES
const sendBtn = document.getElementById('send Btn'),
      email = document.getElementById('email'),
      subject = document.getElementById('subject'),
      message = document.getElementById('message');



// EVENT LISTENERS

eventListeners();

function eventListeners() {
    // App Init
    document.addEventListener('DOMCOntentLoaded', appInit);

    // Validate the forms
    email.addEventListener('blur', validateField),
    subject.addEventListener('blur', validateField),
    message.addEventListener('blur', validateField);
}


// FUNCTIONS

// APP INITIALIZATION
function appInit() {
    //Disable the send button on load
    sendBtn.disabled = true;
}

// Validate the fields
function validateField() {
    console.log('From validateFiled');
}