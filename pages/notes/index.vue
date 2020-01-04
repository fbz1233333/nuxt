<template>

  <my-template>
    <div slot="title">
      NOTES
    </div>
    <div slot="content">
      <my-card-list>
        <div v-for="(item,index) in notes">
          <my-card :item="item" :href="'/notes/'+item.id"></my-card>
        </div>
        <my-button @click="handleAdd"></my-button>
      </my-card-list>
      <Modal v-model="show" fullscreen>


        <my-mavon-editor v-model="noteNew.text" style="margin-top: 10px;" :min-height="800"></my-mavon-editor>
        <div slot="footer">
          <Button type="primary" @click="handleOk">Submit</Button>
          <Button @click="handleCancel">Cancel</Button>
        </div>
      </Modal>
      <Modal v-model="show2">
        <div slot="header">
          <h1 class="title2">-</h1>
        </div>
        <Form ref="form1" :model="noteNew" :rules="rules1" :label-width="100">
          <FormItem prop="title" label="title">
            <Input type="text" v-model="noteNew.title" style="width: 200px" size="large">
            </Input>
          </FormItem>
          <FormItem prop="description" label="description">
            <Input  v-model="noteNew.description" type="textarea" :rows="5">
            </Input>

          </FormItem>
        </Form>
        <div slot="footer">
          <Button type="primary" @click="handleOk2">Submit</Button>
          <Button @click="handleCancel2">Cancel</Button>

        </div>
      </Modal>
    </div>

  </my-template>
</template>
<script>
    import myTemplate from '~/components/my-template.vue'
    import myMavonEditor from '~/components/my-mavon-editor.vue'
    import myCardList from '~/components/my-card-list.vue'
    import myCard from '~/components/my-card.vue'
    import myButton from '~/components/my-button.vue'
    export default {
        components:{
            myTemplate,myCardList,myCard,myButton,myMavonEditor
        },
        data(){
            return{
                notes:[],
                show:false,
                show2:false,
                noteNew:{
                    title:'',
                    text:'',
                    description:''
                },
                rules1:{
                    title:[
                        {required:true,message:'title is needed',trigger:'blur'},
                        {type:'string',min:6,message: 'at least 6 chars',trigger:'blur'}
                    ],
                    description: [
                        {required:true,message:'description is needed',trigger:'blur'},
                        {type:'string',min:8,message: 'at least 8 chars',trigger: 'blur'}
                    ]
                }

            }
        },
        methods:{
            handleOk(){
                console.log()
                if (this.noteNew.text.length<11){
                    this.$Message.warning('at least 11 chars')
                }else {
                    this.show2=true
                }
            },
            handleOk2(){
                this.$refs['form1'].validate(valid =>{
                    if (valid){
                        this.$axios.post('/app/api/v4/addNote',this.noteNew,
                            {
                                headers:{
                                    'LOGIN_USER_ID':cookie.get('LOGIN_USER_ID'),
                                    'LOGIN_USER_TOKEN':cookie.get('LOGIN_USER_TOKEN')
                                }
                            }).then(res=> {
                                // this.$Message.loading('Uploading.....')
                            this.$Notice.success({
                                title: 'Success',
                                desc: 'Add success'
                            })
                            this.show2=false
                            this.show=false

                            this.$router.go(0)
                        })
                    }else {
                        this.$Notice.warning({
                            title:'Bad FormData',
                            desc:'please review your formData'
                        })
                    }
                })

            },
            handleCancel2(){
              this.show2=false
            },
            handleCancel(){
              this.show=false
            },
            handleAdd(){
                console.log('clicked')
                this.show=true
            }
        },
        mounted(){
            this.$axios.get('/app/api/v4/getNotes_limit').then(res=>{
                this.notes=res.data
            })
        }

    }
    import cookie from 'js-cookie'
</script>
<style scoped>

  .title1{
    font-size: 40px;
    font-weight: 100;
  }

  .title2{
    font-size: 20px;
    font-weight: 100;
  }
</style>
