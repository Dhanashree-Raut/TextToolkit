// import React from 'react'
// import PropTypes from 'prop-types';

export default function Navbar( props ) {



  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <a className="navbar-brand" href="/">{props.navTitle}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/">{props.homeTitle} <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">{props.aboutTitle}</a>
                </li>
            </ul>
        </div>
        <div className="custom-control custom-switch">
            <input onChange={props.toggleMode}  type="checkbox" className="custom-control-input" id="darkMode"/>
            <label className={`custom-control-label text-${props.invertMode}`} htmlFor="darkMode">Enable dark Moode</label>
        </div>
        
    </nav>
  )
}

// Navbar.propTypes = {
//   navTitle: PropTypes.string.isRequired,
//   aboutTitle: PropTypes.string.isRequired,
//   homeTitle: PropTypes.string.isRequired,
// };

// Navbar.defaultProps = {
//   navTitle: "NavTitle",
//   aboutTitle: "AboutTitle",
//   homeTitle: "HomeTitle",
// };
