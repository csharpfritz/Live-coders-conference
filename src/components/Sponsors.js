import React, { Component } from "react";

class Sponsors extends Component {
  state = {};
  render() {
    return (
      <section id="sponsors" className="sponsors">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="section__title">Team Sponsors</h2>
              <img
                className="sponsors__fauna"
                src="./img/sponsors/fauna.png"
                alt="Fauna logo"
              />
            </div>
            <div className="col-md-6">
              <h2 className="section__title">Conference Sponsors</h2>
              <div className="sponsors__conf-sponsors">
                <img
                  src="./img/sponsors/sponsors.png"
                  alt="DevExpress logo"
                  height="335"
                  width="238"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Sponsors;
