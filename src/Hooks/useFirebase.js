import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword,sendEmailVerification } from 'firebase/auth'
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import initializeAuthentication from '../Firebase/Firebase.init';
initializeAuthentication();
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();
const useFirebase = () => {
  const history = useHistory();
  const [user, setUser] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [loading, setLoading] = useState(true)
  
  const signInWithGoogle = () => {
   return signInWithPopup(auth, googleProvider)
      
  }
  const handleName = (e) => {
    console.log(e.target.value);
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const signInWithEmail = (e) => {
    e.preventDefault()
    
    !user?.email ? newUser() : logInUser();

  }

  const newUser = () => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        setUser(result.user);
        verify();
        history.push('./')
      }).finally(() => setLoading(false))
  }

  const logInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        setUser(result.user)
        history.push('./')
      }).finally(() => setLoading(false))
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
    signInWithGoogle, signInWithEmail, handleEmail, handleName, handlePassword, user, logOut,loading,setLoading
  }
}

export default useFirebase;