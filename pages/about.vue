<template>
  <div>
    <my-header></my-header>
    <div class="container">
      <div style="width: 1%;"></div>
      <div class="left">
        <!--        <Affix :offset-top="150">-->
        <!--          <Anchor>-->
        <!--            <Menu theme="light"  class="aboutMenu">-->
        <!--              <MenuGroup title="内容">-->
        <!--                <MenuItem name="about-1">-->
        <!--&lt;!&ndash;                  <Icon type="md-card" />&ndash;&gt;-->
        <!--                  <AnchorLink href="#test" title="基本信息">-->

        <!--                  </AnchorLink>-->
        <!--                </MenuItem>-->
        <!--              <MenuItem name="about-0">-->
        <!--                <Icon type="ios-paper">-->
        <!--                </Icon>-->
        <!--                工作经历-->
        <!--              </MenuItem>-->
        <!--              <MenuItem name="about-1">-->
        <!--                <Icon type="ios-ionic" />-->
        <!--                技术理解-->
        <!--              </MenuItem>-->
        <!--              <MenuItem name="about-2">-->
        <!--                <Icon type="ios-star" />-->
        <!--                阶段目标-->
        <!--              </MenuItem>-->
        <!--              <MenuItem name="about-3">-->
        <!--                <Icon type="ios-call" />-->
        <!--                联系方式-->
        <!--              </MenuItem>-->
        <!--          </MenuGroup>-->

        <!--          </Menu>-->
        <!--          </Anchor>-->
        <!--        </Affix>-->
        <Affix :offset-top="220">

          <Menu class="myMenu1">
            <MenuGroup title="索引" >
              <a href="#basicInfo">
                <MenuItem name="basicInfo">
                  <Icon type="md-add"/>
                  基本信息
                </MenuItem>
              </a>
              <a href="#experience">
                <MenuItem name="experience">
                  <Icon type="md-apps" />
                  工作经历
                </MenuItem></a>
              <a href="#projects">
                <MenuItem name="projects">
                  <Icon type="md-albums" />
                  项目经验
                </MenuItem></a>
              <a href="#technology">
                <MenuItem name="technology">
                  <Icon type="md-analytics" />
                  技术理解
                </MenuItem></a>
              <a href="#goals">
                <MenuItem name="goals">
                  <Icon type="md-star" />
                  阶段目标
                </MenuItem>
              </a>
              <a href="#contract">
                <MenuItem name="contract">
                  <Icon type="ios-call" />
                  联系方式
                </MenuItem>
              </a>
            </MenuGroup>
          </Menu>

        </Affix>
      </div>
      <div style="width: 1%;"></div>

      <div class="center">
        <Card class="aboutCard">


          <div slot="title">
            <a style="color: #2d8cf0">扈江离与辟芷兮，纫秋兰以为佩</a>
<!--            <img src="../assets/img/top-right.jpg" height="40" width="180"-->
<!--                 style="position: relative;float:right;right: 20px"/>-->
            <Button v-if="show1" @click="updating=!updating" class="myButton" icon="ios-brush-outline">
              修改
            </Button>
          </div>

          <div v-if="updating">
            <my-mavon-editor v-model="text"></my-mavon-editor>
            <Button class="button" icon="md-arrow-dropup-circle" type="default" size="large" @click="handleReset">重置</Button>
            <Button class="button" icon="ios-refresh-circle" type="primary" size="large" @click="handleUpdate">完成</Button>
          </div>
          <my-html :htmlInfo="textHtml" v-if="!updating"></my-html>

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
    import myHtml from '~/components/my-html.vue'
    import marked from 'marked'
    export default {
        data(){
            return{
                updating:false,
                text:'',
                id:''
            }
        },
        computed:{
            textHtml(){
                return marked(this.text)
            },
            show1(){
                let state=this.$store.getters.XXXX_STATE
                return state==='ON'
            }
        },
        components: {
            Logo,myHeader,myFooter,myRight,myHtml,myMavonEditor
        },
        methods:{
            handleUpdate(){
                this.$axios.post('/app/api/v1/update',{
                    id:this.id,
                    text:this.text
                },{
                    headers:{
                        'loginUserId':this.$cookies.get('loginUserId'),
                        'loginUserToken':this.$cookies.get('loginUserToken')
                    }
                }).then(res=>{
                    this.$Notice.success({
                        title:'Update success',
                        desc:'update success'
                    })
                    this.updating=false
                })
            },
            handleReset(){
                this.text=''
            }

        },

        mounted(){
            this.$axios.get('/app/api/v1/getInfo').then(res=>{
                this.text=res.data.text
                this.id=res.data.id
            })
        }
    }
    import cookie from 'js-cookie'
    import myMavonEditor from '~/components/my-mavon-editor.vue'
</script>

<style scoped>
  .myMenu1{
    text-align: left;min-height: 500px
  }
  .myMenu1 a{
    color: #3c4144;
  }
  .left{
    width: 8%;display: inline-block
  }
  .center{
    width: 100%;display: inline-block
  }
  .button{
    z-index: 1;
    margin-top: 10px;
    margin-right: 10px;
    margin-bottom: 200px;
    float: right;
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

    /*word-spacing: 5px;*/
  }
  .myButton{
    font-size: 12px;
    float: right;

    position: relative;
    top: -10px;
    right: 10px;
  }
  .myH1{
    font-weight: 400;
    font-size: 45px;
    line-height: 250%;
    color: #526488;
    /*background-color: #dedfda;*/
  }
  .aboutMenu{
    min-height: 500px;
    background-color: white;
    padding-top: 100px;
    display: inline-flex;
    text-align: left;
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
