import auth from "../../firebase";
import firebase from "firebase/app";
import { LOGIN_REQUEST } from "../actionType";

export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });

    const provider = new firebase.auth.GoogleAuthProvider(); //returns provider object

    const response = await auth.signInWithPopup(provider); //returns a promise
    console.log(response);
  } catch (error) {}
};
