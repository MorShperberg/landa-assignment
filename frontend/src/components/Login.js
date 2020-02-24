import React, { Component } from "react";
import {
    Link,
    Redirect
  } from "react-router-dom";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      isAuthenticated: false
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
    const { username, password } = this.state;
    axios.defaults.xsrfCookieName = 'csrftoken'
    axios.defaults.xsrfHeaderName = 'X-CSRFToken'
    axios.defaults.withCredentials = true
    axios
      .post(
        "http://127.0.0.1:8000/api/auth/login",
            ({
                username: username,
                password: password
            })
      )
      .then(response => {
        localStorage.setItem('token', response.data.token);
        this.setState({isAuthenticated: true})
      })
      .catch(error => {
        console.log("login error", error);
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
                        <h2>Login</h2>
                        <form onSubmit={this.handleSubmit}>
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
                            <button type="submit" className="btn btn-primary">Login</button>&emsp;
                            <Link to="/signup">Sign up</Link>
                        </form>
                    </div>
                </div>
            </div>
      </div>
    );
  }
}