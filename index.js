function receivesAFunction(cb){
    cb();
}
function returnsANamedFunction(){
    return function beforeAll(){
        console.log('before all');
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        
    };
}