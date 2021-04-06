import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'
// optimisation d'appel firebase 

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDtvEQJIIeRc--CEHR5RWrtpIpuY3V9FC8",
    authDomain: "chatbox-app-d6afc.firebaseapp.com",
    databaseURL: "https://chatbox-app-d6afc-default-rtdb.europe-west1.firebasedatabase.app",
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp } 

export default base