var currentlyActive = "OURPHIL"

function formSubmit(){
  $( "#submit-message" ).empty();
  var textareaField = document.getElementById('inputTextarea');
  var emailField = document.getElementById('email');
  var servicesFields = document.getElementById('servicesfield');
  var nameField = document.getElementById('inputFullName');
  var companyNameField = document.getElementById('inputCompanyName');
  var companyNumberField = document.getElementById('inputCompanyNumber');

  var body = {
    name: nameField.value,
    companyname: companyNameField.value,
    query: textareaField.value,
    contactnumber: companyNumberField.value,
    email: emailField.value,
    services: servicesFields.value
  }


  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function validateName(name) {
    if(name.length < 1){
      console.log(name);
      return false;
    } else {
      return true;
    }
  }

  function validateNumber(number) {
    if(isNaN(number)){
      console.log(number);
      return false;
    } else {
      return true;
    }
  }

  function validation(body, cb){
    if(validateEmail(body.email) != true || validateName(body.name) != true || validateName(body.companyname) != true || validateName(body.query) != true || validateNumber(body.contactnumber) != true){
      return cb('true', null);
    } else {
      return cb(null, true);
    }
  }
  validation(body, (err, res)=>{
    if(err){return $( "#submit-message" ).empty().append('Please double check the details above!')}
    $( "#submit-message" ).empty();
    var posting = $.post('/query', body);
    posting.done()
    $( "#submit-message" ).empty().append('Query successfully recieved!')
  })
}

$(document).ready(function(){
   var cart = {
     "Static":false,
     "Bespoke":false,
     "Integrated":false
   }
  $('.items-prd').on('click', function() {
    if (document.getElementById(this.id).style.backgroundColor === "white"){
      document.getElementById(this.id).style.color = "white";
      document.getElementById(this.id).style.backgroundColor = "black";
      cart[this.id] = true;
      console.log(cart);
    } else if (document.getElementById(this.id).style.backgroundColor === "black"){
      document.getElementById(this.id).style.color = "black";
      document.getElementById(this.id).style.backgroundColor = "white";
      cart[this.id] = false;
      console.log(cart);
    } else {
      document.getElementById(this.id).style.color = "white";
      document.getElementById(this.id).style.backgroundColor = "black";
      console.log(cart[this.id]);
      cart[this.id] = true;
      console.log(cart);
    }
  });
  $(".first").addClass("active");
  $('.first-content').css('display', 'block');
});

function Navigation(changeto, checker){
  $(".active").removeClass("active");
  $("#"+checker.id).addClass("active");
  document.getElementById(this.currentlyActive).style.display = "none";
  this.currentlyActive = changeto;
  document.getElementById(changeto).style.display = "block";
}

function dbRead(){
  $( "#lardle" ).empty();
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = $.parseJSON(this.responseText);
      console.log();
      
      $(function() {
          $.each(response, function(i, item) {
            var $tr = $('<tr>').addClass("table").append(
                    $('<th>').text("Name").addClass("table-row"),
                    $('<th>').text("Companyname").addClass("table-row"),
                    $('<th>').text("Query").addClass("table-row"),
                    $('<th>').text("Contactnumber").addClass("table-row"),
                    $('<th>').text("Email").addClass("table-row"),
                    $('<th>').text("Service Selected").addClass("table-row")
                ).appendTo('#lardle');
            console.log(item);
            var $tr = $('<tr>').addClass("table").append(
                $('<td>').text(item.name).addClass("table-row"),
                $('<td>').text(item.companyname).addClass("table-row"),
                $('<td>').text(item.query).addClass("table-row"),
                $('<td>').text(item.contactnumber).addClass("table-row"),
                $('<td>').text(item.email).addClass("table-row"),
                $('<td>').text(item.services).addClass("table-row")
            ).appendTo('#lardle');
          });
      });
    }
  }
  xmlhttp.open("GET","/all",true);
  xmlhttp.send();
}