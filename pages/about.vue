<template>
  <div>
    <my-header></my-header>
    <div class="container">
      <div style="width: 2%;"></div>
      <Affix :offset-top="210" class="aboutMenu">
        <Menu theme="light" :active-name="name" style="text-align: left" @on-select="handleSelect">
          <MenuItem name="about-0">
            <Icon type="ios-paper">
            </Icon>
            工作经历
          </MenuItem>
          <MenuItem name="about-1">
            <Icon type="ios-ionic" />
            技术理解
          </MenuItem>
          <MenuItem name="about-2">
            <Icon type="ios-star" />
            阶段目标
          </MenuItem>
          <MenuItem name="about-3">
            <Icon type="ios-call" />
            联系方式
          </MenuItem>
        </Menu>
      </Affix>
      <div style="width: 1%">

      </div>
      <Card class="aboutCard" v-show="number===1 || number===0">
        <h1 class="myInfo myH1">工作经历</h1>
        <hr>
      </Card>
      <Card class="aboutCard" v-show="number===1 || number===0">
        <h1 class="myInfo myH1">技术理解</h1>
        <hr>
      </Card>
      <Card class="aboutCard" v-show="number===2 || number===3">
        <h1 class="myInfo myH1">阶段目标</h1>
        <hr>
      </Card>
      <Card class="aboutCard" v-show="number===2 || number===3">
        <h1 class="myInfo myH1">联系方式</h1>
        <hr>
      </Card>
      <div style="width: 2%">

      </div>
      <my-right>

      </my-right>
    </div>

    <my-footer>

    </my-footer>

  </div>
</template>

<script>
    import Logo from '~/components/Logo.vue'
    import myHeader from  '~/components/my-header.vue'
    import myFooter from  '~/components/my-footer.vue'
    import myRight from '~/components/my-right.vue'
    export default {
        data(){
          return{
              name:'about-2'
          }
        },
        computed:{
          number(){
              return Number.parseInt(this.name.substring(6,7))
          }
        },
        methods:{
            handleSelect(i1){
                this.name=i1
            }
        },
        components: {
            Logo,myHeader,myFooter,myRight
        }
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
  .myInfo {

    word-spacing: 5px;
    padding-bottom: 15px;
  }
  .myH1{
    font-weight: 200;
    font-size: 25px;
    color: #526488;
    height: 200%;
  }
  .links {
    padding-top: 15px;
  }
  .aboutMenu{
    background-color: white;
    padding-top: 210px;
  }
  .aboutCard{
    text-align: left;
    width: 60%;
    min-height: 1000px;
    padding: 20px;
    margin-top: 10px;
    margin-bottom: 100px;
  }
</style>
