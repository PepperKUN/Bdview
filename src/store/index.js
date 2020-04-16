import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      loginState: 0,
      userType: '',
      loginDate: null, //用户登录时间
      operateDate: null,//用户操作时间
    },
    mutations: {
      login(state) {
        state.loginState = 1
      },
      cancel(state) {
        state.loginState = 0
      },
      setUserType(state,userType) {
        state.userType = userType
      },
      setLoginDate(state, loginDate) {
        state.loginDate = loginDate
      },
      setOperateDate(state, operateDate) {
        state.operateDate = operateDate
      },
    }
})

export default store //导出