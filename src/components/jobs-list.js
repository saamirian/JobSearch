import React from 'react'
import { Link } from  'react-router-dom';


export default class JobSList extends React.Component 
 {
    
    render ()
    {
    return (
        <div >
            <h4>{ this.props.job.title }</h4>
            <div>Location: {this.props.job.location}</div>
            <div >
                    <h5>company :{this.props.job.company}</h5>
                    <div ><img 
                    src={this.props.job.company_logo}/>
                    </div>
                    <div><Link to={`/selectedjob/${this.props.job.id}`}><button >
                     Job deatail</button></Link>
                    </div>
            </div>
        </div>
         );
    }
}