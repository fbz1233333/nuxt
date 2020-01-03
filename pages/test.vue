<template>

  <my-template>
    <div slot="title">
      Try-Tests
    </div>
    <div slot="content">
      <div v-for="(item,index) in GitInfos">
        <my-card-a :GitInfo="item"></my-card-a>
      </div>
      <my-button @click="handleClick">
      </my-button>
    </div>
  </my-template>
</template>
<script>
  import myCardA from '~/components/my-card-a.vue'
  import myTemplate from '~/components/my-template.vue'
  import myButton from '~/components/my-button.vue'
export default {
      data(){
          return{
              GitInfos:[
                  {
                      href:'https://github.com/fbz1233333/swagger',
                      info:'Use the swagger to write thi API documents',
                      time:'2015-12-11 12:45'
                  },
                  {
                      href:'https://github.com/fbz1233333/swagger',
                      info:'Use the swagger to write thi API documents',
                      time:'2015-12-11 12:45'
                  },
                  {
                      href:'https://github.com/fbz1233333/swagger',
                      info:'Use the swagger to write thi API documents',
                      time:'2015-12-11 12:45'
                  }
              ]
          }
      },
      computed:{
        time(){
            return new Date()
        }
      },
    methods:{
      handleClick(e){
          // console.log('clicked')
      }
    },
    components:{
        myTemplate,myCardA,myButton
    }
}
import axios from 'axios'
</script>
<style scoped>
  .testA{
    font-size: 15px;
  }
</style>
