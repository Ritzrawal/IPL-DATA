import React, { Component } from 'react';

import './App.css';
//import List from './List';
class App extends Component {
  
  constructor() {
    super();
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    return fetch(
      'http://localhost:3001/api/matches')
      .then((response) => response.json())
      .then((responseJson) => {
       console.log(responseJson);
        this.setState({
          data:responseJson
      
        })
      
      })
    }
 
    render() {
     return (
  <div>
       <div style={{fontFamily:'Helvetica',
                   fontSize: '2em',
                   color:'Red',
                   paddingLeft:'90px'
       }}>IPL Match</div>
         {
           this.state.data.map( (value,key)=>
           
         
             <table>
               <thead></thead>
                 <tbody>
              <tr> 
            <td>{value.id}</td>
            <td>{value.date}</td>
             <td>{value.city}</td>
             
  </tr>
  </tbody>
  </table>
           )
         }
       </div> 
     )
   }
 }
 export default App;