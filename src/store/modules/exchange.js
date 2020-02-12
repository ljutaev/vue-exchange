import { db } from '@/db'
import { firestoreAction } from 'vuexfire'

export default {
    namespaced: true,
    state() {
        return {
            items: []
        }
    },
    actions: {
        bindExchanges: firestoreAction(({bindFirestoreRef}) => {
            return bindFirestoreRef('items', db.collection('exchanges'))
        }),
    },
    mutations: {
        setExchanges(state, exchanges) {
            state.items = exchanges
        }
    }
}