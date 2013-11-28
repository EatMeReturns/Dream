var Model = require('./model');
var User = module.exports = Model.extend({
  findById: function(id) { // Will be the generic Model.findById eventually.
    
    // This is a database:
    if(id == 1) {
      return {
        id: 1,
        username: 'emr',
        decks: []
      }
    }
    else if(id == 2) {
      return {
        id: 2,
        username: 'tie372',
        decks: []
      } 
    }
  },
  
  authenticate: function() {
    return true;
  }
});