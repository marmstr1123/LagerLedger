const Backbone = require('backbone')

const STORE = {
   _data: {
       currentViewSetting: '',
       currentBeers: []
   },

   setStore: function(storeProp, payload){
      if(typeof this._data[storeProp]=== 'undefined'){
        return
      }
     this._data[storeProp] = payload
     Backbone.Events.trigger('storeChange')

   },

    getStoreData: function(){
      return this._data;
    },

    onChange: function(randFunc){
        Backbone.Events.on('storeChange',randFunc)
    }
}

module.exports = STORE;
