// import { getAll } from '@/services/participantsService'

export default {
  actions : {
    async fetchParticipants({ commit }) {
      const res = await fetch("http://localhost:3001/participants?_sort=points&_order=desc&_limit=8")
      const teamList = await res.json()
      commit("updateTodos", teamList)
      // commit("updateTodos", await getAll())
    },
  },
  mutations : {
    updateTodos(state , participants){
      state.participants = participants
    }
  } ,
  state : {
    participants : [],
  },
  getters : {
    getPart(state){
      return state.participants
    },
    getAvg(state){
      return id => {
        const { places = [] } = state.participants.find(item => item.id === id)?.games || {}
        const sum = places.reduce((acc, item) => acc + item, 0)
        return +(sum / places.length).toFixed(2)
      }
    },
    getAvgFinal(state){
      return id => {
        const finalResult = state.participants.find(item => item.id === id)?.games?.final
        const nickName = state.participants.find(item => item.id === id).nick
        return {
          totalGames : finalResult.length,
          avg : +(finalResult.reduce((acc, el) => acc + el, 0) / finalResult.length).toFixed(2),
          nick : nickName
        }
      }
    },
    getAvgSemifinal(state){
      return id => {
        const finalResult = state.participants.find(item => item.id === id)?.games.semifinal
        const nickName = state.participants.find(item => item.id === id).nick
        return {
          totalGames : finalResult.length,
          avg : +(finalResult.reduce((acc, el) => acc + el, 0) / finalResult.length).toFixed(2),
          nick : nickName
        }
      }
    },
    getAvgQuarterFinals(state){
      return id => {
        const finalResult = state.participants.find(item => item.id === id)?.games.quarterFinalsAndBelow
        const nickName = state.participants.find(item => item.id === id).nick
        return {
          totalGames : finalResult.length,
          avg : +(finalResult.reduce((acc, el) => acc + el, 0) / finalResult.length).toFixed(2),
          nick : nickName
        }
      }
    }
  }
}
