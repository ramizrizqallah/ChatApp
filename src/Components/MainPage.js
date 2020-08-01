import React, { Component } from 'react'
import '../style/mainPage.css'
import ContactsPanel from './ContactsPanel'


export class MainPage extends Component {
    constructor(props) {
        super(props)
        this.state = {


        }
    }
    render() {
        return (
            <div className="container">
                <div className="left-panel">

                    {/* Add navBar Below this line ONLY and put its className ="navbar" */}
                    


                    {/* Add Contacts Panel Below this line ONLY */}
                    <ContactsPanel />


                </div>
                <div className="right-panel">
                    {/* Add Welcome Panel Below this line ONLY */}
                    

                </div>

            </div>
        )
    }
}

export default MainPage
