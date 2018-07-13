function pathFind(path, object){
    return (path.length < 2) 
        ? object[path[0]] 
        : pathFind(path.slice(1), object[path[0]])
}

module.exports = {pathFind}
