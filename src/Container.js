import React, { Component } from 'react';
class Container extends Component {
    render() {
      return (
  
<div className=" bg-dark d-flex  " >
            <div className="py-2 px-5 color-white">
                <img src="images/icon2.png" alt="" width="80"/>
                <h4 style={{"color":"white"}}>mUsIc ApP</h4>
            </div>
            <div className="pt-5 ">
                <ul className="d-flex list-unstyled" style={{"margin-left":"550px"}}>
                    <li><a href="/" style={{"text-decoration":"none"}}>Home</a></li>&nbsp;&nbsp;
                    <li><a href="/register2" style={{"text-decoration":"none"}}>Register</a></li>&nbsp;&nbsp;
                    <li><a href="/login2" style={{"text-decoration":"none"}}>Login</a></li>&nbsp;&nbsp;
                    <li><a href="/about" style={{"text-decoration":"none"}}>About</a></li>&nbsp;&nbsp;
                    <li><a href="" style={{"text-decoration":"none"}}>Contact Us</a></li>
                </ul>
            </div>
        </div>
         );
        }
      }
      
      export default Container;     