module.exports ={
    giveItBackLater,
    addSomePromises,
    promiseToGiveItBackLater
}

function giveItBackLater(value, callback){
    function loadMe(x){
        callback(x)
        // return x
    }
    setTimeout(loadMe(value), 2000)
    // setTimeout(callback, 2000, value)
};
function promiseToGiveItBackLater(value){
    return new Promise((resolve)=>{
        giveItBackLater(value, ()=>{
            return resolve(value)
        })
    })
}
function addSomePromises(prevPromise){
    return new Promise((resolve, reject)=>{
        prevPromise
        .then((prevPromiseResolution)=>{
            return resolve(prevPromiseResolution+prevPromiseResolution)
        })
        .catch((prevPromiseRejection)=>{
            return resolve(prevPromiseRejection+prevPromiseRejection+prevPromiseRejection)

        })
    })
}

// giveItBackLater("hello", x=>x+x)