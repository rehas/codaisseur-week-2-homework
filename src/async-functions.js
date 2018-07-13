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
    return new Promise((resolve, reject)=>{
        giveItBackLater(value, ()=>{
            return resolve(value)
        })
    })
}
function addSomePromises(){}

// giveItBackLater("hello", x=>x+x)