<template>

  <div>
    <mavon-editor
      ref="md"
      :style="{ minHeight: minHeight + 'px' }"
      @imgAdd="$imgAdd"
      @imgDel="$imgDel"
      @change="handleChange"
      :value="value"
      class="editor">

    </mavon-editor>
    <a class="length" disabled>已经输入{{length}}个字符,至少20个</a>

  </div>
</template>
<script>
    export default {
        props:{
            value:{
                type:String,
                required:true
            },
            minHeight:{
                type: Number,
                default: 400
            }
        },
        computed:{
            length(){
                return this.value.length
            }
        },
        methods:{
            handleChange(value){
                // this.$emit('input',this.value1)
                this.$emit('input',value)
            },
            $imgAdd(pos,$file) {
                let formData = new FormData();
                formData.append('file', $file)
                formData.append('type', 'IMAGE')
                this.$axios.post('/app/api/v3/upload', formData, {
                    headers: {
                        "loginUserId": this.$cookies.get('loginUserId'),
                        "loginUserToken": this.$cookies.get('loginUserToken'),
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
                this.$axios.post('/app/api/v3/delete/',{
                    fileName:fileName,
                    fileType:'IMAGE'
                },{
                    headers:{
                        "loginUserId":this.$cookies.get('loginUserId'),
                        "loginUserToken":this.$cookies.get('loginUserToken'),
                    }
                }).then(res=>{
                    this.$Message.success('delete success')
                })
            },

        }
    }
</script>
<style scoped>
  .editor{
    z-index: 1;
    min-height: 500px;
  }
  .length{
    float: left;
    margin-top: 10px;
  }

</style>
