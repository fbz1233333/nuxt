<template>
  <div>
    <my-header></my-header>
    <div class="container">
      <div style="width: 1%;"></div>
      <div class="left">
        <Affix :offset-top="150">


            <Menu theme="light"  class="aboutMenu"
                  style="text-align: left;display: inline-block"
              >
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
                    <h1 class="myInfo myH1">个人简历</h1>
                  </div>
                  <mavon-editor v-model="text" class="editor"></mavon-editor>
                  <div class="markdown-body" style="text-align: left;min-height: 200px" v-html="textHtml"/>
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
    import marked from 'marked'
    import axios from 'axios'
    export default {
        async asyncData(){
          return axios.get('/app/api/v1/getInfo').then(res=>{
              return {
                  text:res.data.text
              }
          })
        },
        data(){
            return{

            }
        },
        computed:{
            textHtml(){
              return marked(this.text)
            }
        },
        components: {
            Logo,myHeader,myFooter,myRight
        }
    }
</script>

<style scoped>
  .editor{
    z-index: 1;
  }
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
    width: 70%;
    min-height: 1000px;
    /*width: 50%;*/
    padding: 20px;
    display: inline-block;
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>
