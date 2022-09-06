//form validation//
function validateForm() {
    let x = document.forms["myForm"]["mail"].value;
    if (x == "") {
        alert("Please submit an email");
        return false;
    }
    }
    function validateFormTel() {
    let x = document.querySelector(".tele").value;
    if (isNaN(x) || x < 9999999 || x > 99999999) {
        alert ("Please use a valid phone number");
    } else {
        alert( "We will get in touch");
    }
    }
  
//datepicker//
    $(function() {
        $( "#datepicker-1" ).datepicker();
    });