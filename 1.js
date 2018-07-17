const Thenjs = require('thenjs');
const fetch = require('node-fetch');

const api = 'http://rapapi.org/mockjsdata/18728/fetchtest';
let requests = [];
for(let i = 0; i < 10; ++i){
    let obj = {};
    obj.url = api;
    obj.count = i + 1;
    requests.push(obj);
} 

const batchRequest = (urls) => {
  Thenjs
  .each(urls, (cont, obj) => {
    fetch(obj.url)
    .then(res => res.json())
    .then(res => {
      console.log(JSON.stringify(res) + '' + obj.count);
      // cont(null, res)
    })
  })
  .then(
    (cont, result) => {
      console.log("======")
      console.log(result)
    }
  )
  
}

batchRequest(requests);


