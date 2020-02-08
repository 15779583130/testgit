import axios from '@/http/axios'
import http from '@/framework/http'
import EnvelopUtil from '@/framework/EnvelopUtil'
import global from '@/utils/global.js'



//单行删除
// export const singleDelete = (params) => {
//   var temp = false;
//   if(global.reqService=="local" && temp){
//     return new Promise((resolve,reject)=>{
//       var data=EnvelopUtil.convertXmlFileToXml('sys/user/data/delete.xml','none');
//       var obj ={
//         "success": data.getHeader().getNode().getNodeItem('success'),
//         "message":  data.getHeader().getNode().getNodeItem('message'),
//         "data": null
//       }
//       resolve(obj);
//     })
//   }else if(global.reqService=="remote" ||!temp){
//     return new Promise((resolve,reject)=>{
//       http.post('/service/pzgl/cfwz', 'del', params, true, '').then((data)=>{
//         var obj ={
//           "success": data.getHeader().getNode().getNodeItem('success'),
//           "message":  data.getHeader().getNode().getNodeItem('message'),
//           "data": null
//         }
//         resolve(obj);
//       });
//     })
//   }
// }

/**
 * 查询接口配置列表
 * @author  姚昱丹
 * @modify  1.00  2019/12/31   姚昱丹   无     新建
 */
export const queryTable =(params)=>{
  var temp = false;
 if(global.reqService=="remote"||!temp){
    return new Promise((resolve,reject)=>{
      http.post('/service/auth/log', 'query', params, true, '').then((data)=>{
        resolve(data.getBody().getValueofBody());
      });
    })
  }

}


export const changeStatus =(params)=>{
  var temp = false;
  if(global.reqService=="remote"||!temp){
    return new Promise((resolve,reject)=>{
      http.post('/service/auth/api', 'update', params, true, '').then((data)=>{
      var obj = {
        "success": data.getHeader().getNode().getNodeItem('success'),
        "message": data.getHeader().getNode().getNodeItem('message'),
        "data": null
      }
      resolve(obj);
  });
  })
  }
  }
  
  
  export const getGg =(params)=>{
    var temp = false;
    if(global.reqService=="local" && temp){
      return new Promise((resolve,reject)=>{
        var data = EnvelopUtil.convertXmlFileToXml("ckgl/bmckgl/wzcw/data/queryTable.xml", 'none')
        resolve(data.getBody().getValueofBody());
      })
    }else if(global.reqService=="remote" || !temp){
      return new Promise((resolve,reject)=>{
        http.post('/service/auth/log', 'get', params, true, '').then((data)=>{
          var obj ={
            "success": data.getHeader().getNode().getNodeItem('success'),
            "message":  data.getHeader().getNode().getNodeItem('message'),
            "data": data.getBody().getValueofBody()
          }
          resolve(obj);
        });
      })
    }
  }







// /**
//  * 导出入库交接台账
//  * @param params
//  * @returns {Promise<unknown>}
//  */
// export const exportRktz = (params) => {
//   return new Promise((resolve, reject) => {
//     http.post('/service/wzjj/wzjj/wzjjtzservice', 'exportExcel', params, true, '').then((data) => {
//       var obj = {
//         "success": data.getHeader().getNode().getNodeItem('success'),
//         "message": data.getHeader().getNode().getNodeItem('message'),
//         "data": data.getBody().getNode().getNodeItem('fileurl')
//       }
//       resolve(obj);
//     });
//   })
// }
