function titleCase(string) {
    var sentence = string.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
 document.write(sentence.join(" "));
 return sentence;
 }
 console.log(titleCase("hello im abdul rehman from karachi"));

//  function toTitleCase(str) {
//     return str.replace(
//       /\w\S*/g,
//       function(txt) {
//         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//       }
//     );
//   }