const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
];

function findUserByUsername (array, key){
    return array.find(function(username){
        return username.key === key;
    })
};

/////////////////////////////////////////////////////

function removeUser (userArray, key){
    let newIdx = userArray.findIndex(function(del){
        return del.key === key;
    })
    if(newIdx === -1){
        return undefined;
    }
    return userArray.splice(newIdx , 1)[0];
};