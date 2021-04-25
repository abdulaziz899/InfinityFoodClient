import React, { useContext, useState }  from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Context } from '../../App';
import { useHistory, useLocation } from 'react-router';
import firebaseConfig from './firebase.Config'
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons';
const Login = () => {
  
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  };
  const [user,setUser]=useState({
    name:"",
    email:"",
    password:"",
    imgUrl:'',
    isSignIn:false,
    error:"",
    success:false,
  })
  const [logInUser,setLogInUser]=useContext(Context);
  const  googleProvider = new firebase.auth.GoogleAuthProvider();
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  
  const handleGoogleSignIn=()=>{
    firebase.auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
          const {displayName,email,photoURL,password,error}=result.user;
          const  googleSignInUser ={
            name:displayName,
            imgUrl:photoURL,
            email:email,
            password:password,
            error:error,
            success:true,
          }
          const newUserInfo={...user};
          newUserInfo.error="";
          newUserInfo.success=true;
          setUser(newUserInfo);
          setUser(googleSignInUser);
          setLogInUser(googleSignInUser);
          console.log(googleSignInUser);
          history.replace(from);
        }).catch((error) => {
          const newUserInfo={...user};
          newUserInfo.success=false;
          newUserInfo.error=error.message;
          setUser(newUserInfo);

  });
    
  }
    
    
    return (
        <div className="loginContainer container pt-5 mt-5">
            <div>
              <h2 >Please log in and continue</h2>
              <button   className=" btn btn-outline-success rounded-pill " onClick={handleGoogleSignIn}>
                <FontAwesomeIcon className='mr-4 ' style={{fontSize:"20px"}} icon={faGooglePlus}></FontAwesomeIcon>Continue with Google
              </button>
            </div>
        </div>
    );
};

export default Login;