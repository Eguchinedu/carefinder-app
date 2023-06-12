import * as React from "react";
import './SearchForm.css'


const SearchForm = () =>{


  return (
    <div className="form-section">
      <h3>Find location</h3>

      <form>
        <div className="input-row">
          <div className="inputGroup">
            <label htmlFor="city">City</label>
            <select id="city" name="city">
              <option value=""></option>
              <option value="volvo">Lagos</option>
              <option value="saab">Abuja</option>
              <option value="fiat">Kaduna</option>
              <option value="audi">Imo</option>
            </select>
          </div>
          <div className="inputGroup">
            <label htmlFor="state">State</label>
            <select id="state" name="state">
              <option value=""></option>
              <option value="volvo">Volvo</option>
              <option value="saab">saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
        <div className="search-button">
          <button className="search-btn">Find location</button>
        </div>
      </form>
    </div>
  );
}
export default SearchForm;