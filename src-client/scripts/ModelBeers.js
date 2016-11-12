const Backbone = require('backbone');

const BeersModel = Backbone.Model.extend({
   url: "/beers",

   initialize: function(){

   }
})

const BeersCollection = Backbone.Collection.extend({
   model: BeersModel,

   url: "/beers",

   initialize: function(){

   }
})

module.exports={
   BeersModel,
   BeersCollection
}
