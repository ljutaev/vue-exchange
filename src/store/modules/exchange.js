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
        // getExchanges(context) {
        //     db.collection('exchanges')
        //         .doc('93sgHVKffhkJm26lcZxv')
        //         .get()
        //         .then(snapshot => {
        //             debugger
        //             const exchange = snapshot.data()
        //             return exchange
        //         })
        //     // context.commit('setExchanges', exchanges)
        // },
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