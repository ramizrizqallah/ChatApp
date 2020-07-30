import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
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
       <div className='container-fluid h-100'>
        <div className = "row justify-content-center h-100 ">
        <div className = "col-3 color">1</div>
        <div className = "col-6  shadow p-3 mb-5 rounded color">
        <div className="container">
					<h1 className="heading">Add your Image</h1>
					<div className="img-holder">
						<img src={profileImg} alt="" id="img" className="img" />
					</div>
					<input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
					<div className="label">
          <label className="image-upload" htmlFor="input">
						<i className="material-icons">add_photo_alternate</i>
						Choose your Photo
					</label>
          </div>
				</div>
        
        </div>
        <div className = "col-3 color">3</div>
       
        </div>
       </div>
        );
    }
}

export default profile;