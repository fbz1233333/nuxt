<template>

  <my-template>
    <div slot="title">
      Notes
    </div>
    <div slot="content">
      <my-card-list>
        <div v-for="(item,index) in notes">
          <my-card :item="item" :href="'/notes/'+item.id"></my-card>
        </div>
        <my-button @click="handleAdd"></my-button>
      </my-card-list>
      <my-note-form v-model="show" post-url='/app/api/v4/addNote'></my-note-form>
    </div>

  </my-template>
</template>
<script>
    import myTemplate from '~/components/my-template.vue'
    import myMavonEditor from '~/components/my-mavon-editor.vue'
    import myCardList from '~/components/my-card-list.vue'
    import myCard from '~/components/my-card.vue'
    import myButton from '~/components/my-button.vue'
    import myNoteForm from '~/components/my-note-form.vue'
    export default {
        components:{
            myTemplate,myCardList,myCard,myButton,myMavonEditor,myNoteForm
        },
        data(){
            return{
                notes:[],
                show:false
            }
        },
        methods:{
            handleAdd(){
                this.show=true
            }

        },
        mounted(){
            this.$axios.get('/app/api/v4/getNotes_limit').then(res=>{
                this.notes=res.data
            })
        }

    }
    import cookie from 'js-cookie'
</script>
<style scoped>


</style>
