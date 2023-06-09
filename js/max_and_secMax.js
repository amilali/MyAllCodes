// max and second max element in array

let arr = [1,2,3,4,5];

let maxi = Number.MIN_VALUE;

let SEC_maxi = Number.MIN_VALUE;

for(let i of arr)
  {
    if(i>maxi)
    {
      maxi =i;
    }
  }

console.log("Max Element is "+maxi+"\n");

for(let i of arr)
  {
    if(i!=maxi && i>SEC_maxi)
    {
      SEC_maxi = i;
    }
  }
console.log("Second Max Element is "+SEC_maxi+"\n");
