<template>
  <my-template>
    <div slot="title">
      {{note.title}}
      <Button type="error" @click="handleDelete">
        <Icon type="md-close" />
        Delete
      </Button>
      <Button type="info" @click="handleUpdate">
        <Icon type="ios-brush-outline" />
        Update
      </Button>

    </div>
    <div slot="content">
      <!--      {{note.id}}-->
      <my-html :htmlInfo="note.text"></my-html>
      <my-note-form-update v-model="show" post-url='/app/api/v4/update' :note="note"></my-note-form-update>

    </div>
  </my-template>
</template>
<script>
    import cookie from 'js-cookie'
    import myTemplate from '~/components/my-template.vue'
    import myHtml from '~/components/my-html.vue'
    import myNoteFormUpdate from '~/components/my-note-form-update.vue'
    export default {
        data(){
            return{
                show:false,
                note:{
                    id:'',
                    title:'',
                    description:'',
                    text:''
                }
            }
        },
        mounted(){
            this.$axios.post('/app/api/v4/getOneNote',{
                id:this.$route.params.id
            }).then(res=>{
                this.note=res.data
            })
        },

        methods:{
            handleUpdate(){
                this.show=true
            },
            handleDelete(){
                let _this=this
                this.$Modal.confirm({
                    title:'confirm',
                    render:(h)=>{
                        return h('div','are you sure delete the '+_this.note.title+' ?')
                    },
                    okText:'yes',
                    cancelText:'no',
                    onOk(){
                        let id=_this.$route.params.id
                        _this.$axios.post('/app/api/v4/delete',{
                            id:id
                        }, {
                            headers:{
                                'LOGIN_USER_ID':cookie.get('LOGIN_USER_ID'),
                                'LOGIN_USER_TOKEN':cookie.get('LOGIN_USER_TOKEN')
                            }
                        }).then(res=>{
                            _this.$Notice.success({
                                title:"success",
                                desc:'delete success'
                            })
                            _this.$router.push({
                                path:'/notes'
                            })
                        })
                    }
                })
            }
        },
        components:{
            myTemplate,myHtml,myNoteFormUpdate
        },
        // asyncData({params}){
        //     console.log('in net',params.id)
        //     return myaxios.post('http://localhost:8081/api/v4/getOneNote',{
        //         id:params.id
        //     }).then(res=>{
        //         return{note:res.data}
        //     })
        // }
    }
    // import axios from 'axios'
    // const myaxios = axios.create({
    // })
</script>
<style scoped>
  .div1{
    padding-top: 10px;
  }
</style>
