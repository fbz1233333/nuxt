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
</style>
