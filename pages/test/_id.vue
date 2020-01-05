<template>
  <my-template>
    <div slot="title">
      {{$route.params.id}}
    </div>
    <div slot="content">
      {{$store.state.mine.info}}<br>
      {{info}}<br>
      {{result}}<br>
    </div>
  </my-template>
</template>
<script>
  import myTemplate from '~/components/my-template.vue'

  // import { mapMutations } from 'vuex'

  import {myaxios} from "../../plugins/axios";
  export default {
      computed:{
        info(){
            // return this.$store.mine.getters.getInfo
            return this.$store.state.mine.info
        }
      },
    components:{
        myTemplate
    },
    async fetch({store,params}){
        // console.log(params.id)
          console.log('user fetch')
        let {data} =await myaxios.get('http://localhost:8081/api/v0/test')
        console.log(data)
        store.commit('mine/set2',data)
    },
      asyncData({params}){
          return myaxios.post('http://localhost:8081/api/v0/test2',{
              id:params.id
          }).then(res=>{
              console.log(res.data)
              return {result:res.data}
          })
      },
      // async asyncData({params}){
      //     const {data}=await myaxios.post('http://localhost:8081/api/v0/test2',{id:params.id})
      //     return {result:data}
      // }
}
</script>
<style scoped>
</style>
