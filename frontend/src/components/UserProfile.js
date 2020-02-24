import React, { Component } from "react";
import axios from "axios";

export default class UserProfile extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/auth/user', { 'headers': { 'Authorization': 'Token ' + localStorage.getItem('token') } })
        .then(res => {
            const data = res.data;
            this.setState({ data: data });
          })
        .catch(function (error) {
            console.log(error);
          })
        
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card card-body mt-4 mb-4" >
                            <h2>Profile</h2>
                            {Object.keys(this.state.data).map(obj => <div>{obj + ': ' + this.state.data[obj]}</div>)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}