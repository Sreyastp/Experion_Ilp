function App(){
    return (<>
        <button onClick={(myevent) => showAlert("HI",myevent) } > Click Me </button>
    </>);
}

function showAlert(msg,myevent){
    alert("just an alert" + msg)
    alert("event type is " + myevent.type)

}

export default App;