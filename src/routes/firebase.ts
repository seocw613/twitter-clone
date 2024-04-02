import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPCuLnxymVQGsLFxDcVAUsvRqwp76asjU",
  authDomain: "twitter-111e1.firebaseapp.com",
  projectId: "twitter-111e1",
  storageBucket: "twitter-111e1.appspot.com",
  messagingSenderId: "340236810356",
  appId: "1:340236810356:web:b676d69eec4a45efe57921"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);