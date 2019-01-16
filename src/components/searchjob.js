import React from "react";

import { Link } from  'react-router-dom';

export default class SearchForm extends React.Component {

    render() {
        console.log(this.props.loadResult);
        return (
         
              <div >
              <div>
                <form onSubmit={this.props.handleFormSubmit}>
                  <label >
                    Location
                    <input
                      id="location"
                      onChange={this.props.handleLocationChange}
                      value={this.props.location}
                      placeholder="Location"
                    />
                  </label>
                  
                </form>
                </div>
                <div><Link to={`/search`}><button type="submit" onClick={this.props.handleClick}>submit</button></Link></div>
                
                
                
                
              </div>
              
       );
      }
    }
    