import React from "react";
import axios from 'axios'

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
            <div>all job  </div>
        );
    }
}
export default AllJobs;