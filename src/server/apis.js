import service from "./index"

let apis = {
    // 新闻列表的接口
    getList:()=>{
        return service.get("/list")
    },
    // 新闻详情页的接口
    getDetail:(id)=>{
        return service.get(`/detail?id=${id}`)
    }
}

export default apis