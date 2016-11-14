const ReactDOM = require('react-dom');
const React = require('react');
const Backbone = require('backbone');
const ACTIONS = require('./actions.js');
const FillBeers =require('./populateBeerCards.js')

const HomeView = React.createClass({

   componentWillMount: function(){
      ACTIONS.fetchUserBeerCollection()

   },

   _handleNewBeer: function(evt){
      let theName = this.refs.theNameEl.value
      let theImage = this.refs.theImageEl.value
      let theOrigin = this.refs.theOriginEl.value
      let theOpinion = this.refs.theOpinionEl.value
      let theRating = this.refs.theRatingEl.value
      let theHaveAnother = this.refs.theHaveAnotherEl.value

      let newBeer = {
         name: theName,
         image: theImage,
         origin: theOrigin,
         opinion: theOpinion,
         rating: theRating,
         haveAnother: theHaveAnother

      }
      console.log(newBeer)
      ACTIONS.createNewBeer(newBeer)

   },

   render: function(){

      let beers = this.props.currentBeers.map(function(elmnt){
         console.log(elmnt)
         return (
            <FillBeers key={elmnt.cid} beerData={elmnt}/>
         )
      })

      return (
         <div className="loggedIn-home">
         <div className="col-md-12 column loggedIn-content">
            <div className="column col-md-3 left-column">
               <h2>dummy text</h2>

               <div className="row">
                 <div className="col-md-12">
                   <div className="beerDetails">
                      <h5>Beer Name</h5>
                     <input type="text" className="form-control" ref="theNameEl" placeholder="Beer Name"/>
                     <h5>Beer image</h5>
                     <input type="text" className="form-control" ref="theImageEl" placeholder="imageURL"/>
                     <h5>beer origin</h5>
                     <input type="text" className="form-control" ref="theOriginEl" placeholder="beer origin"/>
                     <h5>opinion</h5>
                     <input type="text" className="form-control" ref="theOpinionEl" placeholder="opinion"/>
                     <h5>rating</h5>
                     <input type="text" className="form-control" ref="theRatingEl" placeholder="rating"/>
                     <h5>have Another?</h5>
                     <input type="text" className="form-control" ref="theHaveAnotherEl" placeholder="have Another?"/>

                     <button className="btn btn-default btl-large" onClick={this._handleNewBeer} type="button">Add New Beer</button>
                   </div>
                 </div>
               </div>

            </div>
            <div className="column col-md-9 right-column">
            <div className="row">
               {beers}
            </div>


            </div>
         </div>
      </div>
      )
   }
})



module.exports= HomeView
