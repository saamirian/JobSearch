import axios from "axios";


export default function getResult() {
    return function(dispatch, getState) {
      const { location } = getState();
      return axios.get('https://jobs.github.com/positions.json?location=' + location
      ).then(response => {
        
        if ( response && response.data.length > 0) {
         
        console.log(response.data[0].company);
        dispatch(loadResult(response.data));}
        else { dispatch(loadResult([])); }
        
      });
    };
  }

  export function loadResult(response) {
    return{
        type:"LOAD_RESULT",
        payload: response};
      }