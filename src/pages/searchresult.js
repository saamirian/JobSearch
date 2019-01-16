
import React from "react";
import { connect } from "react-redux";
import JobsArray from '../components/jobs-array-map'
import { loadResult } from  "../actioncreators/getresult"

class Search extends React.Component {
    render (){
        if (this.props.loadResult.length > 0) {
            return (
       
            <div className="search-params">
            <div><h1>Job search result for {this.props.location}</h1></div>
             
              <div><JobsArray jobs={this.props.loadResult} /></div>
            </div>
     );
    }
  
    
      return <div>There is no  job opportunity in {this.props.location}</div>
    
    }
  }
  const mapStateToProps = ({ location , loadResult }) => ({
    location,
    loadResult
    
  });
  
  
    
   
    export default connect(mapStateToProps, loadResult)(Search);