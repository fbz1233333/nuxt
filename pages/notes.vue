<template>

  <my-template>
    <div slot="title">
      NOTES
    </div>
    <div slot="content">
      <div class="cardlist">
        <Card class="card">
          <h1>TITLE</h1>
          <!--          <a style="margin-left: 20px;">author</a>-->
          <p class="cardp">
            this is content...
            this is content...
            this is content...
            this is content...
            this is content...
            this is content...
            this is content...
            this is content...
            this is content...
            this is content...
          </p>
          <h3 style="text-align: right;">Dec 31,2019 22:44:12 </h3>
        </Card>
        <Card class="card">
          <h1>TITLE</h1>
          <!--          <a style="margin-left: 20px;">author</a>-->
          <p class="cardp">
            this is content...
            this is content...
            this is content...
            this is content...
            this is content...
            this is content...
            this is content...
            this is content...
            this is content...
            this is content...
          </p>
          <h3 style="text-align: right;">Dec 31,2019 22:44:12 </h3>
        </Card>
      </div>

    </div>
  </my-template>
</template>
<script>
    import myTemplate from '~/components/my-template.vue'
    export default {
        components:{
            myTemplate
        }

    }
</script>
<style scoped>
.cardlist{
  padding-top: 10px;
}
  .card{
    margin-top: 20px;
    min-height: 20px;
    padding-bottom: 20px;
  }
  .cardp{
    font-size: 20px;
    font-weight: 100;
  }
</style>
