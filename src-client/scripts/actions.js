const Backbone = require('backbone')
const STORE = require('./store.js')
const UserModel = require('./model-user.js')

const ACTIONS = {
  autheticateUser: function(userDataObj){
        let userMod = new UserModel()
        userMod.set(userDataObj)

        userMod.save().then(function(serverRes){
          location.hash= ""
        })
  },


  fetchUserBeerCollection: function(beerObj){
      const beerColl = new UserBeerCollection()
      beerColl.fetch().then(function(){
          window.location.hash = "beers"
      })
  },

}

module.exports = ACTIONS
