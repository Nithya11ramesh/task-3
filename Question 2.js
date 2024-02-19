/*
Do the below programs in arrow functions.

a)Print odd numbers in an array:

ARROW_FUNCTION:

let array=[9,7,5,3,1,2,4,6]

let a=(array)=>{
    for(let i=0;i<array.length;i++){
        if(array[i]%2!==0){
            console.log(array[i]);
        }
    }
}

a(array)


b)Convert all the strings to title caps in a string array

let str="i like to learn javascript";

let ab= (str)=>{
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
}

console.log(ab(str));   


c)Sum of all numbers in an array:

ARROW_FUNCTION:

let array=[11,22,33,44,55,66];
let sum=0;

let c=(array)=>{
    for(let i=0;i<array.length;i++){
        sum=sum+array[i];
    }
    return sum;
}

console.log(c(array));

d)Return all the prime numbers in an array

ARROW_FUNCTION:

let prime=100;

let l=(prime)=>{
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


e)Return all the palindromes in an array:

ARROW_FUNCTION:

let palindrome=["mummy", "daddy","god"];

let e=(palindrome)=>{

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
*/