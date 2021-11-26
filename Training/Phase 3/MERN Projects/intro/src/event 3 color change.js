function App() {
  return (
    <>
      <button onClick={(myevent) => changeColor("Hi", myevent)}>
        {" "}
        click me
      </button>{" "}
      <button onClick={(myevent) => changeColor("Hi", myevent)}>
        {" "}
        click me
      </button>{" "}
      <button onClick={(myevent) => changeColor("Hi", myevent)}>
        {" "}
        click me
      </button>{" "}
    </>
  );
}

function changeColor(msg, myevent) {
  alert("just a message " + msg);

  myevent.target.style.background = "orange";

  myevent.target.style.color = "black";
}

export default App;

// function App() {

//     return (

//       <div>

//         <button onClick = { (objEvent)=>changeBox( "blue", objEvent)}>blue</button>

//         <br/>

//         <br />

//         <button onClick = { (objEvent)=>changeBox("red", objEvent)}>red</button>

//         <br/>

//         <br/>

//         <button onClick = { (objEvent)=>changeBox("green", objEvent)}>green</button>

//       </div>

//     );

//   }

//   function changeBox(color, objEvent){

//     objEvent.target.style.background = color;

//   }

//   export default App;
