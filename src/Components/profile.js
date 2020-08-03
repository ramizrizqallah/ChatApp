import React, { Component } from 'react';
import '../style/profile.css'


class profile extends Component{
    state={
        profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
      }
      imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () =>{
          if(reader.readyState === 2){
            this.setState({profileImg: reader.result})
          }
        }
        reader.readAsDataURL(e.target.files[0])
      };
    render(){
        const { profileImg} = this.state
        return(
        <div className='profile-container'>
        
					<div className="img-holder">
						<img src={profileImg} alt="" id="img" className="img" />
					<input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
				</div>

					<div className="label">
          <label className="image-upload" htmlFor="input">
						<i id ="i">change Picture</i>
					</label>
          </div> 

        <div className="name">
              Khader Ballout
        </div>
      <div class="form-group">
    <label >bio</label>
    <textarea className = "text-area"rows="5" ></textarea>
      </div>

     <div >
       <button type="button" class = "button button1">Save</button>
     </div>
        
       
        </div>
    
        );
    }
}

export default profile;