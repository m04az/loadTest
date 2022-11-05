var async = require('async');
var microtime = require('microtime');
var axios = require('axios')
 
var requests = [];

var oldDate =microtime.now()
console.log(oldDate)

async function main (){
    for (i=0;i<1;i++) {
        const client = new axios.Axios({})
        
        requests.push(
            client.get("http://localhost:8080/",{})
        );
    }
    
    await Promise.allSettled(requests)
    console.log(microtime.now()-oldDate)

}

main();