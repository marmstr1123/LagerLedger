const Backbone = require('backbone')
const STORE = require('./store.js')
const UserModel = require('./ModelUser.js')
const {BeersModel,BeersCollection} = require("./ModelBeers.js");

const ACTIONS = {
  authenticateUser: function(userDataObj){
        let userMod = new UserModel()
        userMod.set(userDataObj)

        userMod.save().then(function(serverRes){
          location.hash="beerHome"
        })
  },


  fetchUserBeerCollection: function(beerObj){
      const beerColl = new BeersCollection()
      console.log('fetchinnnggg??')
      beerColl.fetch().then(function(){
         console.log('fetched beers LOOOOKKKKKKK', beerColl)
         STORE.setStore('currentBeers',beerColl.models)
      })
  },

  createNewBeer: function(newBeerData){
    const beerMod = new BeersModel()
    beerMod.set(newBeerData)
    return beerMod.save().then(function(){

      ACTIONS.fetchUserBeerCollection()
      // STORE.setState('currentBeers', newState)

   })

 },

}

module.exports = ACTIONS
