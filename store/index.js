import cookie from 'js-cookie';
export const state = () => ({
  loginState:cookie.get('loginState') ||"",
  loginUserId:cookie.get("loginUserId") || "",
  loginUserName:cookie.get("loginUserName") || "",
  loginUserToken:cookie.get("loginUserToken") || "",

  LoginDrawer:false

})
export const getters= {
  getLoginDrawer(state){
    return state.LoginDrawer
  },


  XXXX_STATE(state){
    return state.loginState
  },
  XXXX_ID(state){
    return state.loginUserId
  },
  XXXX_NAME(state){
    return state.loginUserName
  },
  XXXX_TOKEN(state){
    return state.loginUserToken
  },
  XXXX_INFO(state){
    return {
      'loginUserId':cookie.get('loginUserId'),
      'loginUserName':cookie.get('loginUserName'),
      'loginUserToken':cookie.get('loginUserToken'),
    }
  }
}
export const mutations = {
  setLoginDrawer(state,data){
    state.LoginDrawer=data
  },


  XXXX_LOG_IN(state,result){
    console.log('user XXXX_Store..')
    state.loginState='ON'
    state.loginUserId=result.userInfo.id;
    state.loginUserName=result.userInfo.name;
    state.loginUserToken=result.token;
    cookie.set('loginState','ON',{expires:1})
    cookie.set('loginUserId',result.userInfo.id,{expires:1})
    cookie.set('loginUserName',result.userInfo.name,{expires:1})
    cookie.set('loginUserToken',result.token,{expires:1})
    myaxios.interceptors.request.use(config=>{
      config.headers={
        "loginUserId":cookie.get('loginUserId'),
        "loginUserToken":cookie.get('loginUserToken')
      }
      return config
    })
  },
  XXXX_LOG_OUT(state){
    state.loginState='OUT'
    state.loginUserId=""
    state.loginUserName="";
    state.loginUserToken="";
    cookie.set('loginState','')
    cookie.remove('loginUserId')
    cookie.remove('loginUserName')
    cookie.remove('loginUserToken')
    myaxios.interceptors.request.use(config=>{
      config.headers={
      }
      return config
    })
  }
}

import {myaxios} from '../plugins/axios'
