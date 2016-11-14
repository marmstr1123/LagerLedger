const React = require('react');
const HomeView = require('./HomeView.js');
const Backbone = require('backbone');
const ACTIONS = require('./actions.js')

const FillBeers = React.createClass({
   // componentWillMount: function(){
   //    ACTIONS.fetchUserBeerCollection()
   // },

   render: function(){
      //console.log("props", this.props.beerData.get('theName'));

   return (

      <div className="col-sm-6 col-md-4">
         <div className="thumbnail">
            <img  src={this.props.beerData.get('image')} alt=""/>
            <div className="caption">
               <h3 className="beerName">{this.props.beerData.get("name")}</h3>
               <p>{this.props.beerData.get("origin")}</p>
               <p className="description">{this.props.beerData.get("opinion")}</p>
               <p>{this.props.beerData.get("rating")}</p>
               <h5>{this.props.beerData.get("haveAnother")}</h5>
            </div>
         </div>
      </div>
   )
   }

})

module.exports = FillBeers
//https://www.greatlakesbrewing.com/sites/default/files/eliotness-fixed_1.png
