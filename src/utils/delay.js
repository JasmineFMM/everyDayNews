let delay = function (time = 1000){
    return new Promise( res =>{
        setTimeout(()=>{
            res()
        },time)
    })
}
export default delay