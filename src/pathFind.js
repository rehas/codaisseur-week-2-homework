function pathFind(path, object){
    // console.log(path, object);
    
    // const res = path.reduce((agg, cv, index)=>{
    //     console.log(`agg is ${agg}`);
    //     console.log(`cv is ${cv}`);
        
    //     return object[cv]
    // })
    
    // if(path.length === 0){
    //     return "hello"    
    // }
    // return "hola"

    // Until path.length === 1 
    // Get path[0]
    // Get object[path[0]]
    // recall function with (newPathExceptTheFirstItem, object[PreviousPathPath[0]] )

    // console.log(`this is path ${path} -- this is popped ${path[0]} -- this is new path ${path.slice(1)}`)
    // console.log(`This is path after slice ${path}`)

    // WORKING CODE EXCEPT RECURSION DON'T DELETE BELOW COMMENT BLOCK

/*     if (path.length < 2){
        console.log(object[path[0]])
        return object[path[0]]
    }

    return pathFind(path.slice(1), object[path[0]]) 
*/

    return (path.length < 2)? object[path[0]] : pathFind(path.slice(1), object[path[0]])

}

module.exports = {pathFind}

console.log (pathFind(["book", "author", "name"], {
    book: {
      author: {
        name: "Yuval"
      }
    }
  })
)