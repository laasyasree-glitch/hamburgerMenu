import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <div className="navbar">
    <div>
      <Link to="/">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
        />
      </Link>
    </div>
    <div className="card">
      <Popup
        modal
        overlayStyle
        className="popup-content"
        trigger={
          <button type="button">
            <GiHamburgerMenu className="hamburger-icon" />
          </button>
        }
      >
        {close => (
          <ul className="nav-menu">
            <li className="separate">
              <button type="button" className="cross" onClick={() => close()}>
                <IoMdClose />
              </button>
            </li>
            <li className="nav-menu-item">
              <Link to="/" className="nav-link" onClick={() => close()}>
                <AiFillHome />
                Home
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/about" className="nav-link" onClick={() => close()}>
                <BsInfoCircleFill />
                About
              </Link>
            </li>
          </ul>
        )}
      </Popup>
    </div>
  </div>
)

export default withRouter(Header)
