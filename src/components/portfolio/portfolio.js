import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title>
                    <img alt="" src="images/portfolio/console.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Intelligent MediBuddy</h5>
                        <p>Medical Management Application</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" title>
                    <img alt="" src="images/portfolio/judah.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Expense Tracker</h5>
                        <p>Web based Application</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              
            </div> {/* portfolio-wrapper end */}
          </div> {/* twelve columns end */}
          {/* Modal Popup
	      --------------------------------------------------------------- */}
          
          <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-console.jpg" alt="" />
            <div className="description-box">
              <h4>Intelligent MediBuddy</h4>
              <p>Created a JAVA Swing application in NetBeans primarily to manage the medical drive in a school.</p>
              <span className="categories"><i className="fa fa-tag" />Branding</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/AkashSinha95/Projects/tree/master/Application%20Engineering%20Development%20(Java)">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-02 End */}
          <div id="modal-03" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-judah.jpg" alt="" />
            <div className="description-box">
              <h4>Expense Tracker</h4>
              <p>Developed a MEAN Stack web application for tracking income and expenses.</p>
              <span className="categories"><i className="fa fa-tag" />Branding</span>
            </div>
            <div className="link-box">
              <a href="https://github.com/AkashSinha95/Projects/tree/master/Web%20Design">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-03 End */}
         
        </div> {/* row End */}
      </section>
      </React.Fragment>
    );
  }
}