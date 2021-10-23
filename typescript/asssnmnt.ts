function clkFunction(){
    console.log("ready to go");


        //querySelector() method returns the first elemnts that matches 
        // a specified

        //specify for identifying the elements
         const button=document.querySelector("button");
         const txtName =  document.getElementById("name")! as HTMLInputElement;

         
      


         //event handling
         button?.addEventListener('click',handleClick);

         //function for handle Click
         function handleClick(this: HTMLElement){
             txtName.value;
             
             console.log(print1('Sreyas'));
            }
}

//not event 
function print1(numOne: string){
    return numOne; 
}


