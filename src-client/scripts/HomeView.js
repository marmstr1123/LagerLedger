const ReactDOM = require('react-dom');
const React = require('react');
const Backbone = require('backbone');

const HomeView = React.createClass({
   render: function(){
      return (
         <div className="loggedIn-home">
         <div className="col-md-12 column loggedIn-content">
            <div className="column col-md-3 left-column">
               <h2>dummy text</h2>

               <div className="row">
                 <div className="col-md-12">
                   <div className="beerDetails">
                      <h5>Beer Name</h5>
                     <input type="text" className="form-control" placeholder="username"/>
                     <h5>Beer Origin</h5>
                     <input type="text" className="form-control" placeholder="password"/>
                     <h5>dummy text</h5>
                     <input type="text" className="form-control" placeholder="username"/>
                     <h5>dummy text</h5>

                     <div className="btn-group">
                       <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                         RATE <span className="caret"></span>
                       </button>
                       <ul className="dropdown-menu">
                         <li>1</li>
                         <li>2</li>
                         <li>3</li>
                         <li>4</li>
                         <li>5</li>
                       </ul>
                     </div>
                     <h5>dummy text</h5>

                     <input type="text" className="form-control" placeholder="username"/>

                     <button className="btn btn-default btl-large" type="button">Add New Beer</button>
                   </div>
                 </div>
               </div>

            </div>
            <div className="column col-md-9 right-column">

               <div className="row">
                  <div className="col-sm-6 col-md-4">
                     <div className="thumbnail">
                        <img  src="https://www.greatlakesbrewing.com/sites/default/files/eliotness-fixed_1.png" alt=""/>
                        <div className="caption">
                           <h3 className="beerName">beer</h3>
                           <p className="description">....</p>
                           <p><a href="#" className="btn btn-primary" role="button">View Details</a></p>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </div>
      )
   }
})



module.exports= HomeView
