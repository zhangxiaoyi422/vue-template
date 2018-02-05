export default{
    state:{
        user_name:"asdf",
        agreeNum:10
    },
    mutations:{
        showUserName(state){
            console.log(state.user_name)
        },
        ADDNUM(state){
            state.agreeNum += 1
        }
    },
    actions:{
        addNum({state,commit},payload){
            commit('ADDNUM')
        }
    }
}