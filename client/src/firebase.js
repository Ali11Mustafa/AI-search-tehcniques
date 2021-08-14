import firebase from 'firebase/app';
require('firebase/auth');

const firebaseConfig = {
	apiKey: 'AIzaSyDAWDBF5TQHMrtQ_Wq6CQ3fuQGXPqRRMzA',
	authDomain: 'ecommerace-15bcb.firebaseapp.com',
	projectId: 'ecommerace-15bcb',
	storageBucket: 'ecommerace-15bcb.appspot.com',
	messagingSenderId: '53069576424',
	appId: '1:53069576424:web:1faf76d9e80637c01a715d',
	measurementId: 'G-BXE1QJQNB8'
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
