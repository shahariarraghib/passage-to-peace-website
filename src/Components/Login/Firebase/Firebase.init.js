import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.confige";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig)
}
export default initializeAuthentication;