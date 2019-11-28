import PropTypes from 'prop-types'
import { withPrefix } from 'gatsby'

import React from 'react'

import axios from 'axios'
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  } 
   style ={

  }
  componentDidMount() {
    axios
    .get(`https://api.github.com/users/TalebRiadh/repos`)
    .then(res =>{
      this.setState({
        data: res.data
      })
    })  
  }
 

  render() {
    const  hits  = this.state.data;
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>

          <p>
          self-learning software and web technologies through research & development, i'm not the best at academic, just a curious boy who admire what are happening in web and technologies that relationed with    
          </p>

          <ul className="icons">
            <li>
            <a
              href={withPrefix('/CV-ENG.pdf')}
              className="icon fa-file-pdf-o"
              target="_blank">
                    <span className="label">CV</span>
                </a>
            </li>
          </ul>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Works  <a
                href="https://github.com/TalebRiadh"
                className="icon fa-github">
                <span className="label">GitHub</span>
              </a></h2>

          <h3>Repositories</h3>

          <ul>
        {hits.map((hit,index) =>
          <li key={index}>
            <a href={hit.html_url}>{hit.name}</a> - <small>{hit.language}</small>
          </li>
        )}
      </ul>
      <h3>Published</h3>
        <ul>
          <li>
            <a href="https://red-prop.com">Red-Prop</a>-<small>Symfony</small>
          </li>
          <li>
            <a href="https://tsar-resort.netlify.com">TsaR-resort(Clone)</a>-<small>Reactjs</small>
          </li>
      </ul>
      
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>

          <h3>Future Ventures (Teach myself in 2019-2020)
          </h3>
        <ul>
        <li>
            React Native for Mobile application
          </li>
          <li>
            Data Visualization with D3.JS
          </li>
          <li>
          Scalable distributed systems (microservices)
          </li>
          <li>
            Machine learning with Tenserflow.js
          </li>
          <li>
            Learn graphql
          </li>
          <li>
            Typescript
          </li>

          
      </ul>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <h4>E-mail: talebriadhdz@gmail.com</h4>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/TsaRiadh"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/TalebRiadh"
                className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/taleb.riadh/" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
