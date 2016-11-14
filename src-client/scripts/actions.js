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
      beerColl.fetch().then(function(){
         console.log('fetched beers', beerColl)
         STORE.setStore('currentBeers',beerColl.models)
      })
  },

  createNewBeer: function(newBeerData){
    const beerMod = new BeersModel()
    beerMod.set(newBeerData)
    return beerMod.save().then(function(){
      let newState = STORE.getStoreData()
      newState.push(beerMod)
      console.log('redirect');
      STORE.setState('currentBeers', newState)
        window.location.hash = "beerHome"
    })

 },

}

module.exports = ACTIONS
