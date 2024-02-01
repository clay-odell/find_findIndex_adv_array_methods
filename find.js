function myFind (arr, callback){
    for (let i=0; i<arr.length; i++) {
        if (callback(arr[i], i, arr) === true) {
            return arr[i];
        }
    }
}

function myFindIndex (arr, callback){
    for (let i=0; i<arr.length; i++) {
        if (callback(arr[i], i, arr)) === true {
            return i;
        }
    }
    return -1;
}