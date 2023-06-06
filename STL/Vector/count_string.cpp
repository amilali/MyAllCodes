#include<bits/stdc++.h>
#include<unordered_map>

using namespace std;

int main()
{
  unordered_map<char , int> mp;

  string str = "Amilali";

  for(int i=0; i<str.length(); i++)
    {
      mp[str[i]]++;
    }

  for(auto i : mp)
    {
      cout<<i.first<<" : "<<i.second<<"\n";
    }
    return 0;
}  