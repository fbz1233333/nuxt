<template>

  <Affix class="header">

  <Menu mode="horizontal"
        style="padding-left: 400px" theme="primary" active-name="1">
    <MenuItem to="/" name="0">
      <Icon type="ios-analytics" />
      Home
    </MenuItem>

    <MenuItem  name="2" to="/notes">
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
      MyTests
    </MenuItem>
    <Submenu name="effects">
      <template slot="title">
        <Icon type="ios-body-outline" />
        Special Effects
      </template>
      <MenuGroup title="effects">
        <MenuItem name="e-1" to="/effects/first">
          first
        </MenuItem>
      </MenuGroup>
    </Submenu>
    <MenuItem class="right" name="logout" v-if="state==='ON'">
<!--      <Icon type="md-exit" />-->
<!--      Logout-->
    </MenuItem>
    <MenuItem class="right" name="login" v-else>
<!--      <Button @click="handle1">Login</Button>-->
    </MenuItem>
<div class="myAvatar">
  <Avatar icon="ios-person"  size="large" src="/app/image/test.jpg"/>
  <a class="myA">fbz123</a>
</div>
  </Menu>
  </Affix>
</template>
<script>
    export default {
        methods:{
            handle1(){
                this.$store.commit('setLoginDrawer',true)
            }
        },
      computed:{
          state(){
              return this.$store.getters.XXXX_STATE
          }
      }

}
</script>
<style scoped>
  .myA{
    color: white;
  }
  .myAvatar{

    display: inline-block;
    position: relative;
    float: right;
    right: 300px;
    /*margin-right: 200px;*/
  }
  .header{

  }
  .right{
    float: right;
    margin-right: 220px;
  }
</style>
