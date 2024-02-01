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

  