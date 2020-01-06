<template>
  <Drawer class="testCard"
          v-model="show"
          width="510"
          :closable="false"
          @on-close="handleSync">
    <h1 class="formTitle">Log In</h1>
    <hr style="width: 20%;margin-bottom: 15px;border: #2d8cf0 5px solid;border-radius: 10px">
    <Form :model="loginInfo" ref="loginForm" :rules="loginRules">
      <FormItem label="Name" prop="name">
        <Input  v-model="loginInfo.name" size="large"  placeholder="name">
        <Icon type="ios-person-outline"  slot="prepend"/>
        </Input>
      </FormItem>
      <FormItem label="Password" prop="password">
        <Input type="password" v-model="loginInfo.password" size="large" placeholder="password">
        <Icon type="ios-lock-outline" size="large"   slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <a>Forget password?</a>
      </FormItem>
      <FormItem style="text-align: right;margin-top: 50px">
        <Button size="large" type="primary" @click="handleSubmit('loginForm')">
          LogIn
        </Button>
        <Button size="large" @click="loginInfo={}">
          Reset
        </Button><br>
        <br>
      </FormItem>
      <FormItem style="text-align: center">
        <a style="font-size: 12px">log in by</a>
        <Button icon="md-add-circle" type="warning" shape="circle"></Button>
        <Button icon="ios-alarm" type="info" shape="circle"></Button>
        <Button icon="ios-alarm" type="error" shape="circle"></Button>
      </FormItem>
    </Form>
    {{state}}
    {{secure_info}}
  </Drawer>

</template>
<script>
export default {
    computed:{
        show(){
            return this.$store.getters.getLoginDrawer
        }
    },
    data(){
        return{
            secure_info:{},
            state:'',


            loginInfo:{
                name:'',
                password:''
            },
            loginRules:{
                name:[
                    {required:true,message:'name is needed',trigger:'blur'},
                    {type:'string',min:3,max:5,message: 'name length 3-5',trigger:'blur'}
                ],
                password: [
                    {required:true,message:'password is needed',trigger:'blur'},
                    {type:'string',min:6,max:8,message: 'password length 6-8',trigger:'blur'}
                ]
            },
        }
    },
    mounted(){
      this.getLoginInfo()
    },
    methods:{

        getLoginInfo(){
            this.secure_info={
                'loginUserId':this.$cookies.get('loginUserId'),
                'loginUserName':this.$cookies.get('loginUserName'),
                'loginUserToken':this.$cookies.get('loginUserToken')
            }
            this.state=this.$cookies.get('loginState')
        },

        handleSync(){
          this.$store.commit('setLoginDrawer',false)
        },
        handleSubmit(name){
            this.$refs[name].validate((valid => {
                if (valid){
                    // this.$Message.success('success')
                    this.$axios.post('/app/api/v2/login',this.loginInfo).then(res=>{
                        // console.log(res.data)
                        if (res.data.loginResult==='LOGIN_SUCCESS'){

                            this.$store.commit('XXXX_LOG_IN',res.data)
                            this.$store.commit('setLoginDrawer',false)
                            this.$Notice.success({
                                title:'LOG IN SUCCESS',
                                desc:'Welcome '+res.data.userInfo.name
                            })
                            this.getLoginInfo()
                        }else if (res.data.loginResult==='NO_SUCH_USER'){
                            this.$Notice.warning({
                                    title:"FAILED",
                                    desc:"NO_SUCH_USER"
                                }
                            )
                        }
                    })

                }else{
                    this.$Notice.error({
                        title:'BAD FORMDATA!',
                        desc:'Please review the formData'
                    })
                }
            }))

        },
    }
}
</script>
<style scoped>
  .ivu-form-item >:first-child{
    font-size: 18px;
  }
  .formTitle {
    font-size: 40px;
    font-weight: 300;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }
</style>
