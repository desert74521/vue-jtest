import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import state from './state'
import mutations from './mutations'
//每次修改state都会在控制台打印log
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	actions,
	getters,
	state,
	mutations,
	strict: debug, // 当debug=true时开启严格模式(性能有损耗)
	plugins: debug ? [createLogger()] : []
})