// Write your code here
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

const Header = () => (
  <div className="header-container">
    <Link to="/" className="lisk-style">
      <button className="header-button" type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="header-image"
        />
      </button>
    </Link>
    <Popup
      modal
      trigger={
        <button
          className="header-button"
          type="button"
          data-testid="hamburgerIconButton"
        >
          <GiHamburgerMenu className="header-icon" />
        </button>
      }
      className="popup-content"
    >
      {close => (
        <>
          <button
            type="button"
            data-testid="closeButton"
            className="close-button"
            onClick={() => close()}
          >
            <IoMdClose className="close-icon" />
          </button>
          <ul className="list-container">
            <Link to="/" className="lisk-style" onClick={() => close()}>
              <li className="list-item">
                <AiFillHome className="item-icon" />
                <h1 className="item-heading">Home</h1>
              </li>
            </Link>
            <Link to="/about" className="lisk-style" onClick={() => close()}>
              <li className="list-item">
                <BsInfoCircleFill className="item-icon" />
                <h1 className="item-heading">About</h1>
              </li>
            </Link>
          </ul>
        </>
      )}
    </Popup>
  </div>
)

export default Header
