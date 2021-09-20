var button=document.querySelector("#btn");
var output=document.querySelector("#result");
var input1=document.querySelector("#bday-input");


//  POINT 1 -js string and its reverse=====>>>>>>>>
// var str="heko";  
 
function reverseStr(str){
//   var listOfChars=str.split("");
//   var reverseListOfChars=listOfChars.reverse("");
//   var reversedStr=reverseListOfChars.join("");

//   return reversedStr;
                    // or 
  return str.split("").reverse("").join("");
  

}

// console.log(reverseStr(str));



// POINT 2- Js function to checck for palindrome======>>>.

function isPalindrome(str){
var reverse=reverseStr(str);
//  if(str==reverse){
//    return True;}
// else{
//   return  "notGOOd or False";
// }
    //  or
return str==reverse;
}
// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("525"));
// console.log(isPalindrome("Liar"));


// POINT -3  converts  date from number to string====>>>>>

function convertDateToStr(date){
 var dateStr={day:"",
 month:"",
 year:""};
 if(date.day<10){
   dateStr.day="0"+ date.day;
 }
 else{dateStr.day=date.day.toString()};
 
 if (date.month <10)
 {
   dateStr.month="0"+ date.month;
 }
else{
  dateStr.month=date.month.toString();
}

dateStr.year=date.year.toString();
return dateStr;}





//POINtT 4 js which takes a date and return all variation of it=====>>>>>>

function getAllDateFormats(date){
 var dateStr= convertDateToStr(date);

 var ddmmyyyy=dateStr.day + dateStr.month +dateStr.year;
 var mmddyyyy=dateStr.month + dateStr.day +dateStr.year;
 var ddmmyy=dateStr.day + dateStr.month+ dateStr.year.slice(-2);
 var yymmdd=dateStr.year.slice(-2) +dateStr.month + dateStr.day ;
 var mmddyy=dateStr.month + dateStr.day+ dateStr.year.slice(-2);
var yyyymmdd=dateStr.year + dateStr.month + dateStr.day  ;

return [ddmmyy,ddmmyy,ddmmyyyy,mmddyy,mmddyyyy,yymmdd,yyyymmdd

]
}



// POINT-5== function to check palindrome for all dateformats====>>>>

function checkPalindromeForAllDateFormats(date){
  var listOFPalindromes=getAllDateFormats(date);
  var flag =false;

  for(var i=0; i<listOFPalindromes.length;i++ )
  {   
    // console.log("outside if "+ i);
    if (isPalindrome(listOFPalindromes[i]))
    {
      //  console.log("inside if "+ i);
      flag=true;
      
      break;
    }
  }
  return flag;

}


// POINT 6 --Finding next Palindrome date and days between====>


function isleapYear(year){

  if(year%400===0){
    return true;
  }
  if(year%100!==0){
    return true;
  }
  if (year%4 ===0){
    return true;
  }
  return false;
}


function getNextDate(date){
  console.log("her")
  var day=date.day+1;
  var month=date.month;
  var year =date.year;
  var dayInMonth=[31,28,31,30,31,30,31,31,30,31,30,31] ;

if(month===2){
  if (isleapYear(year)){
    if (day>29){
      day=1;
      month++;
    }
  }
  else{
    if(day>28){
      day=1;
      month++;
    }
  }
  
}

else {
  if (day>dayInMonth[month-1]){
    day=1;
    month++;
  }
}
if (month>12){
  month=1;
  year++;
}
return {

  day:day,
  month:month,
  year:year
};
}


function getNextPalindromeDate(date){
  var ctr=0;
  var nextDate=getNextDate(date);
  
 
 while(1){
   ctr++;
   var isPalindrome=checkPalindromeForAllDateFormats(nextDate);
   if (isPalindrome){
     break;
   }
   nextDate=getNextDate(nextDate);
 }

 console.log(ctr)
 return [ctr,nextDate];

}

var date= 
{};
// var date={day:22,
// month:2,
// year:2022
//   // }





function clickHandler(e){
  console.log(input1.value);
  var bdayStr=input1.value;
if (bdayStr!=="")
{
  var listOfDate=bdayStr.split("-");

   date={
    day:Number(listOfDate[2]),
    month:Number(listOfDate[1]),
    year:Number(listOfDate[0])
  };
  var isPalindrome=checkPalindromeForAllDateFormats(date);
  if (isPalindrome){
    output.innerText="yay! your birthday is palindrome";
  }
  else{
    var [ctr,nextDate]=getNextPalindromeDate(date);
    console.log(nextDate)
    output.innerText=`The palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year} \n you missed it by ${ctr} `;
    // ${nextDate.day}-${nextDate.month}-${nextDate.year} /n + ${ctr} "days ";
  }
}
}







button.addEventListener("click",clickHandler)


  // console.log(getAllDateFormats(date));
  // console.log(checkPalindromeForAllDateFormats(date));
//  console.log(ctr+" "   getNextPalindromeDate(date));

// =================================================================


// function getPreDate(date){
//   var day=date.day-1;
//   var month=date.month;
//   var year =date.year;
//   var dayInMonth=[31,28,31,30,31,30,31,31,30,31,30,31] ;

// if(month===2){
//   if (isleapYear(year)){
//     if (day<1){
//       day=29;
//       month--;
//     }
//   }
//   else{
//     if(day<1){
//       day=28;
//       month--;
//     }
//   }
// }

// else {
//   if (day>dayInMonth[month-1]){
//     day=1;
//     month++;
//   }
// }
// if (month>12){
//   month=1;
//   year++;
// }
// return {

//   day:day,
//   month:month,
//   year:year
// };
// }


// function getNextPalindromeDate(date){
//   var ctr=0;
//   var nextDate=getNextDate(date);
 
//  while(1){
//    ctr++;
//    var isPalindrome=checkPalindromeForAllDateFormats(nextDate);
//    if (isPalindrome){
//      break;
//    }
//    nextDate=getNextDate(nextDate);
//  }
//  return [ctr,nextDate];




// }










 

 
