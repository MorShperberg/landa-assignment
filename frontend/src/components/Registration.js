import React, { Component } from "react";
import axios from "axios";
import {
  Link,
  Redirect 
} from "react-router-dom";

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { email, username, password } = this.state;
    axios.defaults.xsrfCookieName = 'csrftoken'
    axios.defaults.xsrfHeaderName = 'X-CSRFToken'
    axios.defaults.withCredentials = true
    axios
      .post(
        "http://127.0.0.1:8000/api/auth/register",
            ({
                email: email,
                username: username,
                password: password
            })
      )
      .then(response => {
        localStorage.setItem('token', response.data.token);
        this.setState({isAuthenticated: true})
      })
      .catch(error => {
        console.log("registration error", error);
      });
    event.preventDefault();
  }

  render() {
    if (this.state.isAuthenticated) {
      return <Redirect to='/user' />
  }
    return (
      <div className="container">
          <div className="row">
              <div className="col-sm-6">
                  <div className="card card-body mt-4 mb-4" >
                    <h2>Registration</h2>
                    <form onSubmit={this.handleSubmit}>
                      <div className="form-group">
                            <label>Email</label>
                            <input
                                className="form-control"
                                type="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                required
                            />
                      </div>
                      <div className="form-group">
                            <label>Username</label>
                            <input
                                className="form-control"
                                type="text"
                                name="username"
                                value={this.state.username}
                                onChange={this.handleChange}
                                required
                            />
                      </div>
                      <div className="form-group">
                            <label>Password</label>
                            <input
                                className="form-control"
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                required
                            />
                      </div>
                      <button type="submit" className="btn btn-primary">Sign Up</button>&emsp;
                      <Link to="/">Switch to login</Link>
                    </form>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}