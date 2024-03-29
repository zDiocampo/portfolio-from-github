import React, { Component } from 'react';

export default class Porfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div className="portfolio-wrapper" style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="bgrid-quarters s-bgrid-thirds cf" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="https://threeinonesample.netlify.app/">
                      <img src="images/3in1.jpg" alt='3in1' className="item-img" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>3 in 1</h5>
                          <p>Calcu - ToDo List - Weather App</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="https://zdiocampo.github.io/reactionTester/">
                      <img src="images/reaction.jpg" alt='reaction' className="item-img" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Reaction tester</h5>
                          <p>How fast can you click on the shapes?</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="https://zdiocampo.github.io/diocampo-portfolio/">
                      <img src="images/zdiocampo.jpg" alt='portfolio' className="item-img" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>First Portfolio</h5>
                          <p>My First Portfolio Using ReactJs</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
