import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div>
    <Header />
    <div className="not-found-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="Not Found"
        className="not-found-img"
      />
      <h1 className="not-found-heading">Lost Your Way?</h1>
      <p className="not-found-para">
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  </div>
)

export default NotFound
