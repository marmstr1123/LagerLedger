const ReactDOM = require('react-dom');
const React = require('react');
const Backbone = require('backbone');
const ACTIONS = require('./actions.js');
const UserModel = require('./ModelUser.js');

let LogInView = React.createClass({
   _handleNewUser: function(evt){
      let theUsername = this.refs.theUsernameEl.value
      let thePassword = this.refs.thePasswordEl.value

      let newUser = {
         user: theUsername,
         password: thePassword
      }
      console.log(newUser)
      ACTIONS.authenticateUser(newUser)

   },
   render: function(){
      return (
         <div className="loginPage">

            <div className="row">
              <div className="col-md-2">
                <div className="input-group user-group">
                  <input type="text" className="form-control" ref="theUsernameEl" placeholder="username"/>
                  <input type="text" className="form-control" ref="thePasswordEl" placeholder="password"/>
                  <button className="btn btn-default btl-large" onClick={this._handleNewUser} type="button">sing in!</button>
                </div>
              </div>
            </div>


         </div>

      )

   }

})


module.exports = LogInView ;
