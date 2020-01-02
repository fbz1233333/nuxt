<template>
  <div>
    <Button @click="show=true" type="warning" class="OpenButton">OPEN</Button>
    <Drawer class="testCard"
            v-model="show"
            width="510"
            :closable="false">
      <h1 class="formTitle">Log In</h1>
      <hr style="width: 20%;margin-bottom: 15px;border: #7f828b 5px solid;border-radius: 10px">
      <Form v-model="loginInfo">
        <FormItem label="Name" class="ivu-form-item">
          <Input  v-model="loginInfo.name" size="large" placeholder="name">
          <Icon type="ios-person-outline" slot="prepend"/>
          </Input>
        </FormItem>
        <FormItem label="Password">
          <Input type="password" v-model="loginInfo.password"  placeholder="password">
          <Icon type="ios-lock-outline" size="large"   slot="prepend"></Icon>
          </Input>
          <a>forget password?</a>

        </FormItem>
        <FormItem style="text-align: right;margin-top: 50px">
          <Button size="large" type="primary" @click="handleLogin">
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
            }
        }
    },
    methods:{
        handleLogin(){
           axios.post('/app/api/v2/login',this.loginInfo).then(res=>{
               console.log(res.data)
           })
        }
    },
    mounted(){
        const myaxios=axios.create({

        })
    }
}
import axios from 'axios'
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

    position:absolute;
    left: 1400px;
    top: 50px;
  }
  .formTitle {
    font-size: 40px;
    font-weight: 300;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }
</style>
