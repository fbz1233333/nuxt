<template>
  <div>
    <Modal v-model="value" fullscreen>
      <my-mavon-editor v-model="noteNew.text" :min-height="800">

      </my-mavon-editor>
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
          <Input type="text" v-model="noteNew.title" style="width: 200px" size="large" placeholder="please set the title"/>
        </FormItem>
        <FormItem prop="description" label="description">
          <Input  v-model="noteNew.description" type="textarea" :rows="5" placeholder="please set the description"/>

        </FormItem>
      </Form>
      <div slot="footer">
        <Button type="primary" @click="handleOk2">Submit</Button>
        <Button @click="handleCancel2">Cancel</Button>

      </div>
    </Modal>
  </div>
</template>
<script>
    import myMavonEditor from '~/components/my-mavon-editor.vue'
    // import cookie from 'js-cookie'
    export default {
        components:{
            myMavonEditor
        },
        props:{
            value:{
                required:true,
                type:Boolean
            },
            postUrl:{
                required:true,
                type:String
            },

        },
        data(){
            return{
                show2:false,
                noteNew:{
                    title:'',
                    text:'',
                    description:'',
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
                if (this.noteNew.text.length<11){
                    this.$Message.warning('at least 11 chars')
                }else {
                    this.show2=true
                }
            },
            handleOk2(){
                this.$refs['form1'].validate(valid =>{
                    if (valid){
                        this.$axios.post(this.postUrl,this.noteNew,
                            {
                                headers:{
                                    'loginUserId':this.$cookies.get('loginUserId'),
                                    'loginUserToken':this.$cookies.get('loginUserToken')
                                }
                            }).then(res=> {


                            this.show2=false
                            this.$emit('input',false)
                            this.$Notice.success({
                                title: 'Success',
                                desc: 'Add successfully'
                            })
                            location.reload()
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
                this.$emit('input',false)
            }
        }
    }
</script>
<style scoped>
  .title1{
    font-size: 40px;
    font-weight: 100;
  }

  .title2{
    margin-left: 10%;
    font-size: 15px;
    font-weight: 100;
  }
</style>
