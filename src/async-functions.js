module.exports ={
    giveItBackLater,
    addSomePromises,
    promiseToGiveItBackLater
}

function giveItBackLater(value, callback){
    function loadMe(x){
        callback(x)
    }
    setTimeout(loadMe(value), 2000)
}

function promiseToGiveItBackLater(value){
    return new Promise((resolve)=>{
        giveItBackLater(value, ()=>{
            return resolve(value)
        })
    })
}

function addSomePromises(prevPromise){
    return new Promise((resolve, reject)=>
        {
            prevPromise
            .then((prevPromiseResolution)=>{
                return resolve(prevPromiseResolution+prevPromiseResolution)
            })
            .catch((prevPromiseRejection)=>{
                return resolve(prevPromiseRejection+prevPromiseRejection+prevPromiseRejection)

            })
        }
    )
}