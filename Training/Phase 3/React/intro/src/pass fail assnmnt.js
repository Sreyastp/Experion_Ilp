//incomplete assnmnt need to be completed

function App() {
  const mark = 55;
  return <>{mark > 50 ? <PASS /> : <FAIL />}</>;
}

function PASS() {
  return "You Passed";
}

function FAIL() {
  return "You Failed";
}


export default App;
