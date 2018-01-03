import React, { Component } from 'react';
class Login extends Component {
    render() {
      return (
              <div className="container py-3 px-5 bg-primary">
    <div className="form-inline ">
      Email:
      <input style={{"margin-left":"50px"}}  type="email" className="form-control " id="email" placeholder="Enter email" name="email"/>
    </div><br/>
    <div className="form-inline">
     Password:
      <input style={{"margin-left":"20px"}}  type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd"/>
    </div><br/>
    <div className="checkbox">
      <label><input type="checkbox" name="remember"/> Remember me</label>
    </div>
    <button style={{"margin-left":"120px"}} type="submit" className="btn btn-danger">Login</button>
              </div>
    );
}
}

export default Login;     