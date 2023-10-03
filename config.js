import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyBqubzfxSFwZBr_1Lz0NMX1bURDSSYyUzw",
  authDomain: "e-library-65877.firebaseapp.com",
  projectId: "e-library-65877",
  storageBucket: "e-library-65877.appspot.com",
  messagingSenderId: "814788086980",
  appId: "1:814788086980:web:eb32befec386ec6d130d91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
