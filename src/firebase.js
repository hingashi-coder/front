import firebase from 'firebase'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyAIEqTKEOTT-xchq1SKB22DdP_n-Y4yH4k',
  authDomain: 'cicd-288923.firebaseapp.com',
  databaseURL: 'https://cicd-288923.firebaseio.com',
  projectId: 'cicd-288923',
  storageBucket: 'cicd-288923.appspot.com',
  messagingSenderId: '1080901180798',
  appId: '1:1080901180798:web:01d006420d037c4d64a72f'
}

firebase.initializeApp(config)
firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      unsubscribe()
      resolve(user)
    }, reject)
  })
}
firebase.getToken = () => {
  return new Promise((resolve, reject) => {
    firebase.auth().currentUser.getIdToken().then(token => {
      resolve(token)
    }).catch(reject)
  })
}
firebase.logout = () => {
  return new Promise((resolve, reject) => {
    firebase.auth().signOut().then(() => {
      resolve()
    })
  })
}
firebase.signup = (mail, password) => {
  return new Promise((resolve, reject) => {
    firebase.auth().createUserWithEmailAndPassword(mail, password).then(user => {
      resolve()
    }).catch(error => {
      reject(error.message)
    })
  })
}
firebase.changePass = (newPassword) => {
  return new Promise((resolve, reject) => {
    firebase.auth().currentUser.updatePassword(newPassword).then(user => {
      resolve()
    }).catch(error => {
      reject(error.message)
    })
  })
}
firebase.changeAddress = (newAddress) => {
  return new Promise((resolve, reject) => {
    firebase.auth().currentUser.updateEmail(newAddress).then(user => {
      resolve()
    }).catch(error => {
      reject(error.message)
    })
  })
}
export default firebase
