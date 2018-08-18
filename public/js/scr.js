function formSubmit(){

  var textareaField = document.getElementById('inputTextarea');
  var emailField = document.getElementById('inputEmail');
  var nameField = document.getElementById('inputFullName');

  var body = "Name: " +  nameField.value + "   " + "Query: " + textareaField.value + "   " + "email: " + emailField.value;
  
  var emailTo = emailField.value
  var posting = $.post( '/query', { query: body }, ()=>{
    console.log('lol');
  });
  posting.done(function( {data: body, email: emailTo} ) {
    console.log('lolllll');
    // document.getElementById('inputTextarea')
    // $( "#submit-message" ).empty().append('Query successfully recieved!')
  });
}
