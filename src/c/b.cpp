/*
  NAME: Andrei IVANOVICI
  DIVISION: INT-5
*/
#include <iostream>
#include <fstream>

using namespace std;

int main()
{
  ifstream fin("asc.in");


  for (int i = 1; i <= 5; i++)
  {
    int x;
    fin >> x;

    cout << x * 2 << endl;
  }
}

