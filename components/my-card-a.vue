<template>

    <Card class="card">

        <a style="font-size: 15px" :href="GitInfo.href" target="_blank">
          {{GitInfo.info}}
          <a style="float:right;text-align: right" disabled="true">{{GitInfo.time}}</a>
        </a>


    </Card>
</template>
<script>
export default {

    props:{
        GitInfo:{
            type:Object,
            required:true,
        }
    }
}
</script>
<style scoped>
  .card{
    margin-top: 20px;
    min-height: 20px;
    padding-bottom: 5px;
    text-align: revert;
  }
  .cardt{
    font-size: 20px
  }
  .cardp{
    font-size: 15px;
    font-weight: 100;
  }
</style>
