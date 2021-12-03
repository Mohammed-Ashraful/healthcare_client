import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  sendEmailVerification,
  updateProfile
} from 'firebase/auth';

import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/Firebase.init';
initializeAuthentication();

const useFirebase = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState({});
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [isLogIn, setIsLogIn] = useState(false)

  // sign in and register a user using google 
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)

  }
  // get name email password and  toggle
  const handleName = (e) => {
    setName(e.target.value);
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  const toggleLogin = (e) => {
    setIsLogIn(e.target.checked);
  }
  //

  //Register and login method using email and password
  const signInWithEmail = (e) => {
    e.preventDefault()

    isLogIn ? logInUser(email, password) : newUser(email, password);
  }


  // Register a new user 
  const newUser = (email, password) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        setUser(result.user);
        verify();
        setError('')
        setUserName()
      }).catch(error => {
        setError(error.message)
      })
      .finally(() => setLoading(false))
  }
  //log in user with email and password 
  const logInUser = (email, password) => {
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        setUser(result.user)
        setError('')
      }).catch(error => {
        setError(error.message)
      })
      .finally(() => setLoading(false))
  }

  //update profile in Email password change

  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name
    }).then(result => { })
  }
  // send verification on Register
  const verify = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {

      })
  }

  // Log out user in web page
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .finally(() => {

      })
  }
  // Observe real time state change in Web page

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user)
      }
      else {
        setUser('')
      }
      setLoading(false)
    })
  }, [])
  return {
    signInWithGoogle, signInWithEmail, handleEmail, handleName, handlePassword, user, logOut, loading, setLoading, error, logInUser, newUser, toggleLogin, isLogIn, name
  }
}

export default useFirebase;