import React, { Component } from 'react';
class Register extends Component {
    render() {
      return (
          <div className="container bg-danger py-4 px-5 ">
        
        <div className="form-inline">
          FirstName:
          <input style={{"margin-left":"40px"}} type="FirstName" className="form-control" id="" placeholder="Enter firstname" name=""/>
        </div><br/>
        <div className="form-inline">
          LastName:
          <input style={{"margin-left":"40px"}} type="LastName" className="form-control" id="" placeholder="Enter lastname" name=""/>
        </div>
        <br/>
        <div className="form-inline">
         Email:
         <input style={{"margin-left":"70px"}} type="text" className="form-control" placeholder="enter email " name=""/>
         </div>
         <div className="form-inline py-2 pt-3">
         Mobile Number:
         <input type="text" className="form-control" placeholder="enter number " name=""/>
         </div>
         <br/>
        <button style={{"margin-left":"120px"}} type="submit" className="btn btn-default">Register</button>
                  </div>
                  
    );
}
}

export default Register;     
