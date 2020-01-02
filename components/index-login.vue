<template>
  <div>
          {{secure_info}}
    <Button @click="handleTest">Test</Button>
    <Button v-if="state==='ON'" type="warning" class="OpenButton" @click="handleLogOut" size="large">LogOut</Button>
    <Button v-else @click="show=!show" type="primary" class="OpenButton" size="large">OPEN</Button>
    <Drawer class="testCard"
            v-model="show"
            width="510"
            :closable="false">

      <h1 class="formTitle">Log In</h1>
      <hr style="width: 20%;margin-bottom: 15px;border: #2d8cf0 5px solid;border-radius: 10px">
      <Form :model="loginInfo" ref="loginForm" :rules="loginRules">
        <FormItem label="Name" prop="name">
          <Input  v-model="loginInfo.name" size="large" placeholder="name">
          <Icon type="ios-person-outline" slot="prepend"/>
          </Input>
        </FormItem>
        <FormItem label="Password" prop="password">
          <Input type="password" v-model="loginInfo.password"  placeholder="password">
          <Icon type="ios-lock-outline" size="large"   slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <a>forget password?</a>
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
    </Drawer>

  </div>

</template>
<script>
export default {
    data(){
        return{
            show:false,
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
    computed:{
      secure_info(){
          return this.$store.getters.XXXX_INFO
      },
      state(){
          return this.$store.getters.XXXX_STATE
      }
    },
    methods:{
        handleTest(){
            this.$axios.get('/app/api/v0/test')
        },
        handleSubmit(name){
            this.$refs[name].validate((valid => {
                if (valid){
                    // this.$Message.success('success')
                    this.$axios.post('/app/api/v2/login',this.loginInfo).then(res=>{
                        // console.log(res.data)
                        if (res.data.loginResult==='LOGIN_SUCCESS'){
                            this.$cookies.set('LOGIN_USER_ID',res.data.userInfo.id)
                            console.log('xxxxx',this.$cookies.get('LOGIN_USER_ID'))
                            this.$Notice.success({
                                title:'LOGIN SUCCESS',
                                desc:'Welcome '+res.data.userInfo.name
                        })
                            this.show=false
                        }
                    })

                }else{
                    // this.$Message.error('Fail')
                }
            }))

        },
        handleLogOut(){
            this.$store.commit('XXXX_LOG_OUT')
            this.$Notice.info({
                title:'LOG OUT',
                desc:'LOGOUT SUCCESS'
            })
        }
    },
}
import { mapMutations } from 'vuex'
</script>
<style scoped>
  .ivu-form-item >:first-child{
    font-size: 18px;
  }

  .OpenButton{
    position: absolute;
    right: 10px;
    bottom: 450px;
  }

  .testCard{

    /*border-radius: 20px;*/
    text-align: left;
    padding-top: 100px;
    min-height: 900px;
   }
  .formTitle {
    font-size: 40px;
    font-weight: 300;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }
</style>
