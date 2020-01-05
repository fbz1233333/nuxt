import cookie from 'js-cookie';
import axios from "axios";
export const state = () => ({
  LOGIN_STATE:cookie.get('LOGIN_STATE') ||"",
  LOGIN_USER_ID:cookie.get("LOGIN_USER_ID") || "",
  LOGIN_USER_NAME:cookie.get("LOGIN_USER_NAME") || "",
  LOGIN_USER_TOKEN:cookie.get("LOGIN_USER_TOKEN") || "",

  LoginDrawer:false

})
export const getters= {
  getLoginDrawer(state){
    return state.LoginDrawer
  },


  XXXX_STATE(state){
    return state.LOGIN_STATE
  },
  XXXX_ID(state){
    return state.LOGIN_USER_ID
  },
  XXXX_NAME(state){
    return state.LOGIN_USER_NAME
  },
  XXXX_TOKEN(state){
    return state.LOGIN_USER_TOKEN
  },
  XXXX_INFO(state){
    return {
      'LOGIN_USER_ID':cookie.get('LOGIN_USER_ID'),
      'LOGIN_USER_NAME':cookie.get('LOGIN_USER_NAME'),
      'LOGIN_USER_TOKEN':cookie.get('LOGIN_USER_TOKEN'),
    }
  }
}
export const mutations = {
  setLoginDrawer(state,data){
    state.LoginDrawer=data
  },


  XXXX_LOG_IN(state,result){
    console.log('user XXXX_Store..')
    state.LOGIN_STATE='ON'
    state.LOGIN_USER_ID=result.userInfo.id;
    state.LOGIN_USER_NAME=result.userInfo.name;
    state.LOGIN_USER_TOKEN=result.token;
    cookie.set('LOGIN_STATE','ON',{expires:1})
    cookie.set('LOGIN_USER_ID',result.userInfo.id,{expires:1})
    cookie.set('LOGIN_USER_NAME',result.userInfo.name,{expires:1})
    cookie.set('LOGIN_USER_TOKEN',result.token,{expires:1})
    axios.interceptors.request.use(config=>{
      config.headers={
        "LOGIN_USER_ID":cookie.get('LOGIN_USER_ID'),
        "LOGIN_USER_TOKEN":cookie.get('LOGIN_USER_TOKEN')
      }
      return config
    })
  },
  XXXX_LOG_OUT(state){
    state.LOGIN_STATE='OUT'
    state.LOGIN_USER_ID=""
    state.LOGIN_USER_NAME="";
    state.LOGIN_USER_TOKEN="";
    cookie.set('LOGIN_STATE','')
    cookie.remove('LOGIN_USER_ID')
    cookie.remove('LOGIN_USER_NAME')
    cookie.remove('LOGIN_USER_TOKEN')
    axios.interceptors.request.use(config=>{
      config.headers={
      }
      return config
    })
  }
}

