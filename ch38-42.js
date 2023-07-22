// q==== 1 

// function power(a,b){
// for(i=0;i<=b;i++){
//     let res = a**b
//     return res
// }
// }
// let y = power(4,3);
// document.write(y);

// q2=====

// let input = prompt("Enter the input year")
// function leapYear(year){
// if (year%4 !== 0){
//     document.write("its not  a leap year")
// }else{
// document.write("its a leap year")}
// }
// leapYear(input);

// q3====

// let a = +prompt("enter the a side of triangle ");
// let b = +prompt("enter the b side of triangle ");
// let c = +prompt("enter the c side of triangle ");
// function calculateS(){
//     S = (a+b+c)/2;
// }
// function areaOfTriangle () {
//     calculateS();
//   let A = S*(S-a)*(S-b)*(S-c)
// document.write ("the area of triangle " + A)
//    }
// areaOfTriangle();


// q====4 
// let subj1 = +prompt("Enter your subject1 marks");
// let subj2 = +prompt("Enter your subject2 marks");
// let subj3 = +prompt("Enter your subject3 marks");
// let totalMarks = 300;
// let obtainMarks = subj1+subj2+subj3;

// function marksAndAverage(){
//     let p = percentage(obtainMarks,totalMarks);
//     document.write("the percentage of marks is " + p + " % <br>")
//      average();
  // }
// marksAndAverage();
// function percentage (obtMarks,totMarks){
//      let percen = (obtMarks/totMarks)*100;
// return percen
// }
// function average(){
//       let y = obtainMarks / 3 ;
//       document.write( "the average of marks is " + y + " avg <br>") 
// }

// ===q5

// let string = "yahoo baba"
// let r = string.indexOf("a");
// document.write(r)



// ====q6 

// function delVowels(texts){
//           let p = texts.replace(/[aeiou]/gi, '')
//                        return p 
//                           }
//            let y = delVowels("the great leader");
//            document.write(y)

// =====q 7

// let vowels =  ["a","e","i","o","u"]
//  function check2Vowels(text){
//      for(i= 0; i<vowels.length; i++){
//   switch (vowels){
//   case a:
//     document.write("here is ae")
  
//   }
//      }
//     }
//   check2Vowels("the great leader")



// q======== 8
// let acity = prompt("enter the greater  distance of  city in km")
// let bcity = prompt("enter the lesser distance of second city in km")
// let citydis = acity- bcity;

// function distanceInM(){
// citydis = citydis*1000;
// document.write( "distance in meter : "+citydis  + "<br>")

// }
// function distanceInCm(){
// citydis = citydis*100000;
// document.write( "distance in centimeter : "+citydis + "<br>")

// }
// function distanceInInches(){
//   citydis  = citydis*39370.07874
//   document.write("distance in inches: "+ citydis  + "<br>")
// }

// function distanceInFeet(){
//   citydis  = citydis*3280.84
//  document.write("distance in feet : "+ citydis  + "<br>")
// }


// distanceInM();
// distanceInCm();
// distanceInInches();
//  distanceInFeet();



// q======9
// let overpay = 12.00;
// let input = +prompt("enter the hour which you have work ")
// function overTime(hour){
//   if(input>40){

// document.write(" you overpay is : "+input *12.00)
//   }
//   document.write(" you did not work overtime ")
// }
// overTime(input);



// q====10
// let n1= 4*100;
// let n2 = 1*50;
// let n3 = 2*10
// let withDraw = prompt("enter the amount which you wan't to withdraw ")
// function denomination(){
 

let input = prompt("enter the amount of money which you have ");
if(input.length>2 && input.length<4){
  let i = input.slice(0,1);
  document.write("you have "+ i + " notes of hundred" + "<br>")

  let b= input.slice(1,3)
// document.write(b)
  if(b>50){
    let c= b - 50  ;
    document.write("you have 1 note of 50  <br>" )
    let o = c.toString();
  
  if (o.length>1 && o.length<3){
    let p = o.slice(0,1) 
    let q = o.slice(1,2);
    document.write("you have " + p + "notes of 10  <br> " )
    document.write("you have " + q + "coins of 1   <br>" )
      
}
else{
  let r = o.slice(0,1)
  document.write("you have " + r + "coins of 1  <br> " )

}
}
  else{
    document.write("you have 0 note of 50  <br>")
    let e = b.toString();
    let f = e.slice(0,1);
    document.write("you have " + f +" note of 10 <br> " )
  
let j = input.slice(2,3)
document.write("you have " +j + " coins ")

 
  }
}



//   document.write("you have "+ d + " notes of 10") }
//   else{
//     document.write("you have "+ g  + " note of 10 ")

//   }
//   // if(c>0)
//   // document.write("you have " + d +" note  of 10 ")
//   // else{
//     // document.write("you have 0 note of 10 ")
//   // }
//   // alert(c)
//   // 0 pe minus me ans de raha 
  
//   // alert("you have " + d +"note  of 10 ")
// let e = input.slice(2,3);

// if(e>0) {
//   document.write("you have "+ e + " coins ")}
// else{
//   document.write("you have 0 coins ")}
// }
else{
  document.write("please enter the amount in hundred ")

   }

  
 
