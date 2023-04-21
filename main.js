
function IsPalindrom(number) {
    

var x,y,num=0 ;
y=number;
while( number > 0)
{
    x=number%10;
    number=(number-x)/10;
    num=num*10+x;
}
if (num==y)
{
console.log("Eded polindromdur") ;
}
else {
    console.log("Eded polindrom deyil");
}

}
IsPalindrom(565)