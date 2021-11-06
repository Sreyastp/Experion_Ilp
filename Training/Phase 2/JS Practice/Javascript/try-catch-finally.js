//Handling errors in js

const numerator = 100 , denominator = 'a';

try{
    console.log(numerator/denominator);
    console.log(a);
}
catch(error){
    console.log('An error caught');
    console.log('Error Message : ' + error);
}
finally{
    console.log('Finally will execute every time');
}