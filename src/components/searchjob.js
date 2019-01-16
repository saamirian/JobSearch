import React from "react";
import { Link } from  'react-router-dom';
import { connect } from "react-redux";
import  getResult from "../actioncreators/getresult"
import changeLocation from "../actioncreators/changeLocation";

class SearchForm extends React.Component {

    render() {
        
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
    

    const mapStateToProps = ({ location }) => ({
        location
        
        
      });
    
    const mapDispatchToProps = dispatch => ({
      
        handleLocationChange(event) {
          dispatch(changeLocation(event.target.value));
          
        },
      
        handleClick() {
            dispatch(getResult());
        }
        
      });
      
      export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);