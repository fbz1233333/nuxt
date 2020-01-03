<template>

  <Affix class="header">

  <Menu mode="horizontal"
        style="padding-left: 300px" theme="primary" active-name="1">
    <MenuItem to="/" name="0">
      <Icon type="ios-analytics" />
      Home
    </MenuItem>

    <MenuItem to="/notes" name="2">
      <Icon type="ios-albums-outline" />
      Notes
    </MenuItem>

<!--    <MenuItem to="/project" name="4">-->
<!--      <Icon type="ios-apps-outline" />-->
<!--      Project-->
<!--    </MenuItem>-->
      <MenuItem to="/about" name="1">
        <Icon type="ios-analytics" />
        About
      </MenuItem>
    <MenuItem to="/test" name="5">
      <Icon type="md-battery-full" />
      Test-Technology
    </MenuItem>
  </Menu>
  </Affix>
</template>
<script>
export default {


}
</script>
<style scoped>
  .header{

  }
</style>
