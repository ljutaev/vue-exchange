import firebase from 'firebase/app'
import 'firebase/auth'
import { db } from '@/db'
// import Vue from 'vue'

export default {
    namespaced: true,
    state: {
      user: null
    },
    getters: {
      isAuthenticated(state) {
        return !!state.user
      }
    },
    actions: {
        signUp(context, {email, password}) {
          return firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(({user}) => {
                // TODO: Create profile collection
                return user
              })
              .catch(err => {
                const message = err.message
                return Promise.reject(message)
              });
        },
        signIn(_, {email, password}) {
          return firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => Promise.reject(error.message))
        },
        createUserProfile(_, {uid, userProfile}) {
          return db
            .collection('profiles')
            .doc(uid)
            .set(userProfile)
        }
    },
    mutations: {
      setAuthUser(state, user) {
        state.user = user
      }
    }
}