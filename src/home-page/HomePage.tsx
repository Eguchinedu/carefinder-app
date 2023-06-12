import React from 'react'
import { Container } from 'react-bootstrap';
import heroImg from "../images/Hero-img.png";
import "./HomePage.css";
import SearchForm from './search-form/SearchForm';


const HomePage = () => {
  return (
    <Container>
      <div className="hero-row">
        <div className="col">
          <h1>
            <span className="col-span">
            We care
            </span>
            <br /> about your health
          </h1>
          <p>
            lorem ispodum lorem ispodum lorem ispodum lorem ispodum lorem
            ispodum lorem ispodum lorem ispodum lorem ispodum lorem ispodum
            lorem ispodum lorem ispodum
          </p>
        </div>
        <div className="col col-img">
          <img className="hero-img" src={heroImg} alt="heroimg" />
        </div>
      </div>
      <div className="form-row">
        <SearchForm/>
      </div>
    </Container>
  );
}

export default HomePage