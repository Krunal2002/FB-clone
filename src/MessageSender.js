import { Avatar } from '@material-ui/core'
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons';
import React, {useState} from 'react'
import "./MessageSender.css"
import { useStateValue } from './StateProvider';
import db from "./firebase"
import firebase from "firebase"

function MessageSender() {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput]= useState("");
    const [imageUrl, setImageUrl]= useState("");

    const handleSubmit = e=> {
        e.preventDefault();

        //Database
        db.collection("Posts").add({
            image: imageUrl,
            message: input,
            profilePic: user.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            username: user.displayName,
            
        });


        setInput("");
        setImageUrl("");
    }


    return (
        <div className="messageSender">
            <div className="messageSender__top">
                
                <Avatar src={user.photoURL}/>
                
                <form>
                    <input
                     value={input}
                     onChange = {(e) => setInput(e.target.value)}
                     className="messageSender__input" placeholder={"What's on your mind?"}
                    />
                    
                    <input
                     value={imageUrl}
                     onChange = {(e) => setImageUrl(e.target.value)}
                     placeholder="Image URL (Optional)"/>
               
                    <button onClick={handleSubmit} type="submit" >
                        Hidden Submit
                    </button>
               
                </form>
            </div>

            <div className="messageSender_bottom">
                <div className="messageSender__option">
                    <Videocam style={ {color: "red"} } />
                    <h3>Live Video</h3>
                </div>

                <div className="messageSender__option">
                    <PhotoLibrary style={ {color: "green"} } />
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageSender__option">
                    <InsertEmoticon style={ {color: "yellow"} } />
                    <h3>Feeling/Avtivity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender 
