function palindrome(message){
    let flag;
    for (let i = 0; i < Math.ceil(message.length/2); i++) {
         if(message[i]==message[message.length-i-1]){
             flag=true;
         }else{
             flag=false;
             break;
         }
    }
    console.log(flag);
  }
  palindrome('hello'); // should return false
  palindrome('abcba'); // should return true