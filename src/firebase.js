
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyD0GV6VmX-57E742luiCDlBo_BdJO9XbzA",
  authDomain: "irrigation-system-2ce66.firebaseapp.com",
  databaseURL: "https://irrigation-system-2ce66-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "irrigation-system-2ce66",
  storageBucket: "irrigation-system-2ce66.appspot.com",
  messagingSenderId: "154513824502",
  appId: "1:154513824502:web:9a4e792b6a4c087267ead7"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
export default database