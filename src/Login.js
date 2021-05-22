import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from './firebase'
import "./Login.css"
import {actionTypes} from "./reducer"
import { useStateValue } from './StateProvider';


function Login() {

    const [state, dispatch] = useStateValue();

    const signIn = () => {
        //sign in
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error) => {
            alert(error.message());
        })
    }

    return (
        
        <div className="login">

            <div className="login_logo">

                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/800px-Facebook_f_logo_%282019%29.svg.png"
                />

                <img
                    src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
                />

            </div>

            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
            
        </div>

        
    )
}

export default Login 
