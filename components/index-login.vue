<template>
  <div>
    {{secure_info}}
    <Button @click="handleTest">Test</Button>
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
            secure_info(){
                return this.$store.getters.XXXX_INFO
            },
            state() {
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
