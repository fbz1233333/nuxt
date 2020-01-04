<template>
  <my-template>
    <div slot="title">
      {{note.title}}
      <Button type="error" @click="handleDelete">
        <Icon type="md-close" />
        Delete
      </Button>
      <Button type="info">
        <Icon type="ios-brush-outline" @click="handleUpdate"/>
        Update
      </Button>
    </div>
    <div slot="content">
      <!--      {{note.id}}-->

      <my-html :htmlInfo="note.text"></my-html>
    </div>
  </my-template>
</template>
<script>
    import cookie from 'js-cookie'
    import myTemplate from '~/components/my-template.vue'
    import myHtml from '~/components/my-html.vue'
    export default {

        methods:{
            handleUpdate(){
                console.log('update')
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
            myTemplate,myHtml
        },
        data(){
            return{
                note:{
                    text:''
                }
            }
        },
        mounted(){
            this.$axios.post('/app/api/v4/getOneNote', {
                    id: this.$route.params.id
                }).then(res=>{
                this.note=res.data
            })
        }
    }
</script>
<style scoped>
  .div1{
    padding-top: 10px;
  }
</style>
