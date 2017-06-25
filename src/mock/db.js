let Mock  = require('mockjs');
let Random = Mock.Random;
const DEFAULTS = {
    "returnCode": "00000000",
    "data": [],
    "total": 0,
    "success": true,
    "message": "失败请求模拟，别慌"
};

let mockData = {
    init (data) {
        for (let url in data) {
            let req = data[url]
            if(req instanceof Array){
                this.init(req)
            }else if(req instanceof Object){
                Object.assign(req, DEFAULTS)
                if (this[req.id||url]) {
                    this[req.id||url](req)
                }
            }

        }
    },
    login(data){
         Object.assign(data, Mock.mock({
            "data|1-10": [
                {
                    "fpzl": /0[1-4]{1}/,
                    "zfs|50-100" : 100,
                    "qzhz|1-10" : 3,
                    "qzlz|10-30" : 20,
                    "zf|30-50" : 30,
                    "hzje|1000-10000000.1-4" : 10000.12,
                    "hzse|1000-10000000.1-4" : 12344.022,
                    "jshj|1000-10000000.1-4" : 1000999.022,
                }
            ]
        }))
    },
    register (data) {
        Object.assign(data, Mock.mock({
            "data|1-10": [
                {
                    "fpzl": /0[1-4]{1}/,
                    "zfs|50-100" : 100,
                    "qzhz|1-10" : 3,
                    "qzlz|10-30" : 20,
                    "zf|30-50" : 30,
                    "hzje|1000-10000000.1-4" : 10000.12,
                    "hzse|1000-10000000.1-4" : 12344.022,
                    "jshj|1000-10000000.1-4" : 1000999.022,
                }
            ]
        }))
    },
    add (data) {
        Object.assign(data, Mock.mock({
            "data|1-20": [
                {
                    id: function() {return Random.natural()},
                    value: function() {return Random.csentence(5, 20)}
                }
            ]
        }))
    },
    getUsers (data) {
        Object.assign(data, Mock.mock({
            "groups|1-20": [
                {
                    name:function(){return Random.character('upper')},
                    "items|1-3":[
                        {
                          id: function() {return Random.natural()},
                            name: function() {return Random.cname()}   
                        }
                    ]
                   
                }
            ]
        }))
    }
}

/**
 * 使用说明：
 * 1.按功能大类划分API，如commonAPI、xxfpAPI
 * 2.场景一： 两级接口，如/common/getSl：在data中配置common数组，数组中配置{"id" : "getSl"}
 * 3.场景二： 三级接口，如/common/annotations/add: 在data配置common_annotations，即一级+"_"+"二级"，数组中配置{"id" : "add"}
 * 4.数据构建：在mockData中添加接口名及数据，参照getSl
 *
 * @returns {}
 */
module.exports = function() {
    var data = {
        "login": [
            {"id" : "login"}
        ],
        "register": [
            {"id" : "register"}
        ],
        "common":[
            {"id" : "getUsers"}
        ],
        "common_annotations":[
            {"id" : "add"}
        ]

    }

    mockData.init(data);

    return data;
};
