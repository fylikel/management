import request from '@/utils/request.js'

export function getUserList(pageSize=10,current=1,search) {
    return request({
      url: '/interface/getUnitList',
      method: 'post',
        data: {
            "userId": "df7fb716-c7f4-4947-9c87-52a2a83b8461",
            "keyword":search,
            "page": current,
            "pageSize": pageSize,
            "unitTypeIds": [
              "1010101",
              "1010102",
              "1010103",
              "1010104",
              "1010105"
            ],
            "dataType": 0,
            "indicatorTypeIds": [
              "100002",
              "101000",
              "101001",
              "101002"
            ]
          }
    })
}

// export function getTree(areaId) {
//   return request({
//       url: '/core/interface/getNumByUnitTypeId',
//       method: 'post',
//       data: { userId: areaId } // 传递 areaId 作为 userId 参数
//   });
// }