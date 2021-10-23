function initFunction(){
    console.log("ready to go");


        //querySelector() method returns the first elemnts that matches 
        // a specified

        //specify for identifying the elements
         const button=document.querySelector("button");
         const txtName =  document.getElementById("name")! as HTMLInputElement;
         const txtOne =  document.getElementById("numOne")! as HTMLInputElement;
         const txtTwo =  document.getElementById("numTwo")! as HTMLInputElement;


         //event handling
         button?.addEventListener('click',handleClick);

         //function for handle Click
         function handleClick(this: HTMLElement){
             txtName.value;
             txtOne.value;
             txtTwo.value;
             console.log(addHTMLNumber( txtOne.value,txtTwo.value));
            }
}

//not event 
function addHTMLNumber(numOne: any, numTwo: any){
    return +numOne + +numTwo;
}