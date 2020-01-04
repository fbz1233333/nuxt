<template>
  <Affix  :offset-bottom="0" class="footer">
    <Menu mode="horizontal" theme="dark">
      <h1 class="info">
        719577252@qq.com
        <a>将以有为也~!</a>
        <a>晓镜但愁云鬓改 夜吟应觉月关寒</a>
      </h1>
    </Menu>
  </Affix>
</template>
<script>
  export default{

  }
</script>
<style scoped>
  .footer{

    /*align-items: center;*/
  }
  .info{
    color: white;
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-weight: 300;
    font-size: 10px;
    text-align: center;
    letter-spacing: 1px;
  }
</style>
