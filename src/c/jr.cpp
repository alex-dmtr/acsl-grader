/*
  NAME: Micul JUNIOR
  DIVISION: JR-5
*/
#include <iostream>
#include <fstream>

using namespace std;

int mai()
{
  ifstream fin("asc.in");


  for (int i = 1; i <= 5; i++)
  {
    int x;
    fin >> x;

    cout << x + 1 << endl;
  }
}

