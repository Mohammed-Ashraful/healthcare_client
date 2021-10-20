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
} from 'firebase/auth'

import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import initializeAuthentication from '../Firebase/Firebase.init';
initializeAuthentication();
const useFirebase = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const history = useHistory();
  const [user, setUser] = useState({});
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [isLogIn,setIsLogIn]=useState(false)

  const signInWithGoogle = () => {
   return signInWithPopup(auth, googleProvider)
      
  }
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

  const signInWithEmail = (e) => {
    e.preventDefault()

    isLogIn ? logInUser(email, password) : newUser(email, password);
    
  }

  const newUser = (email, password) => {
    console.log(email,password);
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        setUser(result.user);
        // verify();
        setError('')
        setUserName()
      }).catch(error => {
        setError(error.message)
        console.log(error);
      })
      .finally(() => setLoading(false))
  }

  const logInUser = (email,password) => {
    console.log(password,email);
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        setUser(result.user)
        setError('')
        history.push('/home')
      }).catch(error => {
        setError(error.message)
        console.log(error);
      })
      .finally(() => setLoading(false))
  }
  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name 
    }).then(result=>{})
}
  const verify = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
      
    })
  }
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .finally(() => {
      
    })
  }
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
    signInWithGoogle, signInWithEmail, handleEmail, handleName, handlePassword, user, logOut,loading,setLoading,error,logInUser,newUser,toggleLogin,isLogIn,name
  }
}

export default useFirebase;