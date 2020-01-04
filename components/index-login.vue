<template>
  <div>
<!--    {{secure_info}}-->
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
                secure_info: this.$store.getters.XXXX_INFO,
                state:this.$store.getters.XXXX_STATE
            }
        },
        computed:{

        },
        methods:{
            handleTest(){
                this.$axios.get('/app/api/v0/test')
            },
            handleOpen(){
                this.$store.commit('setLoginDrawer',true)
            },
            handleLogOut(){
                this.$store.commit('XXXX_LOG_OUT')
                this.$Notice.info({
                    title:'LOG OUT SUCCESS',
                    desc:'LOGOUT SUCCESS'
                })
            }
        },
        components:{
            myLoginForm
        },
        mounted(){
            this.secure_info={
                'LOGIN_USER_ID':cookie.get('LOGIN_USER_ID'),
                'LOGIN_USER_NAME':cookie.get('LOGIN_USER_NAME'),
            }
            this.state=cookie.get('LOGIN_STATE')
        }
    }
    import cookie from 'js-cookie'
    import myLoginForm from  '~/components/my-login-form.vue'
</script>
<style scoped>


  .OpenButton{
    position: absolute;
    right: 10px;
    bottom: 450px;
  }


</style>
