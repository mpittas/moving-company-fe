import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import '../styles/styles.scss'

import { Container, Row, Col } from "react-bootstrap";

import heroIcon from '../images/moving-truck.svg';
import heroImage from '../images/hero-image.jpg';
import circleElements from '../images/circle-elements.png';

// import Seo from "../components/seo"  

const IndexPage = () => (
  <Layout>
    <div className="hero">
      <Container>
        <Row>
          <Col md={12}>
          <div className="hero__inner">
          <div className="hero__left">
            <img src={heroIcon} alt="Moving truck in motion"/>
            <h2>Move your home effortlessly with our help</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div>
              <a href="#" className="mc-btn">Book your Hour</a>
            </div>
          </div>
          
          <div className="hero__right">
            <img src={circleElements} alt="Circle BG elements"/>
            <div className="hero__right-inner">
              <img src={heroImage} alt="Group photo"/>
            </div>
          </div>
        </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Layout>
)

export default IndexPage
