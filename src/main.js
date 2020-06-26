import { createApp } from 'vue'
import App from './App.vue'
import * as firebase from 'firebase/app'
import 'firebase/auth'

// router
import router from './router'

const firebaseConfig = {
    apiKey: 'AIzaSyDs_SwAN5DQm-MOKWrbIYL1UIdgScg3M7k',
    authDomain: 'fillgoods-dev.firebaseapp.com',
    databaseURL: 'https://fillgoods-dev.firebaseio.com',
    projectId: 'fillgoods-dev',
    storageBucket: 'fillgoods-dev.appspot.com',
    messagingSenderId: '1023151727444'
}

firebase.initializeApp(firebaseConfig)

const app = createApp(App)
    
app.use(router)
// Mouted app
app.mount('#app')


