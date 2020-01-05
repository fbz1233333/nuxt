
import {Notice} from "iview";
export default function ({ $axios, app }) {
  // $axios.baseUrl="http://localhost:8081"
  // console.log(app.$cookies.get('token'))  //每次请求获取cooie
  // app.use(proxy('/app'),{target:'http://localhost:8081',changeOrigin:true})
  $axios.onRequest(config => {
    config.headers={
      LOGIN_USER_ID:app.$cookies.get('LOGIN_USER_ID'),
      LOGIN_USER_TOKEN:app.$cookies.get('LOGIN_USER_TOKEN'),
    }
    // 获取cookie放在头部传到后端
    // config.baseURL='http://localhost:8081'
    return config;
  });

  $axios.onError(error => {
    console.log('error in ...',error.response.data.infos)
    for (let i=0;i<error.response.data.infos.length;i++){
      Notice.error({
        title:'Error',
        desc:error.response.data.infos[i],
        render:h=>{
          return h('div','restore')
        }
      })
    }


  });
}

import axios from 'axios'

export const myaxios = axios.create({})
