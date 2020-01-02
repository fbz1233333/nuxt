<template>
  <div>
    <my-header></my-header>
    <div class="container">

      <div style="width:20%">

      </div>

      <div class="diaryList">

        <h1 class="title">
          <slot name="title">

          </slot>
          <hr class="hr">

        </h1>

        <div style="margin-top: 10px;margin-bottom: 10px">
          <slot name="content">

          </slot>
        </div>

      </div>
      <my-right></my-right>

    </div>

    <my-footer>

    </my-footer>

  </div>
</template>

<script>
    import Logo from '~/components/Logo.vue'
    import myHeader from  '~/components/my-header.vue'
    import myFooter from  '~/components/my-footer.vue'
    import myRight from '~/components/my-right.vue'
    export default {
        components: {
            Logo,myHeader,myFooter,myRight
        }
    }
</script>

<style scoped>
  .hr{
    border: #2d8cf0 10px solid;border-radius: 10px;
    width: 20%;
  }
  .diaryList{
    margin-top: -40px;
    text-align: left;
    padding: 20px 40px 40px 20px;
    background-color: white;
    min-height: 1000px;
    width: 60%;
  }
  .container {

    background-color: #F5F5F5;
    min-height: 700px;
    display: flex;
    /*justify-content: center;*/
    /*align-items: center;*/
    text-align: center;
  }
  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    margin-top: 20px;
    font-size: 70px;
    color: #35495e;
    letter-spacing: 1px;
  }
  .myInfo {

    word-spacing: 5px;
    padding-bottom: 15px;
  }
  .myH1{
    font-weight: 200;
    font-size: 25px;
    color: #526488;
    height: 200%;
  }
  .links {
    padding-top: 15px;
  }
  .aboutMenu{
    background-color: white;
    padding-top: 210px;
  }
  .aboutCard{
    text-align: left;
    width: 60%;
    min-height: 1000px;
    padding: 20px;
    margin-top: 10px;
    margin-bottom: 100px;
  }
</style>
