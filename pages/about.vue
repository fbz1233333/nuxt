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

            <Anchor style="background:#f5f5f5;text-align: left">
              <Menu>
                <MenuGroup title="索引">
                  <MenuItem>
                    <AnchorLink href="#basicInfo" title="基本信息"></AnchorLink>
                  </MenuItem>
                  <MenuItem>
                    <AnchorLink href="#experience" title="工作经历"></AnchorLink>
                  </MenuItem>
                  <MenuItem>
                    <AnchorLink href="#projects" title="项目经验"></AnchorLink>

                  </MenuItem>
                  <MenuItem>
                    <AnchorLink href="#technology" title="技术理解"></AnchorLink>
                  </MenuItem>
                  <MenuItem>
                    <AnchorLink href="#goals" title="阶段目标"></AnchorLink>
                  </MenuItem>
                  <MenuItem>
                    <AnchorLink href="#contract" title="联系方式"></AnchorLink>
                  </MenuItem>
                </MenuGroup>
              </Menu>
            </Anchor>

        </Affix>
      </div>
      <div style="width: 1%;"></div>

      <div class="center">
                <Card class="aboutCard">
                  <div slot="title">
                    <h1 class="myInfo myH1">个人简历
                      <Button @click="updating=!updating" style="font-size: 12px;float: right;margin-right: 50px" icon="ios-brush-outline">
                        修改
                      </Button>
                    </h1>
                  </div>
                  <div v-if="updating">
                    <mavon-editor
                      ref="md"
                      @imgAdd="$imgAdd"
                      @imgDel="$imgDel"
                      v-model="text" class="editor"></mavon-editor>
                    <a class="alength" disabled>已经输入{{length}}个字符,至少20个</a>
                    <Button class="button" icon="md-arrow-dropup-circle" type="default" size="large" @click="handleReset">重置</Button>
                    <Button class="button" icon="ios-refresh-circle" type="primary" size="large" @click="handleUpdate">完成</Button>
                  </div>
                  <div class="markdown-body html1" v-if="!updating"
                        v-html="textHtml"/>
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
    import 'github-markdown-css/github-markdown.css'
    import Logo from '~/components/Logo.vue'
    import myHeader from  '~/components/my-header.vue'
    import myFooter from  '~/components/my-footer.vue'
    import myRight from '~/components/my-right.vue'
    import marked from 'marked'
    import axios from 'axios'
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
            length(){
                return this.text.length
            }
        },
        methods:{
            handleReset(){
                this.text=''
            },
            handleUpdate(){
                axios.post('/app/api/v1/update',{
                    id:this.id,
                    text:this.text
                }).then(res=>{
                    this.$Message.success('Update success')
                    this.updating=false
                })
            },
            $imgAdd(pos,$file) {
                let formData = new FormData();
                formData.append('file', $file)
                formData.append('type', 'IMAGE')
                axios.post('/app/api/v3/upload', formData, {
                    headers: {
                        "LOGIN_USER_ID": cookie.get('LOGIN_USER_ID'),
                        "LOGIN_USER_TOKEN": cookie.get('LOGIN_USER_TOKEN'),
                    }
                }).then(res => {
                    // console.log(res.data)
                    let base = "/app/image/"
                    let url = base + res.data.fileName
                    // console.log(url)
                    this.$refs.md.$img2Url(pos, url);
                })
            },
            $imgDel(pos){
                //删除
                let url=pos[0]
                let fileName=url.substr(url.lastIndexOf('/')+1)
                axios.post('/app/api/v3/delete/',{
                    fileName:fileName,
                    fileType:'IMAGE'
                },{
                    headers:{
                        "LOGIN_USER_ID":cookie.get('LOGIN_USER_ID'),
                        "LOGIN_USER_TOKEN":cookie.get('LOGIN_USER_TOKEN'),
                    }
                }).then(res=>{
                    this.$Message.success('delete success')
                })
            },
        },
        components: {
            Logo,myHeader,myFooter,myRight
        },
        mounted(){
            axios.get('/app/api/v1/getInfo').then(res=>{
                this.text=res.data.text
                this.id=res.data.id
            })
        }
    }
    import cookie from 'js-cookie'
</script>

<style scoped>
  .editor{
    z-index: 1;
    min-height: 500px;
  }
  .html1{
    text-align: left;
    /*min-height: 200px;*/
    /*line-height: 220%;*/
    margin-bottom: 220px;
  }
  .alength{
    float: left;
    margin-top: 10px;
  }
  .button{
    z-index: 1;
    margin-top: 10px;
    margin-right: 10px;
    margin-bottom: 200px;
    float: right;
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
    font-weight: 700;
    font-size: 25px;
    color: #526488;
    height: 200%;
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
