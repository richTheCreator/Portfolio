$(document).ready(function() {

  var formObj = {
    first: false,
    last: false,
    email: false,
    desc: false
  }
  var validForm = function() {
    var isValid = false;

    function allTrue(obj) {
      for (var i in obj) {
        if (obj[i] === false) {
          isValid = false;
          break;
        } else {
          isValid = true;
        }
      }
    }

    allTrue(formObj)

    if (isValid) {
      console.log('FORM_IS_VALID', formObj)
      $('.contact-btn').removeClass('contact-btn-hide').addClass('contact-btn-show')
      $('.contact-btn-invalid').addClass('contact-btn-hide').remove('contact-btn-show')
    } else if (!isValid) {
      // console.log('FORM_NOT_VALID', formObj)
      $('.contact-btn').addClass('contact-btn-hide').removeClass('contact-btn-show')
      $('.contact-btn-invalid').removeClass('contact-btn-hide').addClass('contact-btn-show')
    }
  }

  $('#first_name').on('input blur', function() {
    var input = $(this);
    var input_val = input.val();
    if (input_val) {
      input.removeClass("invalid-form")
      formObj.first = true;
      validForm()
    } else {
      input.addClass("invalid-form")
      formObj.first = false;
      validForm()
    }
  });

  $('#last_name').on('input blur', function() {
    var input = $(this);
    var input_val = input.val();
    if (input_val) {
      input.removeClass("invalid-form")
      formObj.last = true;
      validForm()
    } else {
      input.addClass("invalid-form")
      formObj.last = false;
      validForm()
    }
  });

  $('#sender_email').on('input blur', function() {
    var input = $(this);
    var input_val = input.val();
    var valid_email = false;
    var emailValidate = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

    var testFunc = function(val) {
      if (val.match(emailValidate)) {
        valid_email = true;
      } else {
        valid_email = false;
      }
    }

    testFunc(input_val)

    if (input_val && valid_email) {
      input.removeClass("invalid-form")
      formObj.email = true;
      validForm()
    } else {
      input.addClass("invalid-form")
      formObj.email = false;
      validForm()
    }
  });

  $('#contact_description').on('input blur', function() {
    var input = $(this);
    var input_val = input.val();
    if (input_val) {
      input.removeClass("invalid-form")
      formObj.desc = true;
      validForm()
    } else {
      input.addClass("invalid-form")
      formObj.desc = false;
      validForm()
    }
  });

  validForm()
})
