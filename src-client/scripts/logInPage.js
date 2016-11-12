const ReactDOM = require('react-dom');
const React = require('react');
const Backbone = require('backbone');


let LogInView = React.createClass({
   render: function(){
      return (
         <div className="loginPage">

            <div className="row">
              <div className="col-md-2">
                <div className="input-group user-group">
                  <input type="text" className="form-control" placeholder="username"/>
                  <input type="text" className="form-control" placeholder="username"/>
                  <a href="#/fuckers" ><button className="btn btn-default btl-large" type="button">sing in!</button></a>
                </div>
              </div>
            </div>


         </div>

      )

   }

})


module.exports = LogInView ;
