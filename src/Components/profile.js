import React, { Component } from 'react';
<<<<<<< HEAD
=======
//import 'bootstrap/dist/css/bootstrap.css'
>>>>>>> 1fce831c90b2e9a722322cfafb484dd86a80d28b
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
        <div className='container'>
        
					<div className="img-holder">
						<img src={profileImg} alt="" id="img" className="img" />
					<input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
				</div>

					<div className="label">
          <label className="image-upload" htmlFor="input">
<<<<<<< HEAD
						<i id ="i">change Picture</i>
=======
						<i className="material-icons" id="id-i">change Picture</i>
>>>>>>> 1fce831c90b2e9a722322cfafb484dd86a80d28b
					</label>
          </div> 

        <div className="name">
        <h3 className="name">Khader Ballout</h3>
        </div>
      <div class="form-group">
    <label >bio</label>
    <textarea rows="5" ></textarea>
      </div>

     <div className="">
       <button type="button" class = "button button1">Save</button>
     </div>
        
       
        </div>
    
        );
    }
}

export default profile;