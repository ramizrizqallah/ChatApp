import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.css'
import '../style/otherProfile.css'
class otherProfile extends Component{
    state={
        profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
      }
    render(){
        const { profileImg} = this.state
        return(
        <div className='profile-container'>
      
        
					<div className="img-holder">
						<img src={profileImg} alt="" id="img" className="img" />
				</div>

        
        <div className="name">
        Khader Ballout
        </div>

        <div>
       <button class = "button button1">Add Khader ballout </button>
     </div>
        
      <div class="form-group">
    <label >bio</label>
    <textarea className= "text-area"  id="exampleFormControlTextarea1" rows="5" ></textarea>
      </div>


        </div>
        );
    }
}

export default otherProfile;