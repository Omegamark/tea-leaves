import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <div className="profile flexer">
        <div className="img-wrapper circle">
          <img src="https://images-na.ssl-images-amazon.com/images/I/91Au8mepKtL._SX522_.jpg" />
        </div>
        <div>
          <h1>Bob</h1>
          <p>Mailman</p>
        </div>
      </div>
    );
  }
}

export default Profile;
