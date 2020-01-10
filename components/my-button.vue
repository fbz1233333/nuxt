<template>

  <button class="my-btn" @click="handleClick">
    <Icon type="md-add" style="color: white" size="50"></Icon>
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
    padding: 3%;
    outline: none;
    float: right;
    margin-right: 5%;
    margin-top: 2%;
  }0
  .my-btn:hover{
    background: #5cadff;
  }
</style>
