<template>
  <div>
    <my-header></my-header>
    <div class="container">
      <div style="width: 1%;"></div>
      <div class="left">
        <Affix :offset-top="150">


            <Menu theme="light"  class="aboutMenu"
                  :active-name="name"
                  style="text-align: left;display: inline-block"
                  @on-select="handleSelect">
              <MenuGroup title="内容">
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
          </MenuGroup>

          </Menu>
        </Affix>


      </div>
      <div style="width: 1%;"></div>

      <div class="center">
                <Card class="aboutCard">
                  <div slot="title">
                    <h1 class="myInfo myH1">工作经历</h1>
                  </div>
                  <p>
                    sss
                    sss<br>
                    sss<br>
                  </p>
                </Card>
                <Card class="aboutCard" >
                  <div slot="title">
                    <h1 class="myInfo myH1">技术理解</h1>
                  </div>
                  <p>ss</p>
                  <p>ss</p>
                  <p>ss</p>
                  <p>ss</p>
                  <p>ss</p>
                  <p>ss</p>
                  <p>ss</p>
                  <p>ss</p>
                  <p>ss</p>
                  <p>ss</p>
                </Card>
              <Card class="aboutCard">
                <div slot="title">
                  <h1 class="myInfo myH1">阶段目标</h1>
                </div>

              </Card>
              <Card class="aboutCard">
                <div slot="title">
                  <h1 class="myInfo myH1">联系方式</h1>
                </div>
              </Card>
      </div>
      <div style="width: 1%;"></div>

        <my-right></my-right>
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

<style scoped>
  .left{
   width: 15%;display: inline-block
  }
  .center{
   width: 62%;display: inline-block
  }

  .container {
    background-color: #F5F5F5;
    min-height: 900px;
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
  .aboutMenu{
    min-height: 500px;
    background-color: white;
    padding-top: 100px;
    display: inline-flex;
  }
  .aboutCard{
    position: relative;
    text-align: left;
    width: 48%;
    min-height: 200px;
    /*width: 50%;*/
    padding: 20px;
    display: inline-block;
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>
