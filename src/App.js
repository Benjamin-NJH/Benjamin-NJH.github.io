import React, { Component } from 'react';
import './App.css';

import LinkedIn from './Pictures/Logos/Linkedin_white.png';
import Instagram from './Pictures/Logos/Instagram_white.png';
import Youtube from './Pictures/Logos/YouTube_white.png';

import Contents from './components/contents/contents';
import AboutMe from './components/aboutMe/aboutMe';
import Portfolio from './components/portfolio/portfolio';
import Header from './components/header/header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      header: "hidden",
      contentPageHeight: "",
    }
  }

  onScroll = (evt) => {
    if(window.scrollY >= this.state.contentPageHeight) {
      this.setState({header: "visible"});
    } else {
      this.setState({header: "hidden"});
    }
  }

  onClick = (evt) => {
    alert("Hi there! I am working on this section and it is temporarily unavailable.")
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
    this.setState({contentPageHeight: document.getElementById('contents').clientHeight});
    
    document.querySelector("#hobbies").addEventListener('click', this.onClick);
    document.querySelector("#youtube").addEventListener('click', this.onClick);
  }
  
  render() {
    return (
      <div className="App helvetica">
        <Contents />
        <AboutMe />
        <Portfolio />
        {/* profession, videography, technical, analytics */}
        <Header header={this.state.header} />

        <footer className="dib w-100 h-25 white-90 bg-navy pa3">
          <div className="flex flex-column items-center justify-center">
            <p className="f3-ns fw5 tc ma1">Contact Me: </p>
            <a className="f1 no-underline grow-large" href="mailto:ushiojun@gmail.com">📧</a>
            <hr className="w-40-ns mv0"></hr>
            <p className="fw3 tc mt2">Website developed by Benjamin Ng</p>

            <ul className="flex flex-wrap list mh2 mt1 pa2">
              <li>
                <a rel="noreferrer" target="_blank"
                   href="https://www.linkedin.com/in/benjaminngjunhui/">
                  <img className="dim w2 mh3" src={LinkedIn} alt="LinkedIn"></img>
                </a>
              </li>
              <li>
                <a rel="noreferrer" target="_blank"
                    href="https://www.instagram.com/ushiojun/">
                  <img className="dim w2 mh3" src={Instagram} alt="Instagram"></img>
                </a>
              </li>
              <li>
                <img id="youtube" className="dim w2 mh3" src={Youtube} alt="YouTube"></img>
              </li>
            </ul>
          </div>
        </footer>
  
      </div>
    );
  }
}

export default App;
