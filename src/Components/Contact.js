import React, { Component } from "react";

class Contact extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
    }

    return (
      <section id="contact">
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>{name}</span>
              <br />
              {city}, {state}
              <br />
              <a href={"tel:" + { phone }}>{phone}</a>
              <br />
              <a href={"email:" + { email }}>{email}</a>
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
