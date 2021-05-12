import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers/rootReducer'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import firebaseConfig from '../../config/firebaseConfig'

export const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(firebaseConfig,{useFirestoreForProfile:true, userProfile:"users", attachAuthIsReady:true}), // redux binding for firebase
    reduxFirestore(firebaseConfig) // redux bindings for firestore
  )
)

export default store;