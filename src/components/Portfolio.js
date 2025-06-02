import React, { Component } from 'react';
import './Portfolio.css'; // We'll create this file next

export default class Porfolio extends Component {
  state = {
    showSlideshow: false,
    currentImageIndex: 0,
    slideshowImages: [],
    currentProject: null
  };

  handleProjectClick = (e, projectName) => {
    e.preventDefault();
    let images = [];
    
    if (projectName === 'grocery') {
      images = [
        'images/gtracker1 (1).png',
        'images/gtracker1 (2).png',
        'images/gtracker1 (3).png',
        'images/gtracker1 (4).png'
      ];
    } else if (projectName === 'hris') {
      images = [
        'images/hris (1).png',
        'images/hris (2).png',
        'images/hris (3).png',
        'images/hris (4).png',
        'images/hris (5).png'
      ];
    }

    this.setState({
      showSlideshow: true,
      slideshowImages: images,
      currentImageIndex: 0,
      currentProject: projectName
    });
  };

  closeSlideshow = () => {
    this.setState({ showSlideshow: false });
  };

  nextImage = () => {
    this.setState(prevState => ({
      currentImageIndex: (prevState.currentImageIndex + 1) % prevState.slideshowImages.length
    }));
  };

  prevImage = () => {
    this.setState(prevState => ({
      currentImageIndex: (prevState.currentImageIndex - 1 + prevState.slideshowImages.length) % prevState.slideshowImages.length
    }));
  };

  render() {
    const { showSlideshow, currentImageIndex, slideshowImages } = this.state;

    return (
      <section id="portfolio" className="portfolio-section">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1 className="animate-title">Check Out Some of My Works.</h1>
            <div className="portfolio-wrapper" style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="bgrid-quarters s-bgrid-thirds cf" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                <div className="columns portfolio-item animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <div className="item-wrap">
                    <button onClick={(e) => this.handleProjectClick(e, 'hris')} className="portfolio-link">
                      <img src="images/HRIS logo.png" alt='HRIS' className="item-img" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>HRIS</h5>
                          <p>Built from scratch - Company-wide application used by employees</p>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>

                <div className="columns portfolio-item animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <div className="item-wrap">
                    <a href="https://threeinonesample.netlify.app/" rel="noreferrer" target="_blank">
                      <img src="images/3in1.jpg" alt='3 in 1 App' className="item-img" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>3 in 1</h5>
                          <p>Calcu - ToDo List - Weather App</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="columns portfolio-item animate-fade-in" style={{ animationDelay: '0.6s' }}>
                  <div className="item-wrap">
                    <a href="https://zdiocampo.github.io/reactionTester/" rel="noreferrer" target="_blank">
                      <img src="images/reaction.jpg" alt='Reaction Tester' className="item-img" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Reaction tester</h5>
                          <p>How fast can you click on the shapes?</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="columns portfolio-item animate-fade-in" style={{ animationDelay: '0.8s' }}>
                  <div className="item-wrap">
                    <a href="https://zdiocampo.github.io/diocampo-portfolio/" rel="noreferrer" target="_blank">
                      <img src="images/zdiocampo.jpg" alt='First Portfolio' className="item-img" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>First Portfolio</h5>
                          <p>My First Portfolio Using ReactJs</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="columns portfolio-item animate-fade-in" style={{ animationDelay: '1s' }}>
                  <div className="item-wrap">
                    <button onClick={(e) => this.handleProjectClick(e, 'grocery')} className="portfolio-link">
                      <img src="images/gtracker1 (1).png" alt='Grocery Tracker' className="item-img" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Grocery Tracker</h5>
                          <p>Track your grocery shopping efficiently</p>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slideshow Modal */}
        {showSlideshow && (
          <div className="slideshow-modal">
            <div className="slideshow-content">
              <button className="close-button" onClick={this.closeSlideshow}>×</button>
              <button className="nav-button prev" onClick={this.prevImage}>❮</button>
              <img 
                src={slideshowImages[currentImageIndex]} 
                alt={`Slide ${currentImageIndex + 1}`} 
                className="slideshow-image"
              />
              <button className="nav-button next" onClick={this.nextImage}>❯</button>
              <div className="slideshow-indicators">
                {slideshowImages.map((_, index) => (
                  <span 
                    key={index} 
                    className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => this.setState({ currentImageIndex: index })}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    );
  }
}
