Sythesis.controller.validity = {
  password: function(input){
    var passVal = $(input).val();
    if((passVal != '******') && (passVal.match(/\*\*\*\*/))){
      $(input).val($(input).val().replace(/\*/g, ''))
    }

    if(input.value == 'CREATE FOR ME'){
      ValidityController.markInert($(input))
    }
    else if(input.value.length < 6){
      ValidityController.markInvalid($(input), 'password-syth-length-warning', 'Must Be 6 Characters Long');
    }
    else {
      ValidityController.markValid($(input), 'password-syth-length-warning');
    }

    if(input.getAttribute('sythConfirmPassword') == 'true'){
      if ($(input).hasClass('passFirst')){
        var firstInput = input;
        var confirmInput = $(input).closest(':has(.passConfirm)').find('.passConfirm')[0];
      }
      else{
        var confirmInput = input;
        var firstInput =  $(input).closest(':has(.passFirst)').find('.passFirst')[0];
      }

      if (confirmInput.value != firstInput.value){
        if ($(confirmInput).siblings('.password-syth-match-warning').length < 1){
          $(confirmInput).css('background-color', badColor).after("<p class='password-syth-match-warning' style='color:red'> Does Not Match Confirmation</p>");
        }
      }
      else{
        $(confirmInput).siblings('.password-syth-match-warning').remove();
      }
    }
  },

  required: {
    dropdown: function(input){
      var val = $(input).val();
      if(val === '' ){
        ValidityController.markInvalid($(input), 'required-syth-warning', 'Please Select Your State');
      }
      else {
        ValidityController.markValid($(input), 'required-syth-warning');
      }
    },

    email: function(input){
      var val = $(input).val();
      // http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address
      if(val.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/) ){
        ValidityController.markValid($(input), 'required-syth-warning');
      }
      else {
        ValidityController.markInvalid($(input), 'required-syth-warning', 'Please Enter a Valid Email');
      }
    },

    phone: function(input){
      var val = $(input).val();
      if(val.match(/\d.*\d.*\d.*\d.*\d.*\d.*\d.*\d.*\d.*\d.*/) ){
        ValidityController.markValid($(input), 'phone-syth-warning');
      }
      else {
        ValidityController.markInvalid($(input), 'phone-syth-warning', 'Please include a 10 digit phone number, for example: xxx-xxx-xxxx');
      }
    },

    name: function(input){
      var scrubbedValue = input.value.replace(/\s/g,'');
      if(scrubbedValue.length < 1){
        ValidityController.markInvalid($(input), 'required-syth-warning', 'Must Be Present');
      }
      else {
        ValidityController.markValid($(input), 'required-syth-warning');
      }
    }
  }
}