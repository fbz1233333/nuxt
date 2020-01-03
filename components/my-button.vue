<template>

  <button class="my-btn" @click="handleClick">
    <Icon type="md-add" style="color: white"></Icon>
  </button>
</template>
<script>
export default {
    methods:{
        handleClick(e){
            this.$emit('click',e)
        }
    }
}
</script>
<style scoped>
  .my-btn{
    background: #2d8cf0;
    border: #2d8cf0 0 solid;
    border-radius: 100%;
    padding: 50px;
    outline: none;
    float: right;
    margin-right: 10px;
    margin-top: 20px;
  }
  .my-btn:hover{
    background: #5cadff;
  }
</style>
