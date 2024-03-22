import PropTypes from 'prop-types';
import { createContext, useEffect, useReducer } from 'react';
// import { useSearchParams } from 'react-router-dom';

// third-party
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// project imports
import Loader from 'ui-component/Loader';

import { LOGIN, LOGOUT } from 'store/actions';
import accountReducer from 'store/accountReducer';
// import axios from 'axios';

// firebase initialize
if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
        authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
        storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
        measurementId: import.meta.env.VITE_APP_FIREBASE_MEASUREMENT_ID
    });
}

// const
const initialState = {
    isLoggedIn: false,
    isInitialized: false,
    user: null
};

// ==============================|| FIREBASE CONTEXT & PROVIDER ||============================== //

const FirebaseContext = createContext(null);

export const FirebaseProvider = ({ children }) => {
    // const [searchParams] = useSearchParams();
    const [state, dispatch] = useReducer(accountReducer, initialState);

    useEffect(
        () =>
            firebase.auth().onIdTokenChanged((user) => {
                if (user) {
                    dispatch({
                        type: LOGIN,
                        payload: {
                            isLoggedIn: true,
                            user: {
                                id: user.uid,
                                email: user.email,
                                name: user.displayName || 'John Doe'
                            }
                        }
                    });
                } else {
                    dispatch({ type: LOGOUT });
                }
            }),
        []
    );

    const firebaseEmailPasswordSignIn = async (email, password) => {
        const res = await firebase.auth().signInWithEmailAndPassword(email, password);
        // const token = await res.user.getIdToken();
        // localStorage.setItem('idToken', token);
        return res;
    };

    const firebaseGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(provider);
    };

    const firebaseRegister = async (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);

    const logout = () => {
        // localStorage.removeItem('idToken');
        return firebase.auth().signOut();
    };

    const resetPassword = async (email) => {
        await firebase.auth().sendPasswordResetEmail(email);
    };

    const updateProfile = () => {};
    if (state.isInitialized !== undefined && !state.isInitialized) {
        return <Loader />;
    }

    return (
        <FirebaseContext.Provider
            value={{
                ...state,
                firebaseRegister,
                firebaseEmailPasswordSignIn,
                login: () => {},
                firebaseGoogleSignIn,
                logout,
                resetPassword,
                updateProfile,
                dispatch
            }}
        >
            {children}
        </FirebaseContext.Provider>
    );
};

FirebaseProvider.propTypes = {
    children: PropTypes.node
};

export default FirebaseContext;
