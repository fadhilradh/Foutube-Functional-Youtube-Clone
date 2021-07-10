import auth from "../../firebase";
import firebase from "firebase";
import {
    LOAD_PROFILE,
    LOGIN_FAILED,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOG_OUT,
} from "../actionTypes";

export const loginWithGoogle = () => async (dispatch) => {
    // auth with Google
    try {
        dispatch({
            type: LOGIN_REQUEST,
        });

        const googleProvider = new firebase.auth.GoogleAuthProvider();

        const response = await auth.signInWithPopup(googleProvider);

        const accessToken = response.credential.accessToken;

        const profile = {
            name: response.additionalUserInfo.profile.name,
            photo: response.additionalUserInfo.profile?.picture,
        };

        sessionStorage.setItem("ytc-access-token", accessToken);
        sessionStorage.setItem("ytc-user", JSON.stringify(profile));

        dispatch({
            type: LOGIN_SUCCESS,
            payload: accessToken,
        });

        dispatch({
            type: LOAD_PROFILE,
            payload: profile,
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type: LOGIN_FAILED,
            payload: error.message,
        });
    }
};

export const logOut = () => async (dispatch) => {
    auth.signOut();

    dispatch({
        type: LOG_OUT,
    });

    sessionStorage.removeItem("ytc-access-token");
    sessionStorage.removeItem("ytc-user");
};
