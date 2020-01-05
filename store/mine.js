export const state = () => ({
  number:0,
  info:{}
})
export const getters= {
  getNumber(state){
    return state.number
  },
  getInfo(state){
    return state.info
  }
}
export const mutations = {
  // setNumber(state,data){
  //   state.number=data
  // },
  set2(state,data){
    console.log('in store',data)
    state.info=data
  }
}
