// import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

// Register user
export const register = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

// Login user
export const login = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

// Logout user
export const logout = () => signOut(auth);

// Observe auth state changes
export const observeUser = (callback) => onAuthStateChanged(auth, callback);
