const ReactDOM = require('react-dom')
const React = require('react');
const Backbone = require('backbone');
const LogInView = require('./loginPage.js');
const HomeView = require('./HomeView.js');
const AppViewController = require('./appViewController.js')
const UserModel = require('./ModelUser.js')
//document.querySelector('#app-container').innerHTML = `<h1>changed Text </h1>`

const AppRouter = Backbone.Router.extend({
   routes: {
      "fuckers": "homePage",
      "": "loginPage"
   },

   loginPage: function(){
      console.log('Routing to login')
      ReactDOM.render(  <AppViewController routedFrom="loginPage"/> ,document.querySelector('#app-container'))
   },

   homePage: function(){
      console.log('Routing to home')
      ReactDOM.render( <AppViewController routedFrom="homePage"/>  ,document.querySelector('#app-container'))
   },

   initialize: function(){
      Backbone.history.start()
  }

})


new AppRouter()
