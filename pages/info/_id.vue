<template>
  <my-template>

    <div slot="title">

      <div style="margin-bottom: 10px">
        <Avatar size="100" :src="'/app/image/'+userInfo.id+'/head/head.jpg'"></Avatar>
        {{userInfo.name}}

      </div>
    </div>
    <div slot="content">
<!--      {{userInfo.name}}-->
<!--      {{userInfo.id}}-->
      <div style="padding:0px 40px 40px 20px">
        <h1>Info of you</h1>
        <hr style="width: 10%;">


        <h1>Notes</h1>
        <hr style="width: 10%;">

        <h2>you released</h2>
        <h2>your attention</h2>
      </div>

    </div>
  </my-template>
</template>
<script>
    import myTemplate from '~/components/my-template.vue'
    export default {
        components:{
            myTemplate
        },
        data(){
          return{
              userInfo:{}
          }
        },
        mounted(){
            this.$axios.post('/app/api/v2/getInfo',{
                id:this.$route.params.id
            },{
                headers: {
                    'loginUserId': this.$cookies.get('loginUserId'),
                    'loginUserToken': this.$cookies.get('loginUserToken')
                }
            }).then(res=>{
                this.userInfo=res.data
            })
        }

    }
</script>
<style scoped>
  .h11{
    font-size: 20px;margin-left: 2%;opacity: 50%
  }
</style>
