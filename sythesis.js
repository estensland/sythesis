Sythesis = {
  process: function(key, params){
    if (key){
      var splited = key.split(':');
      var namespace = splited[0];
      var remainingKey = splited.slice(1,splited.length);
      Sythesis.controller[namespace](remainingKey,params);
    }
    },

  bind: function(){
    var onClassess = [['click', '.syth-link'], ['switch-change', '.syth-switch'], ['change' '.syth-select'], ['input', '.syth-type-input']]

    for (var i = 0, ii = onClassess.length; i < ii; i ++) {
      $(document).on(onClassess[i][0], onClassess[i][1], function(e){
        e.preventDefault();
        clicked = $(this);
        Sythesis.process(clicked.attr('sythKey'), clicked);
      });
    };

    $(document).on('keyup', '.syth-type', function(e){
      var clicked = this;
      var doneTyping = function(){
        Sythesis.process(clicked.getAttribute('sythKey'), clicked);
      }
      if (typeof doneTypingInterval != 'undefined'){
        clearTimeout(typingTimer);
        typingTimer = setTimeout(doneTyping, doneTypingInterval);
      }
      else{
        Sythesis.process(clicked.getAttribute('sythKey'), clicked);
      }
    });

    $(document).on('keydown', '.syth-type', function(e){
      if (typeof doneTypingInterval != 'undefined'){
        clearTimeout(typingTimer);
      }
    });
  },

  browserSubmit: function (action, method, input) {
    var form = $('<form />', {
      action: action,
      method: method,
      style: 'display: none;'
    });
    if (typeof input !== 'undefined') {
      if (typeof input === 'string'){
        $('<input />', {
          type: 'hidden',
          name: 'submittedParams',
          value: input
        }).appendTo(form);
      }
      else{
        $.each(input, function (name, value) {
          $('<input />', {
            type: 'hidden',
            name: name,
            value: value
          }).appendTo(form);
        });
      }
    }
    form.appendTo('body').submit();
  }
}

Sythesis.controller = {}


$(document).ready(function() {
  Sythesis.bind();
}