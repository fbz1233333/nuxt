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

        <div style="margin-top: 40px;margin-bottom: 10px">
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
    text-align: left;
    padding: 0 40px 40px 40px;
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
    /*text-align: center;*/
  }
  .title {
    /*line-height: 200%;*/
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 70px;
    margin-left: 15px;
    color: #35495e;
    letter-spacing: 1px;
  }


</style>
