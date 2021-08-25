var array =[5,3,4,1] 
    for(var x=0; x<array.length; x++) {
        for(var y= array.length-1; y>=x; y--)
        {
            if (array[x]>array[y])
        { var temp = array[y];
          array[y] = array[x];
          array[x] = temp;
        }
    }
}
console.log(array);

//answer:[1,3,4,5]

var number ='';
var x = 5;

while(x<10) {
    number +=x; x++;
}
console.log(number);

//in concatenate: 56789

var x= 1;
var y= 48;

while(x<100)
{
    if(x==y)
{
    break;
}
x++;
}
console.log(x)
    