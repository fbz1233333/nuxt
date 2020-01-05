<template @onscroll="handleScroll">
  <div>
    <my-header></my-header>
    <div class="container" >
      <index-login/>
      <div v-if="false">
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

        </div>


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
    import indexLogin from '~/components/index-login.vue'
    export default {

        components: {
            Logo,myHeader,myFooter,indexLogin
        },
        methods:{
            handleScroll(){
                console.log('scroll')
            }
        },
    }
</script>

<style scoped>
  .container {
    background-color: #F5F5F5;
    min-height: 900px;
    display: flex;
    /*justify-content: center;*/
    /*align-items: center;*/
    text-align: center;
  }
  .subtitle {
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

  .links {
    padding-top: 15px;
  }
</style>
