/*   Do the below programs in anonymous function & IIFE

a)Print odd numbers in an array:

ANONYMOUS FUNCTION:

let array=[9,7,5,3,1,2,4,6]
let a=function(array){
    for(let i=0;i<array.length;i++){
        if(array[i]%2!==0){
            console.log(array[i]);
        }
    }
}
a(array)

IIFE(IMMEDIATE INVOVKED FUNCTION EXPRESSION):


(function(array){
    for(var i=0;i<array.length;i++){
        if(array[i]%2!==0){
            console.log(array[i]);
        }
    }
})
([9,7,5,3,1,2,4,6])


b)Convert all the strings to title caps in a string array:

ANONYMOUS FUNCTION:

var str=i like to learn javascript";
let ab= (str)=>{
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return str.join(' ');
}
console.log(ab(str));

IIFE(IMMEDIATE INVOVKED FUNCTION EXPRESSION):

var str="i like to learn javascript";
(function (str) {
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return str.join(' ');
})(str);


c)Sum of all numbers in an array:

ANONYMOUS FUNCTION:

var array=[11,22,33,44,55,66];
var sum=0;
let c =function(array){
    for(var i=0;i<array.length;i++){

    sum=sum+array[i];
    }
    return sum;
}
c(array);

IIFE(IMMEDIATE INVOVKED FUNCTION EXPRESSION):

var array=[11,22,33,44,55,66];
var sum=0;
(function(array){       
    for(var i=0;i<array.length;i++){
        sum=sum+array[i];
    }
    return sum;
})
(array)

d)Return all the prime numbers in an array:

let prime=100;

ANONYMOUS FUNCTION:

let prime=100;
let l=function (prime)
{
   for(let i=2; i<=prime; i++)
   {
      let flag=0;
      for(let j=2; j<i; j++)
      {
         if(i%j==0)
         {
            flag=1;
            break;
         }
      }
      if(flag==0)
      {
         console.log(i);
      }
   }
}
l(prime);

IIFE(IMMEDIATE INVOVKED FUNCTION EXPRESSION):

let prime=100;

(function (prime) {
    for(let i=2; i<=prime; i++)
    {
       let flag=0;
       for(let j=2; j<i; j++)
       {
          if(i%j==0)
          {
             flag=1;
             break;
          }
       }
       if(flag==0)
       {
          console.log(i);
       }
    }
})(prime);

e)Return all the palindromes in an array:

ANONYMOUS FUNCTION:

let palindrome=["mummy", "daddy","god"];

let e=function(palindrome){
    for(let i=0; i<palindrome.length; i++)
    {
        for(let j=i+1; j<palindrome.length; j++)
        {
            if(palindrome[i]==palindrome[j])
            {
                console.log(palindrome[i]);
            }
        }
    }
}

e(palindrome);

IIFE(IMMEDIATE INVOVKED FUNCTION EXPRESSION):

let palindrome=["mummy", "daddy","god"];

(function (palindrome) {    
    for(let i=0; i<palindrome.length; i++)
    {
        for(let j=i+1; j<palindrome.length; j++)
        {
            if(palindrome[i]==palindrome[j])
            {
                console.log(palindrome[i]);
            }
        }
    }
})(palindrome);

f)Return median of two sorted arrays of the same size.

ANONYMOUS FUNCTION:

let nums1=[1,3,5,7];

let nums2=[2,4,6,8];

function findmedian(nums1, nums2) {
let nums=nums1.concat(nums2);
nums.sort((a,b)=>a-b);
let median=(nums[nums.length /2 -1]+nums[nums.length /2]/2);
console.log(median);
}
findmedian(nums1,nums2)


IIFE(IMMEDIATE INVOVKED FUNCTION EXPRESSION):

let nums1=[1,3,5,7];

let nums2=[2,4,6,8];

(function (nums1, nums2) {
    let nums=nums1.concat(nums2);
    nums.sort((a,b)=>a-b);
    let median=(nums[nums.length /2 -1]+nums[nums.length /2]/2);
    console.log(median);
})(nums1,nums2);

g)Remove duplicates from an array:

ANONYMOUS FUNCTION:

var array=[1,2,2,3,4,3,4,4,5,5,9,0];

let g=function(array){

   let dup = [...new Set(array)];
   return(dup);
 }
  g(array);

  IIFE(IMMEDIATE INVOVKED FUNCTION EXPRESSION):

  var array=[1,2,2,3,4,3,4,4,5,5,9,0];
  
  (function(array){
    let dup = [...new Set(array)];
    return(dup);
  })(array);


h)Rotate an array by k times:

ANONYMOUS FUNCTION:

var array=[1,2,3,4,5,6,7,8,9];
var k=5;

let h=function(array,k){
    for(let i=0;i<k;i++)
    {
        let temp=array[0];
        for(let j=0;j<array.length-1;j++)
        {
            array[j]=array[j+1];
        }
        array[array.length-1]=temp;
    }
    return array;
}

h(array,k);

IIFE(IMMEDIATE INVOVKED FUNCTION EXPRESSION):

var array=[1,2,3,4,5,6,7,8,9];

var k=5;

(function(array,k){
  for(let i=0;i<k;i++)
  {
      let temp=array[0];
      for(let j=0;j<array.length-1;j++)
      {
          array[j]=array[j+1];
      }
      array[array.length-1]=temp;
  }
  return array;
})(array,k);           */
