
exports.Sum = function(num1, num2){
       return num1+num2; 
  

}


exports.SumOfArray = function(arrayOfNums){


 var sum=0
 for(i=0;i<arrayOfNums.length;i++)
         sum+=arrayOfNums[i];
return sum
}


// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums)
{

   var sum=0
   var newArray=new Array();
   label:for(i=0;i<arrayOfNums.length;i++)
   { 
     for(j=0;j<newArray.length;j++)
     {
        if(newArray[j]==arrayOfNums[i])
               continue label;
     }
     newArray[newArray.length]=arrayOfNums[i];
     sum+=arrayOfNums[i];
   }
   return sum
}


exports.ReverseString = function(str)
{
return str.split("").reverse().join("");

}



exports.ReverseArrayOfStrings = function(arrayOfStrings){


}