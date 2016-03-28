(function(global, $) {

  var Greetr = function(firstname,lastname,language) {
    return new Greetr.init(firstName, lastName, language);
  }

  Greetr.init = function(firstName, lastName, language) {
    var self = this;
    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';

  }


}(window,jQuery));
