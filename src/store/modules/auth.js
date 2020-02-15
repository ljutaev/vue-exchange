import firebase from 'firebase/app'
import 'firebase/auth'
import { db } from '@/db'
import Vue from 'vue'

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
          debugger
          return firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => Promise.reject(error.message))
        },
        signOut({commit}) {
          return firebase.auth().signOut()
            .then(_ => {
              commit('setAuthUser', null)
              console.log(_)
            })
        },
        createUserProfile(_, {uid, userProfile}) {
          return db
            .collection('profiles')
            .doc(uid)
            .set(userProfile)
        },
        storeAuthUser({commit}, user) {
          return db
            .collection('profiles')
            .doc(user.uid)
            .get()
            .then(snapshot => {
              const profile = snapshot.data()
              user.profile = profile
              commit('setAuthUser', user)
              return profile
            })
        },
        updateProfile({commit}, profile) {
          return db
            .collection('profiles')
            .doc(profile.user)
            .update(profile)
            .then(_ => {
              // commit changes
              commit('setUserProfile', profile)
              console.log(_)

              return true
            })
        }
    },
    mutations: {
      setAuthUser(state, user) {
        state.user = user
      },
      setUserProfile(state, profile) {
        Vue.set(state.user, 'profile', profile)
      }
    }
}