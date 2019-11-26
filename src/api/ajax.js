import Axios from 'axios';

// export default function ajax(url='', data={}, type='GET') {
//     return new Promise(function (resolve, reject) {
//         let promise;
//         if(type === 'GET'){
//             let dataStr = '';
//             Object.keys(data).forEach(key =>{
//                 dataStr += key + "=" + data[key] + "&"
//             })
//             if(dataStr !== ''){
//                 dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'));
//                 url = url + "?" + dataStr
//             }
//         promise = Axios.get(url)
//         }else{
//             promise = Axios.post(url, data);
//         }
//
//         promise.then(response =>{
//             resolve(response.data)
//         })
//             .catch(error=>{
//                 reject(error)
//             })
//     })
//
// }
export default async function ajax(url='', data={}, type='GET') {
    return await Axios({
        method: type,
        params: data,
        url:url
    }).then(response=>{
        return response.data
    }, error=>{
        return error
    })
}
