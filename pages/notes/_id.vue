<template>
  <my-template>
    <div slot="title">
      {{note.title}}
    </div>
    <div slot="content">
<!--      {{note.id}}-->

        <my-html :htmlInfo="note.text"></my-html>
    </div>
  </my-template>
</template>
<script>
  import myTemplate from '~/components/my-template.vue'
  import myHtml from '~/components/my-html.vue'
export default {

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
        this.$axios.get('/app/api/v4/getOneNote/'+this.$route.params.id).then(res=>{
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
