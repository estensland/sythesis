Sythesis = {
  route_to_objects : function(jsObject, keys, params) {
    if (keys.length > 0){
      return Sythesis.route_to_objects(jsObject[keys.shift()], keys, params);
    }
    else{
      return jsObject(params);
    }
  },

  process: function(key, params){
    if (key){
      var multipleKeys = key.split('-');
      for(var i = 0, ii = multipleKeys.length; i < ii, i ++){
        Sythesis.route_to_objects(Sythesis.controller, multipleKeys[i].split(':'), params);
      }
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
