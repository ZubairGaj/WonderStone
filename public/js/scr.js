var currentlyActive = "OURPHIL"

function formSubmit(){
  $( "#submit-message" ).empty();
  var textareaField = document.getElementById('inputTextarea');
  var emailField = document.getElementById('email');
  var nameField = document.getElementById('inputFullName');

  var body = "Name: " +  nameField.value + "   " + "Query: " + textareaField.value + "   " + "email: " + emailField.value;


  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  var emailvalidation = validateEmail(emailField.value);

  if (emailvalidation != true) {
    $( "#submit-message" ).empty().append('Please enter a valid email address!')
  } else if (textareaField.value < 1) {
    $( "#submit-message" ).empty().append('Please enter a valid query.')
  } else {
    $( "#submit-message" ).empty();
    var posting = $.post('/query', { query: body });
    posting.done()
    $( "#submit-message" ).empty().append('Query successfully recieved!')
  }
}

$(document).ready(function(){
  $('.items-prd').on('click', function() {
    console.log(document.getElementById(this.id).style.backgroundColor);
    if (document.getElementById(this.id).style.backgroundColor === "white"){
      document.getElementById(this.id).style.color = "white";
      document.getElementById(this.id).style.backgroundColor = "black";
    } else if (document.getElementById(this.id).style.backgroundColor === "black"){
      document.getElementById(this.id).style.color = "black";
      document.getElementById(this.id).style.backgroundColor = "white";
    } else {
      document.getElementById(this.id).style.color = "white";
      document.getElementById(this.id).style.backgroundColor = "black";
    }
  });
});

function Navigation(changeto){
  console.log('current',this.currentlyActive);
  document.getElementById(this.currentlyActive).style.display = "none";
  this.currentlyActive = changeto;
  console.log(changeto);
  document.getElementById(changeto).style.display = "block";
  console.log(currentlyActive);
}
