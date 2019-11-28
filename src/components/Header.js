import React from 'react'
import PropTypes from 'prop-types';
import img from "../images/TsaR.png";


const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="content">
            <div className="inner">
                <img src={img} width="100" height="100" />
                <h1>TALEB RIADH</h1>
                <p>Web developer full stack. </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="#" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="#" onClick={() => {props.onOpenArticle('work')}}>Works</a></li>
                <li><a href="#" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="#" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
