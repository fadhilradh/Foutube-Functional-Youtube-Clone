import auth from "../../firebase";
import firebase from "firebase";
import { LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionTypes";

export const loginWithGoogle = async (dispatch) => {
  // auth with Google

  dispatch({
    type: LOGIN_REQUEST,
  });

  const googleProvider = new firebase.auth.GoogleAuthProvider();

  const response = await auth.signInWithPopup(googleProvider);

  console.log(response);

  const accessToken = response.credential.accessToken;

  const profile = {
    name: response.additionalUserInfo.profile.displayName,
    photo: response.additionalUserInfo.profile?.photoURL,
  };

  dispatch({
    type: LOGIN_SUCCESS,
    payload: accessToken,
  });

  try {
  } catch (error) {
    console.log(error);
  }
};
