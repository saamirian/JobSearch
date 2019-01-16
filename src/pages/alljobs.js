import React from "react";
import axios from 'axios';
import JobsArray from '../components/jobs-array-map';

class AllJobs extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          alljob: [],
          
        }
      }

      componentDidMount() {
        
      axios.get("https://jobs.github.com/positions.json")
          .then(response => {
              console.log(response.data);
           this.setState({
               
              alljob: response.data
              
              
            })
          })
      }
    render() {
       
        return(
            <div><div><JobsArray jobs={this.state.alljob} /></div>  </div>
        );
    }
}
export default AllJobs;