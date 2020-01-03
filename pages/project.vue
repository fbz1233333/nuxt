<template>

  <my-template>
    <div slot="title">
      PROJECT
    </div>
    <div slot="content">
      <my-card-list>

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
            myTemplate,myCardList,myCard
        }

    }
</script>
<style scoped>

</style>
