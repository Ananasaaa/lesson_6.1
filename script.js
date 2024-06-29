
function delLett(string, ...symbol){

    let strArr = string.split('');

     let newStr = strArr.filter((elem) => !symbol.includes(elem))

    return newStr.join('');
};

let result = delLett('javascript', 'a', 's');
console.log(result);












// function deleteLetters(string, ...symbol) {
    
//     let newStr = '';

//      for(let i = 0; i < string.length; i++) {
         
//          for(let j = 0; j < symbol.length; j++) {
             
//              if(string[i] !== symbol[j]) {
                 
//                  if(newStr[i] === symbol[j + 1]){
//                      newStr += string.substring([i],[i + 1]);
                     
//                      } else {
//                          continue;
//                      }
                         
//                  } else {
//                     break;
//                  }
//             } 
//          }
//     return newStr;   
// };

// let result = deleteLetters('zoomagazin', 'o', 'a', 'i');
// console.log(result);




