<template>
  <div class="markdown-body html1" v-html="htmlxml"/>
</template>
<script>
    import marked from 'marked'
    export default {
      props:{
          htmlInfo:{
              type:String,
              required:true
          }
      },
      computed:{
          htmlxml(){
              return marked(""||this.htmlInfo)
          }
      }


  }
  // import 'github-markdown-css/github-markdown.css'
  import '../assets/css/markdown.css'
</script>

<style scoped>
  .html1{
    padding:20px 20px 20px 20px;
    margin-top: -20px;
    text-align: left;
    font-weight: 100;
    /*min-height: 200px;*/
    /*line-height: 220%;*/
    margin-bottom: 200px;
  }
</style>
