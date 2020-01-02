<template>

  <my-template>
    <div slot="title">
      DIARY
    </div>
    <div slot="content">
      <my-card-list>
        <my-card></my-card>
        <my-card></my-card>
        <my-card></my-card>
        <my-card></my-card>
        <my-card></my-card>
        <my-card></my-card>
      </my-card-list>
    </div>
  </my-template>
</template>
<script>
    import myTemplate from '~/components/my-template.vue'
    import myCardList from '~/components/my-card-list.vue'
    import myCard from '~/components/my-card.vue'
    export default {
        components:{
            myTemplate,myCard,myCardList
        }

    }
</script>
<style scoped>

</style>
