const axios = require('axios') 
const obj={
  name:"forever",
  password:"forever99"
}
axios.get('https://service-l3d0ks19-1303185100.sh.apigw.tencentcs.com/release/myserver').then(res=>{
  console.log(res.data);
})