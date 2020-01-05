<template>

    <Card class="card" @click.native="handleClick" >

        <h1 class="cardt" slot="title">
          {{item.title}}
        </h1>
        <!--          <a style="margin-left: 20px;">author</a>-->
        <p class="cardp">
          {{item.description}}
        </p>

      <h3 class="cardD">
        {{item.createTime}}
      </h3>
    </Card>
</template>
<script>
export default {
    methods:{
        handleClick(){
            // console.log('ccc')
            this.$router.push({
                path:this.href
            })
        }
    },
    props:{
        item:{
            type:Object,
            required:true
        },
        href:{
            type:String,
        }
    }
}
</script>
<style scoped>
  .card:hover{
    color: #2d8cf0;
  }
  .card{
    margin-top: 20px;
    min-height: 20px;
    padding-bottom: 5px;
  }
  .cardt{
    font-size: 20px
  }
  .cardp{
    font-size: 15px;
    font-weight: 100;
  }
  .cardD{
    text-align: right;font-weight: 100;font-size: 15px
  }
</style>
