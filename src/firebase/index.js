import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'

/* var firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE_APP_MESUREMENT_ID
} */

var firebaseConfig = {
  apiKey: 'AIzaSyCXlP3k7ubBPa4rcXzw_TRUUF3xnXKDrds',
  authDomain: 'livraria-site.firebaseapp.com',
  projectId: 'livraria-site',
  storageBucket: 'livraria-site.appspot.com',
  messagingSenderId: '712921430846',
  appId: '1:712921430846:web:3bbd97fef0e58e51a38a6f',
  measurementId: 'G-KYKDFQLDRH'
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)

export default function install (Vue) {
  Object.defineProperty(Vue.prototype, '$firebase', {
    get () {
      return firebaseApp
    }
  })
}
