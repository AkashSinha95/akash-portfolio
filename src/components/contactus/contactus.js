import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any opportunity or suggestions below
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Email : &nbsp;&nbsp;sinha.aka@northeastern.edu <br />
                  <br /> Phone : &nbsp;&nbsp;+1-(857).800.4069<br />
                  <br />LinkedIn :  
                  &nbsp;&nbsp;{resumeData.linkedinId}<br />
                  
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}
