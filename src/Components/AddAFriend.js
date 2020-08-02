import React from 'react'
import '../style/mainPage.css'

// This function renders an Add a Friend button to add a 
//new friend only when the list of friends in DB is empty
export default function AddAFriend() {
    return (
        <div className="addFriend" style={{textAlign:'center'}}>
            <button id="add-a-friend">Add a friend</button>
        </div>
    )
}
