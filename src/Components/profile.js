import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
class profile extends Component{
    
    render(){
        return(
       <div className='container-fluid h-100'>
        <div className = "row justify-content-center h-100 ">
        <div className = "col-3 color">1</div>
        <div className = "col-6  shadow p-3 mb-5 rounded color">
        
        
        </div>
        <div className = "col-3 color">3</div>
       
        </div>
       </div>
        );
    }
}

export default profile;