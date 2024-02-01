function myFind (arr, callback){
    for (let i=0; i<arr.length; i++) {
        if (callback(arr[i], i, arr) === true) {
            return arr[i];
        }
    }
}

function myFindIndex (arr, callback){
    for (let i=0; i<arr.length; i++) {
        if (callback(arr[i], i, arr) === true) {
            return i;
        }
    }
    return -1;
}

function findUserByUsername(arr, username) {
    return arr.find(function(users) {
        return users.username === username;
    })
}
const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];
  
  const findAnswer1 = findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
  const findAnswer2 = findUserByUsername(users, 'taco') // undefined

  function removeUser (arr, username){
    let foundIndex = arr.findIndex(function(user) {
        return user.username === username;
    })
    if(foundIndex === -1) return;
    return arr.splice(foundIndex,1)[0];
  }
  const users2 = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];
  
const findIndexAnswer1 = removeUser(users, 'akagen') // {username: 'akagen'}
const findIndexAnswer2 = removeUser(users, 'akagen') // undefined