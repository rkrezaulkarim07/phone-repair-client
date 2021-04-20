import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useHistory, useLocation } from 'react-router';
import firebaseConfig from '././firebase.config';
import { UserContext } from '../../../App';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
      isSignedIn: false,
      name: '',
      email: '',
      password: '',
      photo: ''
    })
  
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/"}};
  
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = () => {
      firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          const { displayName, photoURL, email } = result.user;
          const signedInUser = {
            isSignedIn: true,
            name: displayName,
            email: email,
            photoURL: photoURL
          }
          setUser(signedInUser);
          setLoggedInUser(signedInUser);
          history.replace(from)
  
        }).catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
          console.log(errorCode, errorMessage, email, credential);
        });
  
    }
  
    const handleSignedOut = () => {
      firebase.auth().signOut()
        .then(() => {
          const signedOutUser = {
            isSignedIn: false,
            name: '',
            photo: '',
            email: '',
            error: '',
            success: false
          }
          setUser(signedOutUser);
        })
        .catch((error) => {
          console.log('error message', error)
        });
  
    }
  
    const updateUserName = name => {
      const user = firebase.auth().currentUser;
  
      user.updateProfile({
        displayName: name
      }).then(function () {
        console.log('user name updated successfully')
      }).catch(function (error) {
        console.log(error)
      });
    }

  return (
    <div className="login-page container">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6 shadow p-5" style={{ height: "400px" }}>
          <div className="from-group text-center" style={{marginTop: "80px"}}>
              <h1>Login</h1>
            <button className="btn btn-success mt-3" onClick={handleSignIn}><FontAwesomeIcon icon={faGoogle}/> Continue With Google</button>
          </div>
        </div>
        <div className="col-md-6 d-none d-md-block align-self-center">
          <img className="img-fluid" src="https://i.ibb.co/KDj1HDB/undraw-authentication-fsn5.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;