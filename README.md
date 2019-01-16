# purplebricksfeengineeres

Instructions:
1-Execute npm start to run the application.
2- open http://localhost:9000 in browser



Api: 

The GitHub Jobs API (https://jobs.github.com/api)

Technologies:

Visual studio code
webpack, babel
react 
react router
redux , reduxthunk
axios


How it works

the user insert the name of the city for example newyork, with handlechange the state for location with be updated in store 
after press submit button call the action that get location state from store , add to query string and get json result from api and dispatch the array of result in store using thunk, (the submit button link to another page in router called serachresult)
 then search result page get the location and get api result from store , and map it
 
 in search result after press job detail button link to another route (selectedjob/:id)
 press this button link to selectedjob page , this page get id from url params and put in query and get the result from that selected job 
 and return it on.
 
 it also has another page called all job , it shows the listof all jobs. 
