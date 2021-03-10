import React, { Component } from "react";

class About extends Component {
  render() {
    if (this.props.data) {
      var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var resumeDownload = this.props.data.resumedownload;
      var softSkills = this.props.data.softSkills;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Mathias Porzier Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
              {bio} <br></br>
              <br></br>
              {softSkills}
            </p>
            <div className="row">
              <div className="columns download">
                <p>
                  <a
                    href={resumeDownload}
                    className="button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-eye"></i>View Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
