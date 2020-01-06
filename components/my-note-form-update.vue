<template>
  <div>
    <Modal v-model="value" fullscreen>
      <my-mavon-editor v-model="noteNew.text" :min-height="800"></my-mavon-editor>
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
</template>
<script>
    import myMavonEditor from '~/components/my-mavon-editor.vue'
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
            note:{
                required:true,
                type:Object
            },
        },

        computed:{
          noteNew(){
              return this.note
          }
        },

        data(){
            return{
                show2:false,
                // noteNew:{
                //     id:'',
                //     title:'',
                //     text:'',
                //     description:''
                // },
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
                // console.log()
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
                            // this.$Message.loading('Uploading.....')

                            this.show2=false
                            // this.show=false

                            this.$router.go(0)
                            this.$Notice.success({
                                title: 'Success',
                                desc: 'update successfully'
                            })
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
