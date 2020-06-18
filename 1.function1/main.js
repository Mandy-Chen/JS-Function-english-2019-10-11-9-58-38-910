function reverseString(message){
    let arr=[];
    for(let i=message.length-1;i>=0;i--){
        arr.push(message[i]);
    }
    console.log(arr)
  }
  reverseString('hello'); // should return 'olleh'