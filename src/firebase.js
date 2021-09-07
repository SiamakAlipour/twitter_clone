import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
	apiKey: 'AIzaSyBqyhQdHznnviHGWgp0mLQR4BzPfNxENcQ',

	authDomain: 'twitter-clone-887ed.firebaseapp.com',

	projectId: 'twitter-clone-887ed',

	storageBucket: 'twitter-clone-887ed.appspot.com',

	messagingSenderId: '119740679691',

	appId: '1:119740679691:web:e70e6306cd239a3180690e',

	measurementId: 'G-WF42B02MMC',
}

// Initialize Firebase

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export default db
