import React from 'react'
import JobsList from './jobs-list'



export default function JobsArray(props) {

    
    return <div >
    {
        
        props.jobs.map( job =>
            <JobsList job={job} key={job.id}/>)
    }
</div>
}