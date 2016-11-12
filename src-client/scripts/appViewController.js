const React = require('react');
const STORE = require('./store.js');
const Actions = require('./actions.js');
const HomeView = require('./HomeView.js');
const LogInView = require('./loginPage.js');


const AppViewController = React.createClass({

   getInitialState: function(){
      STORE.setStore('currentBeers', [] )
      let startingState = this.getStoreData()
      return startingState
   },

   componentWillMount: function(){
      let self = this
      STORE.onChange(function(){
         let updateState = STORE.getStoreData()
         self.setState(updateState)
      })
   },

   render: function(){
      switch(this.props.routedFrom){
         case "LogInView":
            return <LogInView/>
            break;

         case "HomeView":
            return < HomeView currentBeers={this.state.currentBeers}/>
            break;

         default:
            return (
               <div>
                  <h1>Something Went Wrong</h1>
               </div>
            )
      }
   }

})

module.exports = AppViewController
