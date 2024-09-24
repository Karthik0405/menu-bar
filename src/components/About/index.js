// Write your code here
import Header from '../Header'
import './index.css'

const About = () => (
  <div>
    <Header />
    <div className="about-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
        className="lg-image"
      />
    </div>
    <img
      src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
      alt="about"
      className="sm-image"
    />
  </div>
)

export default About
