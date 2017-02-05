#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main()
{
  ifstream fin("asc.in");
  string s;

  while (fin >> s)
    cout << s << endl;
  return 0;
}