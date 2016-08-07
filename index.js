const library = require('./library.json');
exports.firstName = function(req){
  const size = library.firstName[req].length,
    random = Math.floor(Math.random() * size);
  return library.firstName[req][random];
};
exports.lastName = function(req){
  const size = library.lastName[req].length,
    random = Math.floor(Math.random() * size);
  return library.lastName[req][random];
};
exports.fullName = function(fn, ln){
  return exports.firstName(fn) + " " + exports.lastName(ln);
};
exports.special = {
  apostrophe: {
    firstName: function(req){
      const size = library.special.firstName[req].length,
        random = Math.floor(Math.random() * size);
      return library.special.firstName[req][random];
    },
    lastName: function(req){
      const size = library.special.lastName[req].length,
        random = Math.floor(Math.random() * size);
      return library.special.lastName[req][random];
    },
    fullName: function(fn, ln){
      return exports.special.apostrophe.firstName(fn) + " " + exports.special.apostrophe.lastName(ln);
    }
  }
};
