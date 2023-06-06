// find prime factorization of number
//            48
//           /  \
//          2    24
//              / \
//            2   12
//                / \
//               2    6
//                   / \
//                  2   3

// output = 2 2 2 2 3
// soo on you have to print left part.


let checkPrime =(n) =>
{
  if(n<=1)
  {
    return false;
  }

  for(let i=2; i<=n/2; i++)
    {
      if(n%i==0)
      {
        return false;
      }
    }
  return true;
}

let x = prompt("Enter any number");

for(let i=0; i<x; i++)
  {
    if(checkPrime(i))
    {
      let y = x;
      while(y%i==0)
        {
          console.log(i+" ");
          y=y/i;
        }
    }
  }
