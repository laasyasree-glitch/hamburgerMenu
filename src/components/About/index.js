import Header from '../Header'

import './index.css'

const About = () => (
  <div className="home-container">
    <Header />
    <div className="large-size-display">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
      />
    </div>
    <div className="small-size-display">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
      />
    </div>
  </div>
)

export default About
