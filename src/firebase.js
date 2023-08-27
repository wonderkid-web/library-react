import {initializeApp} from "firebase/app"
import { getAuth } from "firebase/auth"
import {getStorage} from "firebase/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//   apiKey: "AIzaSyDbRkkWBnniXSBWzd6y2zKmcNbivUs6tSw",
//   authDomain: "library-fbf63.firebaseapp.com",
//   databaseURL: "https://library-fbf63-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "library-fbf63",
//   storageBucket: "library-fbf63.appspot.com",
//   messagingSenderId: "1045757526984",
//   appId: "1:1045757526984:web:29d77d9a03fcf4c8a3b6fd",
//   measurementId: "G-PNEH7740KW"
// };

const firebaseConfig = {
  apiKey: "AIzaSyAs7IIPXd22TRC3TjU0tnbYQhTDxEhVDGc",
  authDomain: "library-react-35bcb.firebaseapp.com",
  projectId: "library-react-35bcb",
  storageBucket: "library-react-35bcb.appspot.com",
  messagingSenderId: "925706528850",
  appId: "1:925706528850:web:ca3250ca70503055f2978b",
  measurementId: "G-2GH9VBXPMX"
};


const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const storage = getStorage(app)

export default app