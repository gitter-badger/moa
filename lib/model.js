


var Inflector = require('inflected');
var tpl = require('tpl_apply');


// var inflect = require('i')();


// movies_controller
function g(o) {

  this.entity = Inflector.camelize(o.model.entity);
  this.attrs = JSON.stringify(o.model.attr);
    // console.log(o);
  this.model  = o.model.entity;
  this.models = Inflector.pluralize(o.model.entity);
  this.out_file_name = o.root_path  +'/out/'+ o.model.entity + ".js";
  this.source_file = o.root_path + '/tpl/models/movie.js'
  
  console.log(this);
  
  var source = this.source_file;
  var dest = this.out_file_name;


  tpl.tpl_apply(source, this, dest);
}

module.exports = g;