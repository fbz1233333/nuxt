
import {Notice} from "iview";
export default function ({ $axios, app }) {
  // $axios.baseUrl="http://localhost:8081"
  // console.log(app.$cookies.get('token'))  //每次请求获取cooie
  // app.use(proxy('/app'),{target:'http://localhost:8081',changeOrigin:true})
  $axios.onRequest(config => {

    // 获取cookie放在头部传到后端
    // config.baseURL='http://localhost:8081'
    return config;
  });

  $axios.onError(error => {
    let errObject=error.response.data
    let code=errObject.code
    let infos=errObject.infos
    // console.log(code)
    // console.log('error in ...',errorObject.infos)

    if (code===89){

    }else if (code===88){
        Notice.error({
          title:'error',
          desc:infos
        })
    }


  });
}


