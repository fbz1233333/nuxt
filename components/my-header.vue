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
<!--    <MenuItem to="/test" name="5">-->
<!--      <Icon type="md-battery-full" />-->
<!--      MyTests-->
<!--    </MenuItem>-->
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
    <MenuItem name="info" v-if="state==='ON'" :to="'/info/'+secure_info.loginUserId" class="myAvatar">
        <Avatar icon="ios-person"  size="large" src="/app/image/test.jpg"/>
      {{secure_info.loginUserName}}
    </MenuItem>

  </Menu>
  </Affix>
</template>
<script>
    export default {
      computed:{
          state(){
              return this.$store.getters.XXXX_STATE
          },
          secure_info(){
              return this.$store.getters.XXXX_INFO
          }
      }

        //这种状态是不会被跟踪的
        // data(){
        //     return{
        //         state:this.$store.getters.XXXX_STATE,
        //         secure_info:this.$store.getters.XXXX_INFO
        //     }
        // }
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
    right: 20%;
    /*margin-right: 200px;*/
  }
  .header{

  }
  .right{
    float: right;
    margin-right: 20%;
  }
</style>
