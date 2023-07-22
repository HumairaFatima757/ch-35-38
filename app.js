// function date(){
//      let today = new Date();
//      return today;

// }

//  let a =  date();
//  document.write(a);

// ===== 2
// function greetUser(){
//     let firstName = prompt("enter your first name "); 
//     let lastName = prompt("enter your last   name "); 
// document.write ("hellow " + firstName+" " + lastName)

// }
// greetUser();


// =====3

// let firstNum = +prompt("enter your first number that you wan't to add "); 
// let secondNum = +prompt("enter your second number that you wan't to add "); 
// function sum(){
        
//     document.write(firstNum + secondNum)
     
//      }
//      sum();

//=====4

// function calculator(num1,num2,operator){
//    if (operator === "*"){
//     return num1*num2   
// }else if (operator === "-"){
//      return num1-num2   
//  }else if (operator === "/"){
//      return num1/num2   
//  }else if (operator === "+"){
//      return num1+num2   
//  }else{
//      document.write("you input a wrong operator")
//  }
// }

// let cal = calculator(2,5,"/");
// document.write("your answer is "+  cal)

// ==== 5
// function square(number){
//      return number*number
// }
// let sq = square(7);
// document.write(sq)

// === 6 

// let fact = 1;
// function factorial(num){
//      for(let i=num;i>=1;i-- ){
//         fact = fact * i;
//      }
//           document.write(fact)
//            }
// factorial(3);


// ====7

// function counting(){
// let start = +prompt("enter start number")
// let end1 = +prompt("enter end number")
// for(let i=start; i<= end1;  i++){
//      document.write(i + "<br>");
// }
// }
// counting();


// =====8

// function calcuateHypoten(){
// let base = +prompt("enter the base of right angle triangle");
// let perpendicular = +prompt("enter the base of right angle triangle");
// function calculateSquare(){
//       let b = base*base;
// let c = perpendicular*perpendicular;
// let h = b+c;
//      let n = Math.sqrt(h)
//         return(n)}
//     let s =  calculateSquare();
//     document.write(s)

// }

// calcuateHypoten();

// ===9
// let h = 20;
// function areaOfRectangle(width,height){

//     let area = width*height;
//     document.write("Area of rectangle :" +area);
// }
// areaOfRectangle(20,h);

// ====10



// function findPalindrome (input){
//     let len = inp.length;

// for(let i=0;i<len/2;i++){
//     if (inp[i] !== inp[len-1-i]){
//    alert("its not a palindrome")
//    break;
//     }
//     else{
//         document.write("its a palindrome")
//         break;
//     }
// }


// }
// let inp  = prompt("enter the string to check its palindrome or not ")
// let out = findPalindrome(inp);
// console.log(out)

// ====11
//  function firstWordUpper(str){
//   let n = str.split(' ');
// let fir = str.charAt(0).toUpperCase();

// let rem = str.slice(1);

// let final = fir.concat(rem);
// document.write(` ${final}   `)

// for (i=0 ; i.n.length ; i++){
//   if(n.charAt(i)=== " "){
//    let f =  n.charAt(i+1).toUpperCase();
//     //  document.write(f)
//      str.slice()

//   }
// }
//   // for(let i = 0 ; i <n.length ; i++){
//   //     if( str[i]=== ' '){
       //   // let y =  str[i+1].toUpperCase();

//   // str = str.replace(y,str[i+1])
//   //    document.write(y) 

//     // }
//     //  return y
  
//   // }
 
// }

// firstWordUpper('the great leader')


// ====12
// function findlongword(str){
//   let strSplit = str.split(' ');
//   // document.write(strSplit)
//   let longWord = '';
//   for(let i=0 ; i < strSplit.length ; i++){
//     if(strSplit[i].length > longWord){
//         longWord = strSplit[i].length;
         
//     }
// }
// return longWord;
// }
// let t = findlongword("the great leader or");
// document.write(t)

// ======13
// function countVariable (str,letter){
//     let count= 0 ;
//     for(let i = 0; i<str.length; i++){
//       if (str.charAt(i) == letter){
// count +=1;
// }

// } return count ;
// }
// let str1 = prompt("enter the string")
// let letter1 = prompt("enter the letter which you wan't to find ")
// let result = countVariable(str1,letter1)

// document.write(result)


// =====14
// function circumference(radius){
// let pi = 3.142;
//   circum = 2*pi*radius

//   document.write("the circumference is : "+ circum + "<br>" )
// }
// function calcArea(radius){
// let pi = 3.142;
//   area = pi*(radius^2)

//   document.write("the area of circle  is : "+ area )
// }
// circumference(4);
// calcArea(2)