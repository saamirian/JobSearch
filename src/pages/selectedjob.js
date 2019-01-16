import React from "react";
import { NavLink } from 'react-router-dom'
import axios from 'axios'


 class SelectedJob extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          job: {},
          
        }
      }

      componentDidMount() {
        
        axios.get("https://jobs.github.com//positions/" + this.props.match.params.id + ".json" )
          .then(response => {
           this.setState({
              job: response.data
              
              
            })
          })
      }
    render() {
       
        return(
          <div ><NavLink to='/'>Search Jobs</NavLink>
            <div >
          
              <div>{this.state.job.title}</div>
              <div>{this.state.job.location}</div>
              <div>{this.state.job.type}</div>
            </div>
            </div>
        );
    }
}
export default SelectedJob;