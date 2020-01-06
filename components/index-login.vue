<template>
  <div>
<!--    <Button @click="handleTest">Test</Button>-->
    <Button v-if="state==='ON'" type="warning" class="OpenButton" @click="handleLogOut" size="large">LogOut</Button>
    <Button v-else @click="handleOpen" type="primary" class="OpenButton" size="large">OPEN</Button>
    <my-login-form v-model="show"></my-login-form>
  </div>

</template>
<script>
    export default {
        data(){
            return {
                show: false,
            }
        },
        computed:{
          state(){
              return this.$store.getters.XXXX_STATE
          }
        },
        methods:{
            handleTest(){
                this.$axios.get('/app/api/v0/test')
            },
            handleOpen(){
                this.$store.commit('setLoginDrawer',true)
            },
            handleLogOut(){
                this.$axios.get('/app/api/v2/logout',{
                    headers:{
                        "loginUserId": this.$cookies.get('loginUserId'),
                        "loginUserToken": this.$cookies.get('loginUserToken'),
                    }
                }).then(res=>{
                    this.$store.commit('XXXX_LOG_OUT')
                    this.$Notice.info({
                        title:'LOG OUT SUCCESS',
                        desc:'LOGOUT SUCCESS'
                    })

                }).catch(err=>{
                    let _this=this
                    this.$Modal.confirm({
                        title:'login state error',
                        render:h => {
                            return h('p','do you want to revert?')
                        },
                        okText:'yes',
                        cancelText:'no',
                        onOk(){
                            _this.$store.commit('XXXX_LOG_OUT')
                            _this.$Notice.success({
                                title:'success',
                                desc:'revert success'
                            })
                        }
                    })
                })
            }
        },
        components:{
            myLoginForm
        },
    }
    import myLoginForm from  '~/components/my-login-form.vue'
</script>
<style scoped>


  .OpenButton{
    position: absolute;
    right: 10px;
    bottom: 450px;
  }


</style>
