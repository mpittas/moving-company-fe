import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "@fontsource/poppins";

import logo from '../images/logo.svg';

const Header = ({ siteTitle }) => (
  <header className="mc-header">
    <div className="mc-header__left">
      <div className="mc-header__logo">
        <img src={logo} alt="Header logo"/>
      </div>

      <div className="mc-header__nav">
        <nav>
          <ul>
            <li className="active">
              <a href="#">
                Moving
              </a>
            </li>

            <li>
              <a href="#">
                Services
              </a>
            </li>

            <li>
              <a href="#">
                Eco Mission
              </a>
            </li>

            <li>
              <a href="#">
                Moving Tips
              </a>
            </li>

            <li>
              <a href="#">
                Reviews
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div className="mc-header__actions">
      <a href="#" className="mc-btn">
        Book an Hour
      </a>

      <a href="#" className="mc-btn mc-btn-dark">
        Pricing Plans
      </a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
