/*
    NAME: Alexandru-John
    SURNAME: BENCHEA
    GRADE: 11
    DIVISION: SR-5
    SCHOOL: "GRIGORE MOISIL" NCSC BRASOV
*/
#include <iostream>
#include <cstring>
#include <cstdio>
#include <cstdlib>


using namespace std;

string a;
int vec[100];

void rev()
{
    for(int i=0; i<a.length()/2; i++)
        swap(a[i], a[a.length()-1-i]);
}

void algoritm()
{
    int op = 1;
    string ul = "";
    string cmp = "";

    int n = int(a[0] -'0');
    cout<<n<<" ";
    a.erase(0, 1);

    for(int i = a.length()-1; i>=0; i--)
    {
        for(int j=0; j<op; j++)
        {
            if(cmp=="" && a[i]=='0')
            {
                i--;
                j--;
            }
            else
            {
                cmp += a[i];
                a.erase(a.size() - 1);
                i--;
            }
        }
        i++;

        if(ul.length()<cmp.length() || ul.length()==cmp.length() && ul<cmp)
        {
            ul = cmp;
            cmp = "";
            cout<<ul<<" ";
            rev();
        }
    }
    cout<<endl;
}

int main()
{
     freopen("asc.in", "r", stdin);
     for(int i=0; i<5; i++)
     {
        cin>>a;
        algoritm();
     }
}
