<template @onscroll="handleScroll">
  <div>
    <my-header></my-header>
    <div class="container">
      <div style="display: inline-block">
        <h1  class="subtitle testFont0"> (╯#-_-)╯:来者可是诸葛孔明?</h1>
        <h1  class="subtitle testFont7"> 久闻公之大名 今日有幸相会(;~ェ~) </h1>
        <div>
          <h1 class="subtitle testFont2">
            处中国以治万邦(◒。◒)</h1>
        </div>
        <div>
          <h1  class="subtitle testFont2">
            应天和人 法尧禅舜  (*゜ェ゜*)</h1>
        </div>
        <div>
          <h1 class="subtitle testFont4">
            扫清六合 席卷八荒</h1>
        </div>
        <div>
          <h1 class="subtitle testFont4">
            世祖文皇帝 继承大统</h1>
        </div>

        <div>
          <h1 class="subtitle testFont11">
          世居东海之滨 初举孝廉入仕</h1>
        </div>
        <div>
          <h1 class="subtitle testFont5">
            天数有变 神器更易 而归有德之人 >_<</h1>
        </div>
        <div>
          <h1 class="subtitle testFont6">
            而归有德之人</h1>
        </div>
        <div>
          <h1 class="subtitle testFont5">
            我太祖武皇帝</h1>
        </div>
        <div>
          <p class="subtitle testFont8">
            汉统衰落
            宦官酿祸<br>
            国乱岁凶
            四方扰攘<br>
          </p>
        </div>
        <div>
          <h1 class="subtitle testFont9">
            值此国难之际!@#@$   <strong>王司徒又有何作为？</strong>
          </h1>
        </div>

        <div>
          <h1 class="subtitle testFont14">
            我从未见过有如此 <strong>厚颜无耻</strong> 之人
          </h1>
        </div>
        <div>
          <h1 class="subtitle testFont12">
            我我我
            我我我
            呜呜呜
            呜呜呜
            呃呃呃
            啊啊啊
            ( ´Д`)
          </h1>
        </div>


        <Card class="testCard">
          <div slot="title">
            <h1 class="formtitle">Log In</h1>
          </div>
          <Form v-model="loginInfo">
            <FormItem label="Name">
              <Input  v-model="loginInfo.name" size="large" placeholder="name">
                <Icon type="ios-person-outline" slot="prepend"/>
              </Input>
            </FormItem>
            <FormItem label="Password">
              <Input type="password" v-model="loginInfo.password" placeholder="password">
              <Icon type="ios-lock-outline" size="large" slot="prepend"></Icon>
              </Input>
              <a>forget password?</a>

            </FormItem>
            <FormItem style="text-align: right;margin-top: 50px">
              <Button size="large" type="primary">
                LogIn
              </Button>
              <Button size="large">
                Reset
              </Button><br>
              <br>
            </FormItem>
          </Form>
        </Card>
      </div>
    </div>

    <my-footer>

    </my-footer>

  </div>
</template>

<script>
    import Logo from '~/components/Logo.vue'
    import myHeader from  '~/components/my-header.vue'
    import myFooter from  '~/components/my-footer.vue'
    export default {
        data(){
          return{
              loginInfo:{
                  name:'',
                  password:''
              }
          }
        },
        components: {
            Logo,myHeader,myFooter
        },
        methods:{
            handleScroll(){
                console.log('scroll')
            }
        },
    }
</script>

<style>
  .container {
    background-color: #F5F5F5;
    min-height: 80vh;
    display: flex;
    /*justify-content: center;*/
    /*align-items: center;*/
    text-align: center;
  }
  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }
  .subtitle {
    font-weight: 300;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }
  .formtitle {
    font-size: 40px;
    font-weight: 300;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }
  .testFont0 {
    font-size: 50px;
    position: relative;
    top: 50px;
    opacity: 120%;
  }
  .testFont2{
    font-size: 25px;
    position:relative;
    left: 400px;
    top: 70px;
    opacity: 70%;
  }

  .testFont7{
    font-size: 40px;
    position:relative;
    top: 50px;
    opacity: 120%;
  }
  .testFont8{
    font-size: 40px;
    position:relative;
    left: 700px;
    top: -500px;
    opacity: 70%;
  }
  .testFont9{
    font-size: 48px;
    position:relative;
    left: 500px;
    top: -400px;
    opacity: 90%;
  }
  .testFont11{
    font-size: 48px;
    position:relative;
    left: 400px;
    top: -300px;
    opacity: 70%;
  }
  .testFont12{
    font-size: 30px;
    position:relative;
    left: 600px;
    top: -300px;
    opacity: 100%;
  }
  .testFont14{
    font-size: 50px;
    position:relative;
    left: 400px;
    top: -300px;
    opacity: 100%;
  }
  .testCard{
    border-radius: 20px;
    text-align: left;
    padding-top: 30px;
    min-height: 500px;

    position:relative;
    left: 1400px;
    top: -900px;
    width: 450px;
  }
  .links {
    padding-top: 15px;
  }
</style>
