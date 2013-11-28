var _ = require('underscore');

var Model = module.exports = function() {};

Model.extend = function(properties) {
  var child = function(){};
  
  child.prototype = new this();
  
  _.extend(child.prototype, properties);
  
  return child;
};