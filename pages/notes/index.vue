<template>

  <my-template>
    <div slot="title">
      NOTES
    </div>
    <div slot="content">
      <my-card-list>
        <div v-for="(item,index) in notes">
          <my-card v-if="index<4" :item="item" :href="'/notes/'+item.id"></my-card>
        </div>
        <my-button @click="handleAdd"></my-button>
      </my-card-list>
    </div>
  </my-template>
</template>
<script>
    import myTemplate from '~/components/my-template.vue'
    import myCardList from '~/components/my-card-list.vue'
    import myCard from '~/components/my-card.vue'
    import myButton from '~/components/my-button.vue'
    export default {
        components:{
            myTemplate,myCardList,myCard,myButton
        },
        data(){
            return{
                notes:[]
            }
        },
        methods:{
          handleAdd(){
              // console.log('clicked')

          }
        },
        mounted(){
            this.$axios.get('/app/api/v4/getNotes_limit').then(res=>{
                this.notes=res.data
            })
        }

    }
</script>
<style scoped>

</style>
