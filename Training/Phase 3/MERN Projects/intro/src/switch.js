function App(){
    const fruits = ['Appple' ,'Orange' ,'Grapes'];
    return(<>
        <BasketMsg fruits = {fruits} />
        </>)

}

function BasketMsg(props){
    switch(props.fruits.length){
        case 0:
            return <h2>
             You have no fruits in the basket 
            </h2>;
        default:
            return <h2>
                You Have {props.fruits.length} fruits in Basket
            </h2>
    }
}
    
export default App;