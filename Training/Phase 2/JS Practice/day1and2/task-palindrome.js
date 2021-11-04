//palindrome

var str = 'madam'
var len = str.length
//console.log(len)

var flag =1

for(i=0; i<=len/2;i++){
    if(str[i] !== str[len-1-i]){
        flag = 0;
        break;
    }
}

if(flag==1){
    console.log('Palindrome')
}
else{
    console.log('Non-Palindrome')
}

//Palindrome