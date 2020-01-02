export default function ({ $axios, app }) {
  // $axios.baseUrl="http://localhost:8081"
  // console.log(app.$cookies.get('token'))  //每次请求获取cooie
  $axios.onRequest(config => {
    //获取cookie放在头部传到后端
    // config.baseURL='http://localhost:8081'
    return config;
  });

  $axios.onError(error => {
    console.log('error in ...')
  });
}
