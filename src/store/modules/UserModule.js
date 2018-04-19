export default {
    namespaced: true,
    state: {
        user_name: "asdf",
        agreeNum: 10
    },
    getters: {
        // agreeNum(state){
        //     return state.agreeNum
        // }
    },
    mutations: {
        showUserName(state) {
            console.log(state.user_name)
        },
        ADDNUM(state, payload) {
            state.agreeNum += payload
        }
    },
    actions: {
        addNum({ state, commit }, payload) {
            commit('ADDNUM', payload)
            console.log(state.agreeNum)
        }
    }
}